import React, { Component} from 'react';
import axios from 'axios';
import StatusTrackerRow from './StatusTrackerRow';
import {Table} from 'react-bootstrap/lib';

class StatusTracker extends Component {
    constructor(props){
        super(props);

        this.state = {
            assigneeStatuses: []
        };

        this.apiUrl = '/api/tasks/assignee-status';
    }

    componentDidMount(){
        axios.get(this.apiUrl).then((res) => {
            this.setState({assigneeStatuses : res.data});
        });
    }

    render(){
        //Translate numbers to meaningful description
        const statusDes = ['Open', 'In Progress', 'Closed'];
        const statusRows = this.state.assigneeStatuses.map((status) => {
            return (<StatusTrackerRow status={status} key={status.assignee} />);
        });
    
        return (
            <div>
            <Table>
                <thead>
                    <tr>
                        <th>Assignee</th>
                        <th>{statusDes[0]}</th>
                        <th>{statusDes[1]}</th>
                        <th>{statusDes[2]}</th>
                    </tr>
                </thead>
                <tbody>
                    {statusRows}
                </tbody>
            </Table>
            </div>
        );
    }
}

export default StatusTracker;