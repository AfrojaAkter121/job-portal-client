import React, { use } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../Contex/AuthContext";
import Google from "../shared/Google";

const Login = () => {
    const {loginUser} = use(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target ;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
    .then(res => {
        console.log(res.user)
    }).catch(err => {
        console.log(err.message)
    })
    

  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-transparent backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md border border-red-200 text-red-100 border-opacity-30">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Please Login Now
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* email */}
          <input
            type="email"
            name="email"
            placeholder="Username or Email"
            required
            className="w-full border-b focus:outline-none py-2"
          />
          {/* password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full border-b focus:outline-none py-2"
          />
          {/* {error && <p className="text-sm text-red-500">{error}</p>} */}

          {/* submit btn */}
          <button
            type="submit"
            className="w-full bg-red-200 hover:bg-red-300 text-black font-medium py-2 rounded mt-4"
          >
            Login Now
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Create an account?{" "}
          <Link to="/register" className="text-red-300 font-medium">
            Register
          </Link>
        </p>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-red-300 text-black"></div>
          <span className="px-4 text-red-400 text-sm">Or</span>
          <div className="flex-grow h-px bg-red-300"></div>
        </div>

        {/* github signup */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 border rounded-full py-2 font-semibold hover:bg-red-200 hover:text-black">
            <FaGithub size={24} />
            Continue with Github
          </button>

          {/* google signup */}
          <Google></Google>
        </div>
      </div>
    </div>
  );
};

export default Login;
