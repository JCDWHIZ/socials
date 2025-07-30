// import TextField from "components/Inputs/InputField";
import { BiUser } from "react-icons/bi";
import { GiPadlock } from "react-icons/gi";
import { GrFacebook, GrGoogle, GrMail } from "react-icons/gr";

function Register() {
  return (
    <div className="flex text-gray-700 flex-col w-full h-full gap-1 items-center justify-center">
      <main className="flex flex-col gap-3 items-center justify-center">
        <img
          src=""
          className="h-16 w-16 rounded-full items-center justify-center bg-gray-400"
          alt="LoginImg"
        />
        <h1 className="font-bold text-4xl text-center">SocialConnect</h1>
        <p className="text-center">Connect with friends and share moments</p>
      </main>
      <br />

      <main className="flex w-[70%] items-center justify-between px-1 py-1 bg-gray-200 gap-6 rounded-sm">
        <span className="w-[40%] font-semibold flex justify-center">Login</span>
        <span className="bg-white w-[55%] py-1 flex items-center font-semibold justify-center rounded-sm">
          Register
        </span>
      </main>
      <br />

      <form className="w-full flex flex-col gap-4 px-10" action="">
        <main className="flex flex-col gap-1">
          <label htmlFor="userName" className="font-semibold">
            Full Name
          </label>
          <span className="absolute mt-9 ml-2 z-50">
            <BiUser />
          </span>
          <input
            id="userName"
            className="border-1 px-8 py-1 w-full border-gray-400 rounded-sm outline-1 outline-gray-400"
            type="text"
            placeholder="Enter your full name"
          />
        </main>

        <main className="flex flex-col gap-1">
          <label htmlFor="userName" className="font-semibold">
            Username
          </label>
          <span className="absolute mt-8 ml-2 z-50">@</span>
          <input
            id="userName"
            className="border-1 px-8 py-1 w-full border-gray-400 rounded-sm outline-1 outline-gray-400"
            type="text"
            placeholder="Choose a username"
          />
        </main>

        <main className="flex flex-col gap-1">
          <label htmlFor="userName" className="font-semibold">
            Email
          </label>
          <span className="absolute mt-9 ml-2 z-50">
            <GrMail />
          </span>
          <input
            id="userName"
            className="border-1 px-8 py-1 w-full border-gray-400 rounded-sm outline-1 outline-gray-400"
            type="text"
            placeholder="Choose a username"
          />
        </main>

        <main className="flex flex-col gap-1">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <span className="absolute mt-9 ml-2 z-50">
            <GiPadlock />
          </span>
          <input
            id="password"
            className="border-1 px-8 py-1 w-full border-gray-400 rounded-sm outline-1 outline-gray-400"
            type="text"
            placeholder="Create a password"
          />
        </main>

        <main className="flex flex-col gap-1">
          <label htmlFor="password" className="font-semibold">
            Confirm Password
          </label>
          <span className="absolute mt-9 ml-2 z-50">
            <GiPadlock />
          </span>
          <input
            id="password"
            className="border-1 px-8 py-1 w-full border-gray-400 rounded-sm outline-1 outline-gray-400"
            type="text"
            placeholder="Confirm your password"
          />
        </main>

        <main className="flex items-start">
          <span className=" gap-2 justify-center items-start">
            <input id="checkbox" type="checkbox" placeholder="Remember me" />
            <label htmlFor="checkbox" className="font-semibold">
              I agree to the{" "}
              <a className="text-black decoration-dashed">Terms of Service</a>{" "}
              and{" "}
              <a className="text-black decoration-dashed">Terms of Service</a>
            </label>
          </span>
        </main>
        <button className="font-semibold text-white bg-black rounded-md flex items-center justify-center py-2">
          Login
        </button>
      </form>
      <br />
    </div>
  );
}

export default Register;
