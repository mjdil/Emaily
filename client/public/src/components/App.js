import Landing from './landing';
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import connect from 'react-redux'
import * as actions from '../actions';
import header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';



class App extends Component {

 componentDidMount() {
   this.props.fetchUser();

 }


  render() {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
        <header />
        <Route exact path="/" component={Landing}/>
        <Route exact path="/surveys" component={Dashboard}/>
        <Route exact path="/surveys/new" component={SurveyNew}/>
        </div>
     </BrowserRouter>
    </div>
  );
  }
};

export deafult connect(null, actions) (App);
