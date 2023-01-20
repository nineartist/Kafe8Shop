import { useHistory } from "react-router-dom";
import NewMenuForm from "../component/Order/NewMenuForm";

function NewMenus() {
  const history = useHistory();

  function addMenuHandler(menuData) {
    fetch(
      "https://kafe8-3f1b2-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify(menuData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add new Menu</h1>
      <NewMenuForm onAddMenu={addMenuHandler} />
    </section>
  );
}

export default NewMenus;
