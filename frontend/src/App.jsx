import React from 'react';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Login from './components/Login'
import Profile from './components/Profile'
import {RequireToken} from './components/Auth'


function App(){
    return(
        <div>
            <div className=''>
                <h1 className='text-2xl flex justify-center'>Fill out the form to enter.</h1>
                <BrowserRouter>
                <div className='p-28'>

                <p className=''><Link to='/' className="bg-green-600 p-4 rounded-lg">Login</Link> | <Link to="profile" className="bg-green-600 p-4 rounded-lg">Profile</Link></p>
                </div>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/profile' element={
                        <RequireToken><Profile/></RequireToken>
                    }/>
                </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App;