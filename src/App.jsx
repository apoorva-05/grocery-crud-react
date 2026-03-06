import { useState } from "react";
import Items from "./components/Items";
import { groceryItems } from "./data/groceryItems";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";

import { nanoid } from "nanoid";
import Form from "./components/Form";

const App = () => {
  const [items, setItems] = useState(groceryItems);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };

    const newItems = [...items, newItem];
    setItems(newItems);

    toast.success("grocery item added");
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);

    toast.success("Item Deleted");
  };

  const editCompleted = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const updated = { ...item, completed: !item.completed };

        if (updated.completed) {
          toast.success("Item Completed");
        }

        return updated;
      }
      return item;
    });

    setItems(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" autoClose={2000} />

      <Form addItem={addItem} />

      <Items
        items={items}
        editCompleted={editCompleted}
        removeItem={removeItem}
      />
    </section>
  );
};

export default App;
