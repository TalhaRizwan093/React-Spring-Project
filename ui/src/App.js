
import Login from './views/Login'
import './CSS/app.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AccountInfo from './views/AccountInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Login></Login>
          </Route>
          <Route path='/AccountInfo'>
            <AccountInfo></AccountInfo>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
