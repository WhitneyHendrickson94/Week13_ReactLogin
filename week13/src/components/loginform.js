import React from 'react';
import Navbar from './navbar';

export default class LoginForm extends React.Component{
    render(){
        return(
        <div>
            <div>
                <Navbar />
            </div>
            <div className='card' id='loginForm'>
                <h3 className='card-header'>Log In</h3>
                <div className='card-body'>
                <div className="mb-3 row">
                    <label className='col-sm-2 col-form-label'>Username</label>
                    <div className='mb-3 row'>
                        <input type='text' className='form-control' placeholder='username'></input>
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='inputPassword' className='col-sm-2 col-form-label' >Password</label>
                    <div>
                        <input type="password" className='form-control' id='inputPassword' placeholder='password'></input>
                    </div>
                </div><br></br>
                <button className='btn btn-primary'>Login</button>
                </div>
            </div>
        </div>
        );
    }

}