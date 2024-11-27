import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Homepage />
      </main>
    </BrowserRouter>
  );
}

export default App;
