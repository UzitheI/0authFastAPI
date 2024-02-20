import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
            navigate('/profile');
          }
        })
        .catch((err) => console.log("axios", err));
    }
  };
  return (
    <div className="p-20">
      <div className="text-2xl flex justify-center pb-8">Login</div>
      <form action="" className="flex flex-col p-4 space-y-8">
        <div>
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            name="username"
            className="border border-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="text"
            name="password"
            className="border border-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="button"
            name="submit"
            onClick={handleSubmit}
            className="border border-black p-8"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
