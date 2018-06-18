import React from 'react';

const TaskItem = ({task}) => {
    return (
    <tr> 
        <td>{task.taskId}</td>
        <td>{task.taskName}</td> 
        <td>{task.priority}</td> 
        <td>{task.dueOn}</td> 
    </tr>);
};

export default TaskItem;