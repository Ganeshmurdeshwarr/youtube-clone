import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInUser, signUpUser, googleLogin } from "../../Redux/authSlice";
import { useNavigate } from "react-router-dom";
import youtube_icon from "../../assets/youtube_icon.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleLogin = () => dispatch(signInUser({ email, password }));
  const handleSignup = () => dispatch(signUpUser({ email, password }));
  const handleGoogle = () => dispatch(googleLogin());

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-linear-to-b from-black via-[#111] to-[#1a1a1a] px-4">
  <div className="bg-[#181818] w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] p-8 rounded-2xl shadow-2xl flex flex-col items-center transition-all duration-300">
    <img
      src={youtube_icon}
      alt="YouTube"
      className="w-40 h-[100px] rounded-xl mb-6"
    />
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="mb-3 px-4 py-2 w-full rounded-md text-white bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="mb-4 px-4 py-2 w-full rounded-md text-white bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
    />
    <button
      onClick={handleLogin}
      className="mb-3 w-full py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
    >
      Login
    </button>
    <button
      onClick={handleSignup}
      className="mb-3 w-full py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
    >
      Sign Up
    </button>
    <button
      onClick={handleGoogle}
      className="mb-4 w-fit py-2 px-4 rounded-md bg-[#4285F4] text-white font-semibold hover:bg-[#357ae8] transition-colors"
    >
      Login with Google
    </button>

    {loading && <p className="text-white mt-2 animate-pulse">Loading...</p>}
    {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
  </div>
</div>

  );
};

export default Login;
