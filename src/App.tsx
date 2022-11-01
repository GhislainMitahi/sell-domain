import React from 'react';
import { Routes, Route } from "react-router-dom";
import SignIn from './pages/signIn';
import Singup from './pages/signUp';
import Home from './pages/HomePage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/manage" element={<SignIn />} />
        <Route path="/count" element={<Singup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
