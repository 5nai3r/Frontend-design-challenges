import React, { useState, ChangeEvent } from 'react';

interface AddTodoProps {
    addTodo: (task: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
    const [task, setTask] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };

    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            if (task.trim()) {
                addTodo(task);
                setTask('');
            }
        }
    };

    return (

        <div className="todo-item">
            <label className="checkbox">
                <input aria-label='toggle' type="checkbox" v-model="todo.completed" />
                <span className="checkbox-icon"></span>
            </label>
            <input aria-label="add" type="text" className="text" value={task}
                onChange={handleChange}
                onKeyUp={handleKeyPress}
            />
        </div>
    );
};

export default AddTodo;
