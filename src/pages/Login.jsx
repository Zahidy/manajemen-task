import React from "react";
import { Link, useNavigate } from "react-router-dom";
import API from '../Api';

const Login = () => {
    const navigate = useNavigate();
    const registerUser = (event) => {
        event.preventDefault();
        
        // ini untul ambil data form
        const {value: username} = event.target.username;
        const {value: password} = event.target.password;
        const data = {
            username,password
        }
        // console.log(name.toString(),email,password);

        // mengirim data ke backend
        try {
            API.post('/auth/login', data).then(res => {
                // console.log(res)
                navigate('/')
            })
        } catch (error) {
            console.log(error)
        }

    }
    
    return (
        <div className="flex h-screen justify-center items-center">
            <form onSubmit={registerUser} className="max-w-md w-full flex flex-col gap-3">
                <div className="text-center">
                    <span className="text-3xl font-bold">Login</span>
                </div>
                <label htmlFor="">
                    <input required type="email" name="username" className="input input-bordered w-full" placeholder="E-mail" />
                </label>
                <label htmlFor="">
                    <input required type="password" name="password" className="input input-bordered w-full" placeholder="Password" />
                </label>
                <button type="submit" className="btn btn-primary w-full text-white">Login</button>
                <span className="text-center w-100">Doesn't have any account? <Link className="text-primary font-semibold" to="/register">Sign up here</Link></span>
            </form>
        </div>
    )
}

export default Login;