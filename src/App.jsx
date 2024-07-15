import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import Filter from './Filter';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    const addTodo = (todo) => {
        setTodos([...todos, { ...todo, status: 'not completed' }]);
    };

    const updateTodo = (id, updatedTodo) => {
        setTodos(todos.map((todo, index) => (index === id ? updatedTodo : todo)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo, index) => index !== id));
    };

    const changeStatus = (id, status) => {
        setTodos(todos.map((todo, index) => (index === id ? { ...todo, status } : todo)));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'all') return true;
        return todo.status === filter;
    });

    return (
        <div id="root">
            <div className="app-container">
                <h1 className="header">My todo</h1>
                <div className="todo-form-container">
                    <TodoForm addTodo={addTodo} />
                    <Filter setFilter={setFilter} />
                </div>
                <h2>My Todos</h2>
                <div className="todos-container">
                    {filteredTodos.map((todo, index) => (
                        <Todo
                            key={index}
                            todo={todo}
                            index={index}
                            updateTodo={updateTodo}
                            deleteTodo={deleteTodo}
                            changeStatus={changeStatus}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
