import React from 'react';
import NavBar from './NavBar';
import Login from './User/Login';
import SignUp from './User/SignUp';
import { Routes, Route } from 'react-router';

const App = () => {
  return (
    <div className='app-container'>
      <NavBar />
      <p>My App</p>
      <p>Add Cool Stuff Here</p>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
