import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Home = () => {

    const authInfo = useContext(AuthContext);
    console.log(authInfo)

    return (
        <div>
            Home: {authInfo.name}
        </div>
    );
};

export default Home;