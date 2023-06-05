import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserHome from "../Components/UserHome/UserHome";
import UserNav from "../Components/UserNav/UserNav";
import jwt from "jwt-decode";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <UserNav />
      <UserHome />
    </div>
  );
}

export default Home;
