import "./app.css";

import Login from './components/Login Page/FormularioL';
import Register from './components/Register Page/FormularioR';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/" component={ Register } />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
