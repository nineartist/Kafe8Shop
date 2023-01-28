import { Route, Switch } from "react-router-dom";

import Layout from "./component/layout/Layout";
import Cart from "./pages/Cart";
import Menus from "./pages/Menus";
import NewMenus from "./pages/NewMenuPage";
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
        <Route path="/addMenu">
          <NewMenus />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
