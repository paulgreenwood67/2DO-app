//main component used to import all components
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Todo from "./components/Todo/Todo";

export default function App() {

  const [data, setData] = useState([]);
  const [taskData] = useState();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleEmail = (e) => {
    setUser({ ...user, email: e.target.value });
    console.log(user);
  };

  const handlePass = (e) => {
    setUser({ ...user, password: e.target.value });
    console.log(user);
  };
  let userEmail = "";
  //function to login a user
  const LoginUser = async (e) => {
    console.log(user.email);
    userEmail = user.email;
    console.log("user's email", userEmail);
    e.preventDefault();
    await fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.data.length === 0) {
          window.alert("User not found, please try again");
        } else {
          window.alert("Login successful");
        }
        console.log(response);

        setData(response.data);
        console.log(data);

        sessionStorage.setItem("token", response.token);
        sessionStorage.setItem("email", response.email);
        console.log("user", user);
      });
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/todo"
            element={
              <Todo
                handleInputs={handlePass}
                //LoginUser={LoginUser}
                userPassword={user.email}
                userEmail={user.email}
                dataObj={data}
                // handleDelete={deleteThis}
                taskData={taskData}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Login
                handlePass={handlePass}
                handleEmail={handleEmail}
                LoginUser={LoginUser}
                userPassword={user.password}
                userEmail={user.email}
                handleUserEmail={userEmail}
                //data={data}
              />
            }
          ></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
