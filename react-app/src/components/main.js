import React, {Component} from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import TaskList from './tasklist/TaskList';

class Main extends Component {
  render() {
    return (
      <Router> 
        <Route exact path="/" component={TaskList} />
      </Router>
    );
  }
}

export default Main;