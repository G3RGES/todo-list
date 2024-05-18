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

    // console.log(todos); //*TESTING
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, idx) => (
        <Todo task={todo} key={idx} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
};

export default TodoWrapper;
