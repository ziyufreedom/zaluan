import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import App from '../pages/index'

export default class RouteConfig extends Component {
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route path='/' component={App}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
