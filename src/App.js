import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './Home';
import User from './User'

function App() {
  return (
    <BrowserRouter >
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/user" element={<User />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
