import React, {Component} from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import TaskList from './tasklist/TaskList';
import TaskForm from './tasklist/TaskForm';

class Main extends Component {
  render() {
    return (
      <Router> 
        <div>
        <Route exact path="/" component={TaskList} />
        <Route path="/newtask" component={TaskForm} />
        </div>
      </Router>
    );
  }
}

export default Main;