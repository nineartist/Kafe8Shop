import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Store/AddToCart";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const cartCtx = useContext(CartContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Kafe8</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Our Menus</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart
              <span className={classes.badge}>{cartCtx.totalOrder}</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
