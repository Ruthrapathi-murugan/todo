import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ task, description });
        setTask('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form-container">
            <input
                type="text"
                placeholder="Todo Name"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <input
                type="text"
                placeholder="Todo Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
