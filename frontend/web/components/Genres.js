// @flow
import React from 'react'
import { connect } from 'react-redux'
import { getGenres } from '../../actions/animeList'
import { withRouter } from 'react-router'

const Genre = ({ handleClick, genre, genresArr}) => {
  let currentFilter = genresArr.includes(genre.genre) ? 'current genre' : 'genre'
  return (
    <li className={currentFilter} onClick={handleClick}>{genre.genre}</li>
  )
}

class Genres extends React.Component {

  loadGenres() {
    if(this.props.genres.length < 1) {
      this.props.getGenres()
    }
  }

  componentWillMount(){
    this.loadGenres()
  }

  updateGenres(genre){
    let { router, routing } = this.props,
        currentGenres = routing.location.query.genres,
        currentPath = routing.location.pathname,
        genres,
        genresArr = currentGenres ? currentGenres.split(',') : []

    if(genresArr.includes(genre.genre)) {
      genresArr = genresArr.filter(g => g !== genre.genre)
    } else {
      genresArr.push(genre.genre)
    }

    if(genresArr.length > 0 ) {
      genres = genresArr.join(',')
      console.log(router)
      router.replace({
        pathname: currentPath,
        query: { genres }
      })
    } else {
      router.replace({
        pathname: currentPath,
        query: {}
      })
    }

  }

  render() {
    const { genres, routing } = this.props,
          currentGenres = routing.location.query.genres,
          genresArr = currentGenres ? currentGenres.split(',') : []
    return (
      <ul className="genres">
        {genres.map(genre => <Genre genresArr={genresArr} key={genre.id} handleClick={this.updateGenres.bind(this, genre)} genre={genre} />)}
      </ul>
    )
  }
}

export default connect(({ genres, routing }) => ({ genres, routing }), { getGenres })(withRouter(Genres))
