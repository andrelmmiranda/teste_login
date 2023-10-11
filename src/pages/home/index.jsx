import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/authContext";

export const Home = ()=>{
    const { logout, user } = useContext(AuthContext);

    return(
        <div>
            <h1>Home</h1>
            <div>
                <h2>{ user.name }</h2>
                <p>{ user.email }</p>
            </div>
            <button onClick={ logout }>logout</button>
        </div>
    );
}