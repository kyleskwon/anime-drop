// @flow
import React from 'react'
import AL from '../../../api/anilist'
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

  componentWillMount () {
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
      let averageScore = (Math.round(parseInt(details.average_score)))/10;
      content = <div>
        <p>{details.title_romaji}</p>
        <img src={details.image_url_lge} />
        <p>{averageScore}</p>
      </div>
    } else {
      console.log('loading');
      content = <div>Loading...</div>
    }
    return <div>
      <Link to="/">home</Link>
      <div className="anime-details">
        {content}
      </div>
      {JSON.stringify(details)}
    </div>
  }
}

const mapStateToProps = ({ animeCache }) => ({ animeCache });

const mapDispatchToProps = dispatch => ({
  getAnimeDetails(id: string){
    dispatch(getAnimeDetails(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AnimeDetails)
