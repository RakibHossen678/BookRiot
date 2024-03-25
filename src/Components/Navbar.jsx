import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="p-4 ">
        <div className="container flex justify-between  mx-auto items-center">
          <div>
            <h1 className="text-xl font-medium">Book Vibe</h1>
          </div>
          <ul className=" hidden space-x-3 lg:flex items-center">
            <NavLink to='/' className={({isActive})=>isActive ?'text-success border-2 border-green-600 pb-2 pt-1 rounded-lg':''}>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1  dark:border-  border-violet-400"
              >
                Home
              </a>
            </NavLink>
            <NavLink to='/list' className={({isActive})=>isActive ?'text-success border-2 border-green-600 pb-2 pt-1 rounded-lg':''}>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 dark:border-"
              >
                Listed Books
              </a>
            </NavLink>
            
            <NavLink to='/pages' className={({isActive})=>isActive ?'text-success border-2 border-green-600 pb-2 pt-1 rounded-lg':''}>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 "
              >
                Pages to Read
              </a>
            </NavLink>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex space-x-2">
            <button className="self-center px-8 py-3 rounded bg-[#23BE0A] text-white font-medium">Sign in</button>

            <button className="self-center px-8 py-3 font-semibold rounded bg-[#59C6D2] text-white">
              Sign up
            </button>
          </div>
         
          
        </div>
      </header>
    </div>
  );
};

export default Navbar;
