import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../../utils/constant";
import toast from "react-hot-toast";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();

    if (isLogin) {
      const user = { email, password };

      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
    } else {
      // register
      const user = { fullName, email, password };
      console.log(user);
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <Header />
      <div className=" absolute ">
        <img
          className="w-screen h-screen"
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
          alt="banner"
        />
      </div>

      <form
        onSubmit={getInputData}
        action=""
        className="absolute flex flex-col p-12 w-3/12 my-42 left-0 right-0 mx-auto items-center justify-center bg-black opacity-90 rounded-md"
      >
        <h1 className="text-white text-3xl mb-5 font-bold">
          {isLogin ? "Login" : "signUp"}
        </h1>
        <div className="flex flex-col">
          {!isLogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              required
              placeholder="userName"
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="email@gmail.com"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Password"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
          <button className="outline-none p-3 my-3 rounded-sm bg-red-800 text-white cursor-pointer hover:bg-red-700">
            {isLogin ? "Login" : "signUp"}
          </button>
          <p className="text-white mt-3.5">
            {isLogin ? "New to netflix.." : "Already have an account ?"}
            <span
              onClick={loginHandler}
              className="ml-2 text-blue-500 font-medium text-xl cursor-pointer"
            >
              {isLogin ? "signUp" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
