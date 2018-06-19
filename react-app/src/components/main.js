import React, {Component} from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import TaskMain from './TaskMain';
import TaskForm from './tasklist/TaskForm';
import StatusTracker from './tracker/StatusTracker';

class Main extends Component {
  render() {
    return (
      <Router> 
        <div>
        <Route exact path="/" component={TaskMain} />
        <Route path="/newtask" component={TaskForm} />
        <Route path="/tasks/:id" component={TaskForm} />
        <Route path="/status" component={StatusTracker} />
        </div>
      </Router>
    );
  }
}

export default Main;