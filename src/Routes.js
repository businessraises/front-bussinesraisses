import React from 'react'

import Login from './components/Login Page/FormularioL';
import Register from './components/Register Page/FormularioR';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Routes = () => {
    return (
        <Router>
            <div className="App">
                
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>

            </div>
        </Router>
    )
}

export default Routes