import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {
  
   const {user, signOutUser} = useContext(AuthContext);

   const handleLogOut =() =>{
      signOutUser()
      .then(()=>{
        console.log('user logout successfully')
      })
      .catch(error =>{
        console.log(error.message)
      })
   }

        const navLinks = <>

        <li><NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-xl text-orange-500 font-bold" : ""
        }
      >  Home
      </NavLink></li>
        <li><NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-xl text-orange-500 font-bold" : ""
        }
      >  Orders
      </NavLink></li>
        <li><NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-xl text-orange-500 font-bold" : ""
        }
      >  Login
      </NavLink></li>
        <li><NavLink
        to="/register"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-xl text-orange-500 font-bold" : ""
        }
      >  Register
      </NavLink></li>
        <li><NavLink
        to="/profile"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-xl text-orange-500 font-bold" : ""
        }
      >  Profile
      </NavLink></li>
        
        </>

        

    return (
        <div className="mb-10">
        <div className="navbar bg-sky-300 py-3 rounded">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        {
          user  ? <>
          <span> {user.email}</span>
          <a onClick={handleLogOut} className="btn btn-sm">Sign Out </a>
          </> : <Link to ='/login'><button className="btn btn-sm">Login </button></Link>
        }
          
        </div>
      </div>  
        </div>
    );
};

export default Navbar;