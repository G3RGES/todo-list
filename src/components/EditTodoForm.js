import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(value); //*TESTING

    editTodo(value, task.id);

    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        onChange={(e) => setValue(e.target.value)}
        placeholder={value}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
