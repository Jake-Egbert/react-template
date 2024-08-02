import {
  Route,
  Redirect,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import ComponentTwo from "../pages/ComponentTwo";
import ComponentOne from "../pages/ComponentOne";
import NoPage from "../pages/NoPage";
import Login from "../pages/Login";

export default function Navigation() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/component-one" component={ComponentOne} />
      <Route path="/component-two" component={ComponentTwo} />
      <Route path="no-page" component={NoPage} />
      <Route to="*" component={NoPage} />
      <Redirect from="/" to="/login" />
    </Switch>
  );
}
