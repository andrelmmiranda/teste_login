import { useContext, useState } from 'react';

import './App.css';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider, AuthContext } from './contexts/auth/authContext';

function Private({ children }){
  const { getUser } = useContext(AuthContext);
  const { user } = getUser()

  console.log(!!user)

  if(!!user)
    return children;

  return <Navigate to='/login'/>
}

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={ 
            <Private>
              <Home /> 
            </Private>}/>
          <Route path='/login' element={ <Login /> } />
          <Route path='*' element={ <NotFound /> }/>
        </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;


function NotFound(){
  return(
    <div>
      <h1>NotFound</h1>
    </div>
  );
}