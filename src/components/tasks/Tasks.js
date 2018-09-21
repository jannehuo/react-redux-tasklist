import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as taskActions from '../../actions/taskActions';
import SingleTask from './singleTask';
import {bindActionCreators} from 'redux';

class Tasks extends React.Component {
    constructor(props,context) {
        super(props);
        this.state = {
            task: {name:'', done:false}
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitTask = this.onSubmitTask.bind(this);
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
    taskRow(task,index) {
        return <SingleTask key={index} num={index + 1} name={task.task.name} />;
    }
    render() {
        return (
            <div className="page-content">
                <h1 className="text-center">Tasks</h1>
                <form onSubmit={this.onSubmitTask}>
                    <div className="input-row">
                        <input type="text" placeholder="New Task" onChange={this.onInputChange} value={this.state.task.name}/>
                        <button type="submit" className="btn">
                            <i className="material-icons md-36">add</i>
                        </button>
                    </div>
                </form>
                <ol>
                    {this.props.tasks.map(this.taskRow)}
                </ol>
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