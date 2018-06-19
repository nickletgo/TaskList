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
        //Translate numbers to meaningful description
        const statusDes = ['Open', 'In Progress', 'Closed'];
        const priorityDes = ['High', 'Medium', 'Low'];
        const taskItems = this.state.tasks.sort((t1, t2) => {
            if(t1.status == t2.status) {
                return t1.rank - t2.rank;
            } else {
                return t1.status - t2.status;
            }
        }).map((task) => {
            task.status = statusDes[task.status || 0];
            task.priority = priorityDes[task.priority < 3 ? task.priority : 2];
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
                        <th>Estimate</th>
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