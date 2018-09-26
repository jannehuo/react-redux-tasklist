/* eslint-disable import/no-named-as-default */
import React from 'react';
import {Route,IndexRoute} from 'react-router';
import Homepage from './components/home/HomePage';
import Aboutpage from './components/about/AboutPage';
import Tasks from './components/tasks/Tasks';
import App from './App';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Homepage} />
        <Route path="about" component={Aboutpage} />
        <Route path="tasks" component={Tasks} />
    </Route>
);