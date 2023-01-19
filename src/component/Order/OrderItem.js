import { useContext } from "react";
import CartContext from "../Store/AddToCart";

import Card from "../ui/Card";
import classes from "./OrderItem.module.css";

function OrderItem(props) {
  const cartCtx = useContext(CartContext);

  const itemIncart = cartCtx.orderInCart(props.id);

  function toggleCartHandler() {
    if (itemIncart) {
      cartCtx.removeOrder(props.id);
    } else {
      cartCtx.addToCart({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        price: props.price,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.price}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleCartHandler}>
            {itemIncart ? "Remove From Favorite" : "Add To Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default OrderItem;
