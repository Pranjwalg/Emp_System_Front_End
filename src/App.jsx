import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import AddEmployeeForm from './components/AddEmployee';

const App = () => {
  return (
    
    <Router>
    <Navbar/>
    <Routes  >
     
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/add' element={<AddEmployeeForm/>} />
    </Routes>
    
    </Router>
  )
}

export default App