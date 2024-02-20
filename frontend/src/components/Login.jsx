import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setToken,fetchToken } from "./RequireToken";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (username.length === 0) {
      alert("username is blank");
    } else if (password.length === 0) {
      alert("password is blank");
    } else {
      console.log("success");
      axios
        .post("http://127.0.0.1:8000/login", {
          username: username,
          password: password,
        })
        .then(function (res) {
          console.log(res);
          alert(res.data.data);
          if (res.data["message"] == "login failed") {
            alert('login failed')
          }
          else{
            if(res.data.token){
                setToken(res.data.token)
                navigate('/profile');
            };
          }
        })
        .catch((err) => console.log("axios", err));
    }
  };
  return (
    <div className="p-10 flex flex-col bg-blue-400 ">
      <div className="text-2xl flex justify-center pb-8">Login Form</div>
      <div className="flex justify-center p-10 flex-col">

      <div className="bg-green-200 flex justify-center text-3xl">
        {
          fetchToken()?(<p>You are logged in!</p>):(<p>Please Login.</p>)}
      </div>
      <form action="" className="flex flex-col p-4 space-y-8">
        <div>
          <label htmlFor="Username" className="text-2xl flex flex-col">Username:</label>
          <input
            type="text"
            name="username"
            className="border border-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div>
          <label htmlFor="password" className="text-2xl flex flex-col">Password:</label>
          <input
            type="text"
            name="password"
            className="border border-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            type="button"
            name="submit"
            onClick={handleSubmit}
            className="border border-black p-4 w-20 bg-green-600 inline-block mb-2 "
            >Enter</button>
        </div>
      </form>
            </div>
    </div>
  );
}

export default Login;
