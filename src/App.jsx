import { useState } from "react";
import Items from "./components/Items";
import { groceryItems } from "./data/groceryItems";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";
const App = () => {
  const [items, setItems] = useState(groceryItems);

  const editCompleted = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setItems(newItems);
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);

    toast.success("Item Deleted");
  };

  return (
    <section className="section-center">
      <Items
        items={items}
        editCompleted={editCompleted}
        removeItem={removeItem}
      />

      <ToastContainer position="top-center" autoClose={2000} />
    </section>
  );
};

export default App;
