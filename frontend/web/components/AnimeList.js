// @flow
import React, { Component } from 'react'
import { Link } from 'react-router'
import Loader from './Loader'
import FlipMove from 'react-flip-move'

class AnimeList extends Component {
  props: {
    animes: Array<Object>
  }

  formatScore (averageScore: number) {
    return averageScore === 0 ? "" : averageScore
  }

  renderAnime() {
    const { animes } = this.props

    if (animes) {
      return animes
          .sort((a, b) => a.average_score > b.average_score ? -1 : 1)
          .map((anime, i) => (
            <li className="anime-item" key={anime.id}>
              <Link to={`/anime/${anime.id}`}>
                <img src={anime.image_url_lge} />
                <div className="overlay">
                  <h3><span>{anime.title_romaji}</span></h3>
                  {anime.average_score ? <div className="score">{this.formatScore(anime.average_score)}</div> : null}
                </div>
              </Link>
            </li>
          ))
    }
  }

  render() {
    const { animes } = this.props
    let content = <Loader />

    if(animes){
      content = (
        <FlipMove
          staggerDurationBy="30"
          duration="500"
          className="anime-container"
          typeName="ul">
          {this.renderAnime()}
        </FlipMove>
      )
    }

    return (
      <div>
        {content}
      </div>
    )
  }
}

export default AnimeList
