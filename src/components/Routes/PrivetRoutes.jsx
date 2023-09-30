import PropTypes from 'prop-types';
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const PrivetRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <p className='text-center'> <span className="loading loading-bars loading-md"></span></p>

    }
    if(user){
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivetRoutes;

PrivetRoutes.propTypes = {
    
    children: PropTypes.node,
}