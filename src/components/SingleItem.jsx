import { FiEdit2, FiTrash2 } from "react-icons/fi";

const SingleItem = ({ item, editCompleted, removeItem, startEdit }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editCompleted(item.id)}
      />

      <p
        style={{
          textDecoration: item.completed ? "line-through" : "none",
        }}
      >
        {item.name}
      </p>

      <button
        className="btn edit-btn"
        type="button"
        onClick={() => startEdit(item.id, item.name)}
      >
        <FiEdit2 size={18} />
      </button>

      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
};

export default SingleItem;
