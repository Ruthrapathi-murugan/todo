import React, { useState } from 'react';

const Todo = ({ todo, index, updateTodo, deleteTodo, changeStatus }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(todo.task);
    const [editDescription, setEditDescription] = useState(todo.description);

    const handleEdit = () => {
        updateTodo(index, { ...todo, task: editTask, description: editDescription });
        setIsEditing(false);
    };

    return (
        <div className="todo-card">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editTask}
                        onChange={(e) => setEditTask(e.target.value)}
                    />
                    <input
                        type="text"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                </div>
            ) : (
                <div>
                    <h2>{todo.task}</h2>
                    <p>{todo.description}</p>
                    <div className={`status ${todo.status === 'completed' ? 'completed' : 'not-completed'}`}>
                        <select value={todo.status} onChange={(e) => changeStatus(index, e.target.value)}>
                            <option value="not completed">Not Completed</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
                    <button className="delete" onClick={() => deleteTodo(index)}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default Todo;
