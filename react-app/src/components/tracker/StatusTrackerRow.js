import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({status}) => {
    return (
    <tr> 
        <td>{status.assignee}</td>
        <td>{status.statusCount[0]}</td>
        <td>{status.statusCount[1]}</td> 
        <td>{status.statusCount[2]}</td> 
    </tr>);
};

TaskItem.propTypes = {
    status: PropTypes.shape({
        assignee: PropTypes.string,
        statusCount: PropTypes.array
    }
    )
};
export default TaskItem;