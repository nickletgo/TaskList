import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const TaskItem = ({task}) => {
    return (
    <tr> 
        <td>{task.taskId}</td>
        <td>{task.taskName}</td> 
        <td>{task.priority}</td> 
        <td>{task.effort}</td> 
        <td>{task.status}</td>
        <td><Link to={{
                pathname: `/tasks/${task.id}`,
                state: { 
                    update: true
                    }
            }}>View Details</Link></td>
    </tr>);
};

TaskItem.propTypes = {
    task: PropTypes.shape({
        taskId: PropTypes.string,
        taskName: PropTypes.string,
        priority: PropTypes.Number,
        effort: PropTypes.Number,
        status: PropTypes.Number,
    }
    )
};

export default TaskItem;