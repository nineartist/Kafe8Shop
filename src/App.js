import { Route, Switch } from "react-router-dom";

import Layout from "./component/layout/Layout";
import Cart from "./pages/Cart";
import Menus from "./pages/Menus";
import Profile from "./pages/Profile";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <Menus />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
