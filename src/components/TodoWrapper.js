import React, { useState } from "react";

// components
import TodoForm from "./TodoForm";
import { EditTodoForm } from "./EditTodoForm";
import { Todo } from "./Todo";

// uuid
import { v4 as uuidv4 } from "uuid";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);

    console.log(todos);
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      <Todo />
    </div>
  );
};

export default TodoWrapper;
