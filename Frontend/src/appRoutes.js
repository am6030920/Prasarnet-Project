import React from 'react';
import {BrowserRouter as Router,Routes,Navigate,Route} from 'react-router-dom';
import Login from './project/auth/Login';
import Register from './project/auth/Register';
import DsahBoard from './project/DsahBoard';
import Profile from './project/Profile';
import TodoList from './project/TodoList';
import TodoFrom from './project/TodoFrom';


const AppRoutes = () => {

  return (
      <Routes >
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/> 
             <Route path='/register' element={<Register/>}/>   
             <Route path='/dashboard' element={<DsahBoard />}/>
            <Route path='/Profile' element={<Profile/>}/>
            <Route path="/TodoList" element={<TodoList />}/>

            <Route path="/todoFrom" element={<TodoFrom />}/>
      </Routes>
  )
};

export default AppRoutes
