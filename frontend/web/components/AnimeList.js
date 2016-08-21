// @flow
import React, { Component } from 'react'
import { Link } from 'react-router'

class AnimeList extends Component {
  props: {
    animes: Array<Object>
  }

  formatScore (averageScore: number) {
    return averageScore === 0 ? "" : averageScore
  }

  render() {
    const {
      animes
    } = this.props

    let animeList

    if (animes) {
      animeList = animes
          .sort((a, b) => a.average_score > b.average_score ? -1 : 1)
          .map((anime, i) => (
            <li className="anime-item" key={i}>
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

    return (
      <div className="home">
        <ul className="anime-container">
          {animeList}
        </ul>
      </div>
    )
  }
}

export default AnimeList
