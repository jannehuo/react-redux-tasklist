import React, {PropTypes} from 'react';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Loader loading={this.props.loading} />
                <Header />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCalls > 0
    };
}

export default connect(mapStateToProps)(App);