import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import Todos from '../../../api/collections/todos';
import  { createTodo, getAllTodos, getLatestSeason } from '../../actions/actions';

class Home extends Component {
  componentWillMount() {
    this.props.getLatestSeason();
    this.props.getAllTodos();
  }
  render(){
    let { form, submitHandler, serverError, todos, animes } = this.props;
    let animeList = null;
    if(animes.length > 0){
      animeList = animes.map(anime => (
        <li className="anime-item">
          <h3>{anime.title_english}</h3>
          <img src={anime.image_url_med} />
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
