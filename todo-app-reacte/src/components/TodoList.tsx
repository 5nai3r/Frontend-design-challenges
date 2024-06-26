import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../App';
import { Reorder } from "framer-motion"

interface TodoListProps {
    todos: Todo[];
    removeTodo: (task: string) => void;
    toggleTodo: (id: string) => void;
    setTodos: (todos: Todo[]) => void;

}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo, toggleTodo, setTodos }) => {
    return (
        <div className="todo-list">
            <Reorder.Group axis="y" values={todos} onReorder={setTodos} className="todo-list">
                {todos.map((todo) => (

                    <Reorder.Item key={todo.id} value={todo}>

                        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />

                    </Reorder.Item>

                ))}
            </Reorder.Group>
        </div>

    );
};

export default TodoList;
