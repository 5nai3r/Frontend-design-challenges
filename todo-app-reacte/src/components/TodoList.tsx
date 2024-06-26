import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../App';

interface TodoListProps {
    todos: Todo[];
    removeTodo: (task: string) => void;
    toggleTodo: (id: string) => void;

}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo, toggleTodo }) => {
    return (
        <div className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            ))}
        </div>

    );
};

export default TodoList;