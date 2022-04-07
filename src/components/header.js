// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   UserIcon,
//   BellIcon,
//   ChatAlt2Icon,
//   SearchIcon,
//   HomeIcon,
//   UserAddIcon,
// } from "@heroicons/react/solid";
// import logo from "../assets/logo-2.svg";
// import { useDispatch } from "react-redux";
// import { logOut } from "../app/auth";

// export const Header = () => {
//   const dispatch = useDispatch();
//   const logOutButton = () => {
//     localStorage.clear();
//     dispatch(logOut());
//   };
//   return (
//     <div className="fixed z-30 top-0 left-0 w-full h-auto">
//       <div className="h-16 bg-opacity-90 bg-gray-900"></div>
//       <div className="absolute w-full h-full top-0 left-0">
//         <div className="container mx-auto h-full flex items-center justify-between text-white">
//           <Link to="/">
//             <div className="flex">
//               <img className="" src={logo} alt="icon" />
//               <p className="text-base ml-3">Holsome</p>
//             </div>
//           </Link>

//           <div className="flex justify-between">
//             <Link to="/">
//               <HomeIcon className="h-6 w-6 mx-8 my-2" />
//             </Link>
//             <Link to="/friend">
//               <UserAddIcon className="h-6 w-6 mx-8 my-2" />
//             </Link>
//             <Link to="/search">
//               <SearchIcon className="h-6 w-6 mx-8 my-2" />
//             </Link>
//             <Link to="/message">
//               <ChatAlt2Icon className="h-6 w-6 mx-8 my-2" />
//             </Link>
//           </div>

//           <div className="flex items-center justify-between text-white">
//             <Link to="/notification">
//               <BellIcon className="h-6 w-6 mx-8 my-2" />
//             </Link>
//             <Link to="/profile">
//               <UserIcon className="h-6 w-6 mx-8 my-2" />
//             </Link>
//             <div onClick={() => logOutButton()}>
//               <UserIcon className="h-6 w-6 mx-8 my-2" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
