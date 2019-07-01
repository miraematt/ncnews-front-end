import React from "react";

const DeleteButton = ({ remove, id }) => {
  return (
    <button className="delete button" onClick={() => remove(id)}>
      Delete
    </button>
  );
};

export default DeleteButton;
