import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginPage from './LoginPage';

const Routes = () => (
    <routes>
        <Switch>
            <Route exact path='/' component={LoginPage}/>
            </Switch>
    </routes>
);

export default Routes;