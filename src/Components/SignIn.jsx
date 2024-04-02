import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../firebase.config";

const SignIn = () => {
    const [regError, setregError] = useState("");
    const [success, setsuccess] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(), e.preventDefault();
    const name = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    setregError("");
    setsuccess("");
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
        console.log(result.message)
        setsuccess('Logged in successfully')
    })
  };
  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 flex flex-col justify-center mx-auto pt-20">
      <h1 className="text-3xl font-bold text-center">SignIn</h1>
      <form onSubmit={handleSubmit} action="" className="space-y-6 ">
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-600">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border-2"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Eamil"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border-2"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border-2"
          />
          <div className="flex justify-end text-xs dark:text-gray-600">
            <a rel="noopener noreferrer" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <input
          type="submit"
          className="block w-full p-3 text-center rounded-sm bg-violet-600 text-white font-medium"
          value="Sign in"
        />
      </form>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
        Don't have an account?
        <Link to="/signUp" className="underline dark:text-gray-800">
          Sign up
        </Link>
      </p>
      {
            regError && <p className="text-red-600">{regError}</p>
        }
        {
            success && <p className="text-green-700">{success}</p>
        }
    </div>
  );
};

export default SignIn;
