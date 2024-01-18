
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';


function App() {
  return (

    <TodoProvider>
      <div className="App">
        <h1 className='title'>To-Do List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
