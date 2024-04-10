import { Link, NavLink  } from "react-router-dom";
import useAuth from "../../hook/useAuth";


const Header = () => {
    const  {logout, user} = useAuth()

const navLinks = <>
<li ><NavLink to="/">Home</NavLink></li>
<li ><NavLink to="/update">Update Profile</NavLink></li>
<li ><NavLink to="/contact">contact Us</NavLink></li>


     
</>






    return (
        <div className="">
        <div className="  navbar bg-green-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-50 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-poppins font-bold ">COZYSTAY</a>
  </div>
  <div className="navbar-center  hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg font-bold">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end ">
  {
   user? <div className="dropdown dropdown-end">
   <div className="flex">
   <div>
   <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
     <div className="w-10 rounded-full">
       <img alt="" src={user.photoURL} />
       <div className="absolute top-5 left-0 right-0 bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
        <div className="text-black text-center py-2 ">{user.displayName}</div>
    </div>
     </div>
   </div>
   
   </div>
   <div onClick={logout} ><button className="btn ">logOut</button></div>
   </div>
   </div>
      
      :
      <Link to="/login"> <button className="btn btn-outline bg-green-300">log in</button></Link>
}
  </div>
</div>
</div>
    );
};

export default Header;