import React, { useState } from "react";
import Login from "./Signup";
import { Routes, Route, useNavigate } from "react-router-dom";
import Code from "./Code";
import Mygov from "./mygov/Mygov";
import MyGovVerify from "./mygov/MyGovVerify";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    navigate("/code");
  };

  return (
    <div>
      <>
        <Routes>
          <Route
            path="/"
            // element={<Mygov />}
            element={<Login onLoginSuccess={handleLoginSuccess} />}
          />
          <Route path="/code" element={<Code />} />
          <Route path="/mygov" element={<Mygov />} />
          <Route path="/mygov_verification" element={<MyGovVerify />} />
        </Routes>
      </>
    </div>
  );
}
