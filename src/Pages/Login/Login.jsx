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
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-gray-800 w-[60%] lg:w-[45%] h-auto p-6 flex flex-col items-center rounded-2xl">
        <img
          src={youtube_icon}
          alt="YouTube"
          className="w-[200px] h-[120px] rounded-xl mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 px-3 py-2 w-full rounded-md text-white border"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2 px-3 py-2 w-full rounded-md text-white border"
        />
        <button
          onClick={handleLogin}
          className="mb-2 w-full py-2 rounded-md bg-white"
        >
          Login
        </button>
        <button
          onClick={handleSignup}
          className="mb-2 w-full py-2 rounded-md bg-white"
        >
          Sign Up
        </button>
        <button
          onClick={handleGoogle}
          className="mb-4 w-fit py-2 px-3 rounded-md bg-white"
        >
          Login with Google
        </button>

        {loading && <p className="text-white mt-2">Loading...</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
