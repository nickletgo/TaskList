import React from 'react';
import {Link} from 'react-router-dom';

const TaskItem = ({task}) => {
    const statusDes = ['Open', 'In Progress', 'Closed'];
    return (
    <tr> 
        <td>{task.taskId}</td>
        <td>{task.taskName}</td> 
        <td>{task.priority}</td> 
        <td>{task.dueOn}</td> 
        <td>{statusDes[task.status || 0]}</td>
        <td><Link to={{
                pathname: `/tasks/${task.id}`,
                state: { 
                    update: true
                    }
            }}>View Details</Link></td>
    </tr>);
};

export default TaskItem;