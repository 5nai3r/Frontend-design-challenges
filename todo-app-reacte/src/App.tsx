import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

export interface Todo {
  id: string;
  task: string;
  completed: boolean;
}


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState<boolean | string>(false)

  useEffect(() => {
    setFilter("all")
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  const addTodo = (task: string) => {
    const newTodo: Todo = { id: uuidv4(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const removeCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const filtredList = () => {
    return filter == "all" ? todos : todos.filter(todo => todo.completed == filter)
  }

  const remaining = () => {
    return todos.filter(todo => !todo.completed).length
  }

  return (
    <div data-theme="dark">
      <div className="app">

        <header>
          <h1>TODO</h1>
          <label htmlFor="darkModeToggle" className="darkmode-switch">
            <input aria-label="switch-theme" type="checkbox" id="darkModeToggle" />
            <span className="checkbox-icon"></span>
          </label>
        </header>

        <div className="todo-input">
          <AddTodo addTodo={addTodo} />
        </div>



        <TodoList todos={filtredList()} removeTodo={removeTodo} toggleTodo={toggleTodo} />

        <div className="todo-footer">
          <span> {remaining()}  items left</span>
          <div className="filter">
            <button onClick={() => setFilter('all')} >All</button>
            <button onClick={() => setFilter(false)}>Active</button>
            <button onClick={() => setFilter(true)}>Completed</button>
          </div>
          <button onClick={removeCompleted} >Clear completed</button>
        </div>

      </div>
    </div>
  );
};

export default App;
