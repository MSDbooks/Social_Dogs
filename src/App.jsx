import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Login from "./Components/Login/Login"
import {UserContext} from './UserContext'


function App() {
  return (
    <>
      <BrowserRouter>
        <UserContext>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login/*" element={<Login/>}/>
          </Routes>
          <Footer/>
        </UserContext>
      </BrowserRouter>
    </>
  )
};

export default App
