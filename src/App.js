import './App.css';
import MovieApp from './components/movie';
import { BrowserRouter as Router, Route,Routes, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MovieApp />
    </div>
  );
}

export default App;
