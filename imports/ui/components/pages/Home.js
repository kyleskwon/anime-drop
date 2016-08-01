import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Todos from '../../../api/collections/todos';
import  { getLatestSeason } from '../../actions/animeList';

class Home extends Component {
  componentWillMount() {
    if(this.props.animes.length === 0) {
      this.props.getLatestSeason();
    }
  }

  formatScore (averageScore) {
    if (averageScore == 0) {
      return "Not yet rated"
    } else {
      return parseInt(averageScore)/10
    }
  }
  render(){
    let { form, submitHandler, serverError, todos, animes } = this.props;
    let animeList = null;
    if(animes.length > 0){
      console.log(animes);
      animeList = animes.map((anime, i) => (
        <li className="anime-item" key={i}>
          <Link to={`/anime/${anime.id}`}>
            <h3>{anime.title_english}</h3>
            <img src={anime.image_url_med} />
            <h4>{this.formatScore(anime.average_score)}</h4>
          </Link>
        </li>
      ))
    }

    return (
      <div className="home">
        <div className="notifier">
          {serverError.error ? <div className="server-error">{serverError.error.reason}</div> : "" }
        </div>
        <ul className="anime-container">
          {animeList}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = ({ serverError, todos, form, animes }) => ({
  serverError,
  todos,
  animes,
  form: form.addTodoForm
})

const mapDispatchToProps = dispatch => ({
  getAllTodos: () => {
    dispatch(getAllTodos())
  },
  getLatestSeason(){
    dispatch(getLatestSeason())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
