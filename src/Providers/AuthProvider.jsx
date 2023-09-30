import PropTypes from 'prop-types';
import { createContext } from "react";

export const AuthContext  = createContext(null);



const AuthProvider = ({children}) => {

    const authInfo = {name: 'Swadeb'}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;

AuthProvider.propTypes = {
    
    children: PropTypes.node,
}
