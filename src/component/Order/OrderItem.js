import { useContext } from "react";
import CartContext from "../Store/AddToCart";
import Card from "react-bootstrap/Card";

// import Card from "../ui/Card";
import classes from "./OrderItem.module.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Carousel from "react-bootstrap/Carousel";

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
  // const CarouselItem = () => (
  //   <Carousel.Item>
  //     <img className="d-block w-100" src={props.image} alt={props.title} />
  //     <Carousel.Caption>
  //       <h5>{props.price}</h5>
  //       <p>{props.description}</p>
  //       <div className={classes.actions}>
  //         <button onClick={toggleCartHandler}>
  //           {itemIncart ? "Remove From Favorite" : "Add To Favorite"}
  //         </button>
  //       </div>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  // );

  return (
    <div class="col">
      <div class="card">
        <img src={props.image} class="card-img-top" alt={props.title} />
        <div class="card-body">
          <h3 class="card-title">{props.title}</h3>
          <address>{props.price} THB</address>
          <p class="card-text">{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleCartHandler}>
            {itemIncart ? "Remove From Favorite" : "Add To Favorite"}
          </button>
        </div>
      </div>
    </div>

    // <li className={classes.item}>
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src="kafe8_logo.jpg" />
    //   <Card.Body>
    //     <Card.Title>{props.title}</Card.Title>
    //     <Card.Text>
    //       <p>{props.description}</p>
    //       <address>{props.price} THB</address>
    //     </Card.Text>
    //     <div className={classes.actions}>
    //       <button onClick={toggleCartHandler}>
    //         {itemIncart ? "Remove From Favorite" : "Add To Favorite"}
    //       </button>
    //     </div>
    //   </Card.Body>
    // </Card>
    // </li>
    // <li className={classes.item}>
    //   <Card>
    //     <div className={classes.image}>
    //       <img src={props.image} alt={props.title} />
    //     </div>
    //     <div className={classes.content}>
    //       <h3>{props.title}</h3>
    //       <address>{props.price}</address>
    //       <p>{props.description}</p>
    //     </div>
    //     <div className={classes.actions}>
    //       <button onClick={toggleCartHandler}>
    //         {itemIncart ? "Remove From Favorite" : "Add To Favorite"}
    //       </button>
    //     </div>
    //   </Card>
    // </li>
  );
}

export default OrderItem;
