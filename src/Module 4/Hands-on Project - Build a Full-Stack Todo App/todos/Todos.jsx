import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './todosSlice';

const TodoItem = ({ todo, onToggle, onDelete }) => (
  <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
    <span onClick={() => onToggle(todo.id)} style={{ cursor: 'pointer' }}>
      {todo.text}
    </span>
    <button onClick={() => onDelete(todo.id)} style={{ marginLeft: 10 }}>
      Delete
    </button>
  </li>
);

const Todos = () => {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const handleAddTodo = () => {
    if (!input.trim()) {
      setError('Task cannot be empty.');
      return;
    }
    try {
      dispatch(addTodo(input.trim()));
      setInput('');
      setError(null);
    } catch {
      setError('Failed to add task.');
    }
  };

  const handleToggleTodo = id => {
    try {
      dispatch(toggleTodo(id));
      setError(null);
    } catch {
      setError('Failed to toggle task.');
    }
  };

  const handleDeleteTodo = id => {
    try {
      dispatch(deleteTodo(id));
      setError(null);
    } catch {
      setError('Failed to delete task.');
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Add new todo"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
