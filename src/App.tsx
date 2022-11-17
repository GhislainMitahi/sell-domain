import React from 'react';
import { Routes, Route } from "react-router-dom";
import SignIn from './pages/signIn';
import Singup from './pages/signUp/signUp';
import Home from './pages/Home/HomePage';
import Autenthific from './pages/Authentification/Autenthific';
import Domains from './pages/Domains/Domains';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/manage" element={<SignIn />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/count" element={<Singup />} />
        <Route path="*" element={<NotFound />} /> 
        <Route path="count/Autenthific" element={<Autenthific />} /> 
        <Route path="count/Autenthific" element={<Autenthific />} /> 
      </Routes>
    </>
  );
};

export default App;
