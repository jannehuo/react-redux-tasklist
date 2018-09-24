import React, {PropTypes} from 'react';

const SingleTask = ({num, name, done, remove, update}) => {
    return (
        <li data-item-num={num} className={done ? 'task-done' : ''}>
            <div className="item-content">
               <span className="item-content-text">{name}</span>
               <div className="item-content-controls">
                    <button className="btn" onClick={() => { remove(num); }}>
                        <i className="material-icons md-36">delete</i>
                    </button>
                    <button className="btn" onClick={() => { update(num); }}>
                        <i className="material-icons md-36">done</i>
                    </button>
               </div>
            </div>
        </li>
    );
};

SingleTask.propTypes = {
    num: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    remove: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired
};

export default SingleTask;