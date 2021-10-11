import React from 'react'

import Login from './components/Login Page/FormularioL';
import Register from './components/Register Page/FormularioR';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Welcome from './pages/welcome'
import Home from './pages/home'

const Routes = () => {
    return (
        <Router>
            <div className="App">
                
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/register" component={Register} />

                    {/*    New Routes */}
                    <Route exact path="/welcome" component={Welcome} />
                    <Route exact path="/home" component={Home} />

                </Switch>
            </div>
        </Router>
    )
}

export default Routes
