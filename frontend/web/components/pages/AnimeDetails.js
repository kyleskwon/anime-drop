// @flow
import React from 'react'
import { getAnimeDetails } from '../../../actions/animeDetails';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
    let details = animeCache[this.props.params.id];
    if (details) {
      console.log('got details');
      let averageScore = (Math.round(parseInt(details.average_score, 10)))/10;
      let description = details.description.replace(/<[^>]*>/ig, "");
      content = <div>
        <img src={details.image_url_lge} />
        <div className="details-container">
          <p className="title">{details.title_romaji}</p>
          <p className="average-score">{averageScore}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    } else {
      console.log('loading');
      content = <div>Loading...</div>
    }
    return <div className="main-container">
      <Link to="/">home</Link>
      <div className="anime-details">
        {content}
      </div>
    </div>
  }
}

const mapStateToProps = ({ animeCache }) => ({ animeCache });


export default connect(mapStateToProps, { getAnimeDetails })(AnimeDetails)
