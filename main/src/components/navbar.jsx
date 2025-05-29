import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50 ">
      <div className="w-2/3">
        <ul className="flex justify-around">
          <li  className="inline p-2 ">
            <Link to="/" >
              <img src={logo} alt="logo" className="w-40   drop-shadow-md hover:drop-shadow-lg " />
            </Link>
          </li>
          <li  className="inline-block h-10 p-2 mt-10 font-semibold hover:font-bold">
            <Link to="/menu" >
              Menu
            </Link>
          </li>
          <li className="inline-block h-10 p-2 mt-10 font-semibold hover:font-bold">
            <Link to="/ourstories" >
              Our stories
            </Link>
          </li>
          <li className="inline-block h-10 p-2 mt-10 font-semibold hover:font-bold">
            <Link to="/booking" >Booking</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
