import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditedText(todo.text);
  };

  const handleEditSave = () => {
    if (editedText.trim() !== '') {
      onEdit(todo.id, editedText);
      setIsEditing(false);
    }
  };

  return (
    <li className="displayTask">
      <input
        type="checkbox" title='mark as completed'
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{ marginRight: '10px', cursor: 'pointer' }}
      />

      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleEditSave();
          }}
          className="editInput"
        />
      ) : (
        <span
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          className="displaySpan"
        >
          {todo.text}
        </span>
      )}

      <button onClick={handleEditToggle} className="editBtn" aria-label="Edit Task" title='edit task'>
        <FontAwesomeIcon icon={isEditing ? faSave : faEdit} size="lg"/>
      </button>

      <button onClick={() => onDelete(todo.id)} className="deleteBtn" aria-label="Delete Task" title='delete task'>
        <FontAwesomeIcon icon={faTrash} size="lg"/>
      </button>
    </li>
  );
}

export default TodoItem;
