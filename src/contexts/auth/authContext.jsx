import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const users =  [ 
    {
        id: 1,
        name: 'André Miranda',
        email: 'andre.miranda@mail.com',
        username: 'andre.miranda',
        password: '123'
    },
    {
        id: 2,
        name: 'Fábio Daudt',
        email: 'fabio.daudt@mail.com',
        username: 'fabio.daudt',
        password: '123'
    }
];

export const AuthContext = createContext();

export const AuthProvider = ({ children })=>{
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const getUser = ()=>{
        return  { user: JSON.parse(localStorage.getItem('user')) };
    }

    const login = (username, password)=>{
        const user = users.find(user => user.username === username && user.password === password);
        
        if(!!user){
            setUser(user)
            console.log(user);
            navigate('/')
            localStorage.setItem("user", JSON.stringify(user));
        }
    }
  
    const logout = ()=>{
        navigate('/login')
        setUser(null)

        localStorage.removeItem('user')
    }
  
    const barrel = {
      autenticado: !!user,
      user,
      login,
      logout,
      getUser
    }

    return(
        <AuthContext.Provider value={ barrel }>
            { children }
        </AuthContext.Provider>
    );
}