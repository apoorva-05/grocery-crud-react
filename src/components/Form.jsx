import { useState } from "react";

const Form = ({ addItem, editId, editText, setEditText, updateItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      updateItem(editText);
    } else {
      addItem(newItemName);
      setNewItemName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <input
        type="text"
        value={editId ? editText : newItemName}
        onChange={(e) =>
          editId ? setEditText(e.target.value) : setNewItemName(e.target.value)
        }
        placeholder="enter grocery item"
        className="form-input"
      />

      <button type="submit" className="btn">
        {editId ? "edit" : "add"}
      </button>
    </form>
  );
};

export default Form;
