import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div style={{textAlign:"center"}}>
    <h1>Learn abount redux toolkit</h1>
    <AddTodo/>
    <Todos/>
    </div>
  );
}

export default App;
