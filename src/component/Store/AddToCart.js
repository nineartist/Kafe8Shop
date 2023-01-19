import { createContext, useState } from "react";

const CartContext = createContext({
  cartOrder: [],
  totalOrder: 0,
  addToCart: (orderInCart) => {},
  removeOrder: (orderId) => {},
  orderInCart: (orderId) => {},
});

export function CartContextProvider(props) {
  const [userOrder, setUserOrder] = useState([]);

  function addOrderHandler(orderInCart) {
    setUserOrder((prevOrderInCart) => {
      return prevOrderInCart.concat(orderInCart);
    });
  }

  function removeOrderHandler(orderId) {
    return setUserOrder((prevOrderInCart) => {
      return prevOrderInCart.filter((order) => order.id !== orderId);
    });
  }

  function orderInCartHandler(orderId) {
    return userOrder.some((order) => order.id === orderId);
  }

  const context = {
    cartOrder: userOrder,
    totalOrder: userOrder.length,
    addToCart: addOrderHandler,
    removeOrder: removeOrderHandler,
    orderInCart: orderInCartHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
