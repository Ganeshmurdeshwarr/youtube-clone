import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInUser, signUpUser, googleLogin } from "../../Redux/authSlice";
import youtube_icon from "../../assets/youtube_icon.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate =useNavigate()
  const { loading, error, user } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(signInUser({ email, password }));
  };

  const handleSignup = () => {
    dispatch(signUpUser({ email, password }));
  };

  const handleGoogle = () => {
    dispatch(googleLogin());
  };

 useEffect(()=>{
  if(user){
    navigate('/')
  }
 },[user, navigate])

  return (
    <div className="w-full h-full">
      <div className="bg-gray-800 w-[60%] lg:w-[45%] h-auto m-auto mt-[40%] md:mt-[20%] lg:mt-[12%] px-6 py-14 flex flex-col items-center justify-center text-black font-semibold rounded-2xl">
        <img className="rounded-[40px] w-[200px] h-[120px] lg:w-[300px] lg:h-[180px]" src={youtube_icon} alt="" />

        <input
          type="email"
          placeholder="Email"
          className="my-2 px-3 py-2 rounded-md w-full text-white border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="my-2 px-3 py-2 rounded-md w-full text-white border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} className="my-2 bg-white px-3 py-2 rounded-md w-full">
          Login
        </button>

        <button onClick={handleSignup} className="my-2 bg-white px-3 py-2 rounded-md w-full">
          Sign Up
        </button>

        <button onClick={handleGoogle} className="my-4 bg-white px-3 py-2 rounded-md w-fit">
          Login with Google
        </button>

        {loading && <p className="text-white">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        
       
      </div>
    </div>
  );
};

export default Login;
