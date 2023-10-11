import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/authContext";

export const Login = ()=>{
    const { autenticado, login } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
    const handleSubmit = ()=>{
       login(username, password)
    }

    useEffect(()=>{
        // console.log(`${username} || ${password}`)
    })

    return(    
        <form>
            {String(autenticado)}
            <div>
                <label htmlFor="username">Usuário</label>
                <input type="text" id="username" value={ username } onChange={ (e)=> setUsername(e.target.value) }/>
            </div>
            <div>
                <label htmlFor="password">Senha</label>
                <input type="text" id="password" value={ password } onChange={ (e)=> setPassword(e.target.value) }/>
            </div>

            <div>
                <input type="button" value="login" onClick={ handleSubmit }/>
            </div>
        </form>
    );
}