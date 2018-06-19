import React, {Component} from 'react';
import TaskList from './tasklist/TaskList';
import StatusTracker from './tracker/StatusTracker';
import {Tabs, Tab, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class TaskMain extends Component {
  render() {
    return (
        <Tabs>
            <TabList>
                <Tab>{<b>Task List</b>}</Tab>
                <Tab>{<b>Task Status</b>}</Tab>
            </TabList>

            <TabPanel>
                <TaskList />
            </TabPanel>
            <TabPanel>
                <StatusTracker />
            </TabPanel>
        </Tabs>
    );
  }
}

export default TaskMain;