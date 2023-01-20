import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useState, useEffect } from "react";

import OrderList from "../component/Order/OrderList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "Arabica Mother of Coffee",
//     image:
//       "http://www.bigc.co.th/blog/wp-content/uploads/2021/02/coffee-cup-coffee-beans-JDGKZJ2.jpg",
//     price: "500 THB",
//     description:
//       "This is a first, amazing Arabica which you definitely should not miss. It will be a lot of delicious!",
//   },
//   {
//     id: "m2",
//     title: "Legendary Mother of Coffee",
//     image:
//       "https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso-coffee-cup-with-beans-on-table-restricted.jpg",
//     price: "45 THB",
//     description:
//       "This is a first, amazing coffee which you definitely should not miss. It will be a lot of delicious!",
//   },
// ];

function Menus(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedOrders, setLoadedOrders] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://kafe8-3f1b2-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const menus = [];

        for (const key in data) {
          const menu = {
            id: key,
            ...data[key],
          };
          menus.push(menu);
        }
        setIsLoading(false);
        setLoadedOrders(menus);
      });
  }, []);

  return (
    <section>
      <h1>Our Menus here</h1>
      <OrderList orders={loadedOrders} />
    </section>
  );
}

export default Menus;
