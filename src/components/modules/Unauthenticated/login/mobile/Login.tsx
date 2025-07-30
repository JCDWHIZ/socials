// import TextField from "components/Inputs/InputField";
import { BiUser } from "react-icons/bi";
import { GiPadlock } from "react-icons/gi";
import { GrFacebook, GrGoogle } from "react-icons/gr";

function Login() {
  return (
    <div className="flex flex-col w-full h-full gap-6.5 items-center justify-center">
      <main className="flex flex-col gap-2 items-center justify-center">
      <img src="" className='h-20 w-20 rounded-full items-center justify-center bg-gray-400' alt="LoginImg" />
      <h1 className="font-bold text-4xl text-center">SocialConnect</h1>
      <p className="text-center">Connect with friends and share moments</p>
      </main>

      <main className="flex w-[70%] items-center justify-between px-1 py-1 bg-gray-200 gap-6 rounded-sm">
        <span className="bg-white w-[55%] py-1 flex items-center font-semibold justify-center rounded-sm">Login</span>
        <span className="w-[40%] font-semibold">Register</span>
      </main>

    <form className="w-full flex flex-col gap-2 px-10" action="">
        <main className="flex flex-col gap-1">
            <label htmlFor="userName" className="font-semibold">Email or Username</label>
            <span className="absolute mt-9 ml-2 z-50"><BiUser/></span>
            <input id="userName" className="border-1 px-8 py-1 w-full border-gray-400 rounded-sm outline-1 outline-gray-400" type="text" placeholder="Enter your email or username" />
        </main>

        <main className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">Password</label>
            <span className="absolute mt-9 ml-2 z-50"><GiPadlock/></span>
            <input id="password" className="border-1 px-8 py-1 w-full border-gray-400 rounded-sm outline-1 outline-gray-400" type="text" placeholder="Enter your password" />
        </main>

        <main className="flex justify-between items-center">
            <span className="flex gap-2">
            <input id="checkbox" type="checkbox" placeholder="Remember me" />
            <label htmlFor="checkbox" className="font-semibold">Remember me</label>
            </span>

            <span className="font-semibold text-sm">Forgot Password?</span>

        </main>
            <button className="font-semibold text-white bg-black rounded-md flex items-center justify-center py-2">Login</button>
    </form>

    <main className="w-full px-10 flex flex-col ">
        <fieldset className="border-t-1 flex items-center justify-center border-gray-600 w-full">
            <legend className="ml-[30%] px-2 mb-4">Or continue with</legend>
        </fieldset>
        <div className="flex gap-2">
            <span className="border-1 border-gray-500 w-[47%] h-12 rounded-sm flex gap-4 items-center justify-center">
                <article><GrGoogle/></article>
                <h1 className="font-semibold">Google</h1>
            </span>

            <span className="border-1 border-gray-500 w-[47%] h-12 rounded-sm flex gap-2 items-center justify-center">
                <article><GrFacebook fill="black" size={20}/></article>
                <h1 className="font-semibold">Facebook</h1>
            </span>
        </div>
    </main>
      {/* <TextField placeholder="Email" name="email" /> */}

      <footer className="flex flex-col -gap-3">
        <p>© 2025 SocialConnect. All rights reserved</p>
        <p className="w-full flex gap-4 items-center justify-center">
            <span>Help</span>
            <span>Privacy</span>
            <span>Terms</span>
        </p>
        </footer>
    </div>
  );
}

export default Login;
