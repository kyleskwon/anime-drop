// @flow
import React from 'react'
import { connect } from 'react-redux'
import { getGenres } from '../../actions/animeList'
import { withRouter } from 'react-router'

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
        currentGenres = routing.locationBeforeTransitions.query.genres,
        genres,
        genresArr = currentGenres ? currentGenres.split(',') : []

    if(genresArr.includes(genre.genre)) {
      genresArr = genresArr.filter(g => g !== genre.genre)
    } else {
      genresArr.push(genre.genre)
    }

    if(genresArr.length > 0 ) {
      genres = genresArr.join(',')
      router.replace({
        query: { genres }
      })
    } else {
      router.replace({
        query: {}
      })
    }

  }

  render() {
    const { genres } = this.props
    return (
      <ul className="genres">
        {genres.map(genre => <li onClick={this.updateGenres.bind(this, genre)} key={genre.id}>{genre.genre}</li>)}
      </ul>
    )
  }
}

export default connect(({ genres, routing }) => ({ genres, routing }), { getGenres })(withRouter(Genres))
