import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AddTodoProps {
    addTodo: (task: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
    const [task, setTask] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (task.trim()) {
            addTodo(task);
            setTask('');
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={handleChange}
                placeholder="Add a new task"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo;
