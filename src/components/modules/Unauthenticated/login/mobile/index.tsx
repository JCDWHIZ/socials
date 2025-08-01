import TextField from "components/Inputs/InputField";
import { useState } from "react";

function MobileLogin() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 text-sm">
      <div className="w-full max-w-xs">
        
        <div className="flex justify-between items-center bg-gray-200 rounded-full p-1 mb-6">
          <button
            onClick={() => setActiveTab("login")}
            className={`w-1/2 py-2 rounded-full text-center font-semibold text-sm ${
              activeTab === "login"
                ? "bg-white text-black shadow"
                : "text-gray-500"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`w-1/2 py-2 rounded-full text-center font-semibold text-sm ${
              activeTab === "register"
                ? "bg-white text-black shadow"
                : "text-gray-500"
            }`}
          >
            Register
          </button>
        </div>

        
        {activeTab === "login" ? (
          
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                Email or Username
              </label>
              <TextField
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
                Password
              </label>
              <TextField
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between font-medium text-sm">
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" className="w-4 h-4 border-gray-400" />
                Remember me
              </label>
              <button className="text-black">Forgot password?</button>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md font-medium"
            >
              Log In
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
            
              <label htmlFor="fullname" className="block mb-1 font-medium text-gray-700">
                Full Name
              </label>
              <TextField
                type="text"
                name="fullname"
                placeholder="@ Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="username" className="block mb-1 font-medium text-gray-700">
                Username
              </label>
              <TextField
                type="text"
                name="username"
                placeholder="Choose a username"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                Email Address
              </label>
              <TextField
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
                Password
              </label>
              <TextField
                type="password"
                name="password"
                placeholder="Create a password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md font-medium"
            >
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileLogin;
