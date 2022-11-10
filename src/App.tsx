import React from 'react';
import { Routes, Route } from "react-router-dom";
import SignIn from './pages/signIn';
import Singup from './pages/signUp/signUp';
import Home from './pages/HomePage';
import Autenthific from './pages/Authentification/Autenthific';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/manage" element={<SignIn />} />
        <Route path="/count" element={<Singup />} />
        <Route path="*" element={<NotFound />} /> 
        <Route path="count/Autenthific" element={<Autenthific />} /> 
      </Routes>
    </>
  );
};

export default App;
