import React, { Component} from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import {Table, Button} from 'react-bootstrap/lib';

class TaskList extends Component {
    constructor(props){
        super(props);

        this.state = {
            tasks: []
        };

        this.taskUrl = '/api/tasks';
    }

    componentDidMount(){
        axios.get(this.taskUrl).then((res) => {
            this.setState({tasks:res.data});
        });
    }

    render(){
        const taskItems = this.state.tasks.map((task) => {
            return (<TaskItem task={task} key={task.id} />);
        });
    
        return (
            <div>
            <Table>
                <thead>
                    <tr>
                        <th>Task ID</th>
                        <th>Task Name</th>
                        <th>Priority</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {taskItems}
                </tbody>
            </Table>
            <Button type="button"  bsStyle="primary"  href="/newtask" sm={2}>Create Task</Button>
            </div>
        );
    }
}

export default TaskList;