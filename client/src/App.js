import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavUser from './Components/NavUser';
import Home from './Components/Home';
import Profil from './Components/Profil';
import Login from './Components/Login';
import Register from './Components/Register';
import PrivateRoute from './Components/PrivateRoute';
import HandleError from './Components/HandleError';
import EditUser from './Components/EditUser';
import ListUsers from './Components/ListUsers';
import UserDescription from './Components/UserDescription';
import ListCar from './Components/ListCar';
import DescriptionCar from './Components/descriptionCar';
import AddCar from './Components/AddCar';
import EditCar from './Components/EditCar';
import ListCarLocation from './Components/ListCarLocation';
import ListCarVente from './Components/ListCarVente';
import React from 'react';
import Footer from './Components/Footer';






function App() {
  return (
    <div>
      <NavUser/>
      <HandleError/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Profil' element={<PrivateRoute><Profil/></PrivateRoute>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/EditUser' element={<EditUser/>}/>
        <Route path='/ListUsers' element={<ListUsers/>}/>
        <Route path='/UserDescription/:id' element={<UserDescription/>}/>
        <Route path='/ListCar' element={<ListCar/>}/>
        <Route path='/ListCarLocation' element={<ListCarLocation/>}/>
        <Route path='/ListCarVente' element={<ListCarVente/>}/>
        <Route path='/DescriptionCar/:id' element={<DescriptionCar/>}/>
        <Route path='/AddCar' element={<AddCar/>}/>
        <Route path='/EditCar/:id' element={<EditCar/>}/>
        
        
        
      </Routes>
    </div>
  );
}

export default App;