const Items = ({ items }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <div className="single-item" key={item.id}>
            <input type="checkbox" defaultChecked={item.completed} />

            <p
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.name}
            </p>

            <button className="btn edit-btn">
              <i className="fa-regular fa-pen-to-square"></i>
            </button>

            <button className="btn delete-btn">
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
