import React from 'react';

const TaskItem = ({task}) => {
    const statusDes = ['Open', 'In Progress', 'Closed'];
    return (
    <tr> 
        <td>{task.taskId}</td>
        <td>{task.taskName}</td> 
        <td>{task.priority}</td> 
        <td>{task.dueOn}</td> 
        <td>{statusDes[task.status || 0]}</td> 
    </tr>);
};

export default TaskItem;