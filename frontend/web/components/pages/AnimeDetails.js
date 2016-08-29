// @flow
import React from 'react'
import { getAnimeDetails } from '../../../actions/animeDetails';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Loader from '../Loader'

class AnimeDetails extends React.Component {
  props: {
    animeCache: Array<Object>,
    routeParams: Object,
    getAnimeDetails: Function,
    params: Object
  }

  componentWillMount() {
    console.log('component will mount', this.props);
    let animeId = this.props.params.id;
    if(!this.props.animeCache[animeId]) {
      this.props.getAnimeDetails(this.props.params.id);
    } else {
      console.log('Cache already has this anime')
    }
  }

  componentWillReceiveProps () {

  }
  render () {
    const { animeCache } = this.props;
    let content = null;
    let details = animeCache[this.props.params.id]
    if (details) {
      console.log('got details')
      console.log(details);
      let averageScore = (Math.round(parseInt(details.average_score, 10)))/10
      let description = details.description.replace(/<[^>]*>/ig, "")
      let characters = []
      if (details.characters.length > 0) {
        characters = details.characters.slice(0, 7)
          .map((charDetail, i) => {
            return <li className="character-card" key={i}>
                <img src={charDetail.image_url_med} className="character-image" />
                <div className="name-card">
                  <div className="character-name">
                    {charDetail.name_first + " "}
                    {charDetail.name_last}
                  </div>
                  <div className="actor-name">
                    {charDetail.actor[0].name_first + " "}
                    {charDetail.actor[0].name_last}
                  </div>
                </div>
              </li>

        })
        console.log(characters)
      }
      content = <div>
        <img src={details.image_url_lge} />
        <div className="side-details-container">
          <p className="title">{details.title_romaji}</p>
          <p className="title-japanese">{details.title_japanese}</p>
          <p className="average-score">Rating: {averageScore}</p>
          <p>Airing Status: {details.airing_status}</p>

        </div>
        <div className="bottom-details-container">
          <h3>SYNOPSIS</h3>
          <p className="description">{description}</p>
          <ul className="cast">
            <h3>Main Characters</h3>
            {characters}
          </ul>
        </div>
      </div>
    } else {
      console.log('loading');
      content = <Loader />
    }
    return <div className="main-container">
      <div className="anime-details">
        {content}
      </div>
    </div>
  }
}

const mapStateToProps = ({ animeCache }) => ({ animeCache });


export default connect(mapStateToProps, { getAnimeDetails })(AnimeDetails)
