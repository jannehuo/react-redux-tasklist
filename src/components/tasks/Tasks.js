import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as taskActions from '../../actions/taskActions';
import TaskList from './taskList';
import AddTask from './addTask';
import {bindActionCreators} from 'redux';

class Tasks extends React.Component {
    constructor(props,context) {
        super(props);
        this.state = {
            task: {name:'', done:false}
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitTask = this.onSubmitTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }
    componentDidMount() {
        //console.log(this.state);
        //console.log(this.props);
    }
    onInputChange(e) {
        const task = this.state.task;
        task.name = e.target.value;
        this.setState({task:task});
    }
    onSubmitTask(e) {
        e.preventDefault();
        this.props.actions.createTask(this.state);
        this.setState({
            task: {name:'', done:false}
        });
    }
    updateTask(num) {
        this.props.actions.updateTask(num);
    }
    removeTask(num) {
        const elementToRemove = document.querySelector(`[data-item-num="${num}"]`);
        this.props.actions.removeTask(num);
    }
    render() {
        return (
            <div className="page-content">
                <h1 className="text-center">Tasks</h1>
                <AddTask inputChange={this.onInputChange} onSubmit={this.onSubmitTask} inputValue={this.state.task.name} />
                <TaskList tasks={this.props.tasks} removeTask={this.removeTask} updateTask={this.updateTask} />
            </div>
        );
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        tasks: state.Tasks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(taskActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);