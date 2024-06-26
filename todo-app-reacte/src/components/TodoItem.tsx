import React from 'react';
import { Todo } from '../App';

interface TodoItemProps {
    todo: Todo;
    removeTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, removeTodo, toggleTodo }) => {
    return (

        <>
            <div className="todo-item">
                <label className="checkbox">
                    <input aria-label="toggle" type="checkbox"
                        checked={todo.completed}
                        onClick={() => toggleTodo(todo.id)} />
                    <span className="checkbox-icon"></span>
                </label>
                <input aria-label="todo-text" type="text" className="text" value={todo.task} />
                <button aria-label="delete" className="delete" onClick={() => removeTodo(todo.id)}></button>
            </div>
        </>



    );
};

export default TodoItem;
