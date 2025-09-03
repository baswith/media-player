import React from 'react'
import './App.css'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import History from './Pages/History'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Slide, ToastContainer } from 'react-toastify'





function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        draggable
        theme="colored"
        transition={Slide}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Routes>
      <Footer />

    </>
  )
}

export default App