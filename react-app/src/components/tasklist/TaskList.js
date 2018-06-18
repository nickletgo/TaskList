import React, { Component} from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import Table from 'react-bootstrap/lib/Table';

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
            <Table>
                <thead>
                    <tr>
                        <th>Task ID</th>
                        <th>Task Name</th>
                        <th>Priority</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {taskItems}
                </tbody>
            </Table>
        );
    }
}

export default TaskList;