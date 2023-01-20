import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMenuForm.module.css";

function NewMenuForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const menuData = {
      title: enteredTitle,
      image: enteredImage,
      price: enteredPrice,
      description: enteredDescription,
    };

    props.onAddMenu(menuData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Menu title</label>
          <input type="text" require id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Menu Image</label>
          <input type="url" require id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Price</label>
          <input type="text" require id="price" ref={priceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            require
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Order</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMenuForm;
