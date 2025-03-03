import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import { AppContent } from "./context/AppContext"; // Import the context

const App = () => {
  const { isLoggedIn } = useContext(AppContent); // Check if the user is logged in

  return (
    <div>
      <ToastContainer />
      <Routes>
        {/* If user is not logged in, show login page */}
        <Route path="/" element={!isLoggedIn ? <UserLogin /> : <Navigate to="/home" />} />
        
        {/* If user is logged in, show Home page */}
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
