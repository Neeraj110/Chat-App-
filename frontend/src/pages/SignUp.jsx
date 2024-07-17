// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSignup } from "../hooks/useSignup";

// function SignUp() {
//   const [fullName, setFullName] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [gender, setGender] = useState("");

//   const { signup, loading } = useSignup();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signup(fullName, username, password, gender);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center">
//       <div className="w-full max-w-xs mt-[2rem]">
//         <form
//           className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//           onSubmit={handleSubmit}
//         >
//           <div className="mb-4">
//             <h5 className="block text-gray-700 text-lg font-bold mb-2">
//               FullName
//             </h5>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="fullname"
//               type="text"
//               placeholder="fullname"
//               onChange={(e) => setFullName(e.target.value)}
//               value={fullName}
//             />
//           </div>
//           <div className="mb-4">
//             <h5 className="block text-gray-700 text-lg font-bold mb-2">
//               Username
//             </h5>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="username"
//               type="text"
//               placeholder="Username"
//               onChange={(e) => setUsername(e.target.value)}
//               value={username}
//             />
//           </div>

//           <div className="mb-6">
//             <h5 className="block text-gray-700 text-lg font-bold mb-2">
//               Password
//             </h5>
//             <input
//               className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//               id="password"
//               type="password"
//               placeholder="******************"
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <select
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               className="shadow border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3"
//             >
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//               disabled={loading}
//             >
//               {loading ? "Please wait" : "Sign Up"}
//             </button>
//           </div>
//         </form>
//         <Link to="/login">
//           <p className="text-center text-black text-lg">
//             Already have an account?{" "}
//             <span className="text-blue-500 font-medium">Log in here</span>
//           </p>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default SignUp;

import { Link } from "react-router-dom";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-[20rem] mx-auto ">
      <div className="w-full p-4 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 SIGNUP">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered  h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <br />
          <div className="flex items-center justify-between">
            <select
              value={inputs.gender}
              onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
              className="shadow border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            href="#"
          >
            Already have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
