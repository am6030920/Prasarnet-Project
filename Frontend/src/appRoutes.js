import React from 'react';
import {BrowserRouter as Router,Routes,Navigate,Route} from 'react-router-dom';
import Login from './project/auth/Login';
import Register from './project/auth/Register';
import DsahBoard from './project/DsahBoard';
import Profile from './project/Profile';
import TodoList from './project/TodoList';
import TodoFrom from './project/TodoFrom';


const AppRoutes = () => {
  const token = localStorage.getItem("token");

  return (
      <Routes >
            <Route path='/' element={token ?<Navigate to="/dashboard" />: <Navigate to="/login" /> }/>
            <Route path='/login' element={token ? <Navigate to="/dashboard" />:<Login/>}/> 
             <Route path='/register' element={token ? <Navigate to="/dashboard" />:<Register/> }/>   
             <Route path='/dashboard' element={token ? <DsahBoard/> : <Navigate to="/login" /> }/>
            <Route path='/Profile' element={token ? <Profile/> : <Navigate to="/login" /> }/>
            <Route path="/TodoList" element={token ? <TodoList /> : <Navigate to="/login" /> }/>

            <Route path="/todoFrom" element={token ? <TodoFrom /> : <Navigate to="/login" /> }/>
      </Routes>
  )
};

export default AppRoutes