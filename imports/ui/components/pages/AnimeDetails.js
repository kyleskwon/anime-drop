import React from 'react'
import AL from '../../../api/anilist'

class AnimeDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {details: {}};
  }
  componentWillMount () {
    AL.getAPIToken()
     .then(token=>{AL.getAnimeDetails(this.props.params.id, token)})

  }
  render () {
    console.log(this.props)
    return <div>"anime details"</div>
  }
}
export default AnimeDetails
