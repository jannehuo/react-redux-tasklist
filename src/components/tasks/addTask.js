import React, {PropTypes} from 'react';

const AddTask = ({inputChange, onSubmit, inputValue}) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="input-row">
                <input type="text" placeholder="New Task" onChange={inputChange} value={inputValue}/>
                <button type="submit" className="btn">
                    <i className="material-icons md-36">add</i>
                </button>
            </div>
        </form>
    );
};

AddTask.propTypes = {
    inputChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired
};

export default AddTask;