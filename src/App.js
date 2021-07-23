import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { Slide } from 'react-awesome-reveal';

function App() {
  return (
    <div >
      <Slide className="App">
        <p className="todoog">TodoList</p>
      </Slide>

      <Slide className="App" delay={500}>
        <TodoList />
      </Slide>
    
    </div>
  );
}

export default App;
