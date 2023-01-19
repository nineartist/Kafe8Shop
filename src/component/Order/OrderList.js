import OrderItem from "./OrderItem";
import classes from "./OrderList.module.css";

function OrderList(props) {
  return (
    <ul className={classes.list}>
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
    </ul>
  );
}

export default OrderList;
