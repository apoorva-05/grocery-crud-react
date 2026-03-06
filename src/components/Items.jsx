import SingleItem from "./SingleItem";

const Items = ({ items, editCompleted, removeItem, startEdit }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            editCompleted={editCompleted}
            removeItem={removeItem}
            startEdit={startEdit}
          />
        );
      })}
    </div>
  );
};

export default Items;
