import React, {PropTypes} from 'react';

const SingleTask = ({num,name}) => {
    return (
        <li>
            <div className="item-content">
               <span className="item-content-text">{num}. {name}</span>
               <div className="item-content-controls">
                    <button className="btn">
                        <i className="material-icons md-36">delete</i>
                    </button>
                    <button className="btn">
                        <i className="material-icons md-36">done</i>
                    </button>
               </div>
            </div>
        </li>
    );
};

SingleTask.propTypes = {
    num: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

export default SingleTask;