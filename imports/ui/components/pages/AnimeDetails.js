// @flow
import React from 'react'
import AL from '../../../api/anilist'
import { getAnimeDetails } from '../../actions/animeDetails';
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
    let animeId = this.props.routeParams.id;
    if(!this.props.animeCache[animeId]) {
      this.props.getAnimeDetails(this.props.routeParams.id);
    } else {
      console.log('Cache already has this anime')
    }
  }
  render () {
    const { animeCache } = this.props;
    let details = animeCache[this.props.params.id];
    return <div>
      <Link to="/">home</Link>
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
