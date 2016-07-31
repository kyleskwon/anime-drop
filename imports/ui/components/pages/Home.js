import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Todos from '../../../api/collections/todos';
import  { createTodo, getAllTodos, getLatestSeason } from '../../actions/actions';

class Home extends Component {
  componentWillMount() {
    this.props.getLatestSeason();
    this.props.getAllTodos();
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
      animeList = animes.map(anime => (
        <li className="anime-item">
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

function mapDispatchToProps(dispatch){
  return {
    submitHandler: (form) => {
      dispatch(createTodo(form.text.value.toLowerCase()))
    },
    getAllTodos: () => {
      dispatch(getAllTodos())
    },
    getLatestSeason(){
      dispatch(getLatestSeason())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
