
// TodoList.jsx
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import ToDoItem from './ToDoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };


  return (
    <div className='todolist'>
      <form onSubmit={handleFormSubmit} className='form'>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add new task" className='inputBox'
        />
        <button type="submit" className='addTaskBtn' title='add task'>
          <FontAwesomeIcon icon={faPlus} size="lg" style={{ color: 'blue' }}  />
          <FontAwesomeIcon icon={faTasks} />
        </button>
      </form>
      <ul className='addTask' type="none">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
            onEdit={handleEditTodo} 
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;