import { Link } from "react-router-dom";

function SignUp() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="w-full h-full p-8 flex justify-center items-center">
      <form
        onSubmit={handleFormSubmit}
        className="p-6 flex flex-col gap-8 bg-slate-400 shadow-lg shadow-gray-600 rounded-lg"
      >
        <div className="flex justify-between items-center">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input type="email" id="email" className="rounded-md p-1" />
        </div>
        <div className="flex justify-between items-center gap-6">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input type="password" id="password" className="rounded-md p-1" />
        </div>
        <div className="flex justify-between items-center gap-6">
          <label htmlFor="confirmPassword" className="font-semibold">
            Confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="rounded-md p-1"
          />
        </div>
        <small>
          <span>Already have an account?&nbsp;</span>
          <Link to="/sign-in" className="text-blue-700 italic">
            Sign in
          </Link>
        </small>
        <div className="flex justify-center items-center">
          <button className="bg-slate-600 w-fit py-2 px-4 rounded-md text-white font-semibold hover:bg-slate-800 transition active:scale-95">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
