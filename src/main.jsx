import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home.jsx';
import Task from './components/Task.jsx';
import Dashboard from './components/DashBoard';

createRoot(document.getElementById('root')).render(
    <Router>
    <div className='flex flex-row w-screen h-screen'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/task" element={<Task/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </div>
    </Router>
)
