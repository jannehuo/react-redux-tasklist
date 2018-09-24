import React, {PropTypes} from 'react';
import SingleTask from './singleTask';

const TaskList = ({tasks, removeTask, updateTask}) => {
    const taskRow = (task,index) => {
        return <SingleTask key={index} num={index} name={task.name} done={task.done} remove={removeTask} update={updateTask}/>;
    };
    return (
        <ol>
            {tasks.map(taskRow)}
        </ol>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default TaskList;