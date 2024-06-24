import React from 'react';
import { Todo } from '../App';

interface TodoItemProps {
    todo: Todo;
    removeTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, removeTodo, toggleTodo }) => {
    return (
        <li>
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => toggleTodo(todo.id)}

            >{todo.task}</span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
    );
};

export default TodoItem;
