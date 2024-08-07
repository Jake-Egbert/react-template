import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import Second from "./components/pages/Second";
import Login from "./components/pages/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/second">Second</NavLink>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/second" component={Second} />
          <Redirect from="/" to="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
