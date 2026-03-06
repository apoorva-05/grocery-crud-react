import { useState } from "react";
import Items from "./components/Items";
import { groceryItems } from "./data/groceryItems";
import "./App.css";

const App = () => {
  const [items, setItems] = useState(groceryItems);

  const toggleCompleted = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setItems(newItems);
  };

  return (
    <section className="section-center">
      <Items items={items} toggleCompleted={toggleCompleted} />
    </section>
  );
};

export default App;
