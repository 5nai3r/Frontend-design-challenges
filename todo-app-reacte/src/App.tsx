import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

export interface Todo {
  id: string;
  task: string;
  completed: Boolean;
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

  const showRemoveCompleted = () => {
    const completedTodos = todos.filter(todo => todo.completed)
    return completedTodos.length >= 1 ? true : false
  }


  const filtredList = () => {
    return filter == "all" ? todos : todos.filter(todo => todo.completed == filter)
  }

  const remaining = () => {
    return todos.filter(todo => !todo.completed).length
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={filtredList()} removeTodo={removeTodo} toggleTodo={toggleTodo} />

      {
        showRemoveCompleted() ?
          <button onClick={removeCompleted}>remove completed</button> : null
      }

      <p>Filter</p>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter(true)}>Completed</button>
      <button onClick={() => setFilter(false)}>Active</button>

      <p>Remaining : {remaining()}</p>

    </div>
  );
};

export default App;
