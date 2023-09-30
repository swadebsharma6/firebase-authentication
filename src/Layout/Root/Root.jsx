import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header/NavBar/Navbar";


const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
          <Navbar></Navbar> 
          <Outlet></Outlet>
        </div>
    );
};

export default Root;