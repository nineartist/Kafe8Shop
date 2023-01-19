import { useContext } from "react";
import OrderList from "../component/Order/OrderList";
import CartContext from "../component/Store/AddToCart";

function Cart() {
  const orderInCartCTX = useContext(CartContext);

  let content;

  if (orderInCartCTX.totalOrder === 0) {
    content = <p> You got no order yet.</p>;
  } else {
    content = <OrderList orders={orderInCartCTX.cartOrder} />;
  }

  return (
    <section>
      <h1>Your Cart here</h1>
      {content}
    </section>
  );
}

export default Cart;
