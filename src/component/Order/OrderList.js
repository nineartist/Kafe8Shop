import OrderItem from "./OrderItem";
import classes from "./OrderList.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import CardGroup from "react-bootstrap/CardGroup";

function OrderList(props) {
  return (
    <div class="row row-cols-2 row-cols-md-2 g-4">
      {props.orders.map((order) => (
        <OrderItem
          key={order.id}
          id={order.id}
          image={order.image}
          title={order.title}
          price={order.price}
          description={order.description}
        />
      ))}
    </div>
    // <Carousel variant="dark">
    //   {props.orders.map((order) => (
    //     <OrderItem
    //       key={order.id}
    //       id={order.id}
    //       image={order.image}
    //       title={order.title}
    //       price={order.price}
    //       description={order.description}
    //     />
    //   ))}
    // </Carousel>
    // <CardGroup>
    //   {props.orders.map((order) => (
    //     <OrderItem
    //       key={order.id}
    //       id={order.id}
    //       image={order.image}
    //       title={order.title}
    //       price={order.price}
    //       description={order.description}
    //     />
    //   ))}
    // </CardGroup>
    // <ul className={classes.list}>
    //   {props.orders.map((order) => (
    //     <OrderItem
    //       key={order.id}
    //       id={order.id}
    //       image={order.image}
    //       title={order.title}
    //       price={order.price}
    //       description={order.description}
    //     />
    //   ))}
    // </ul>
  );
}

export default OrderList;
