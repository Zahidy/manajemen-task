import React from "react";
import { Link, useNavigate } from "react-router-dom";
import API from '../Api';

const Register = () => {
    const navigate = useNavigate();
    const registerUser = (event) => {
        event.preventDefault();
        
        // ini untul ambil data form
        const {value: name} = event.target.name;
        const {value: email} = event.target.email;
        const {value: password} = event.target.password;
        const data = {
            name,email,password
        }
        // console.log(name.toString(),email,password);

        // mengirim data ke backend
        try {
            API.post('/auth/register', data).then(res => {
                // console.log(res)
                navigate('/login')
            })
        } catch (error) {
            console.log(error)
        }

    }
    
    return (
        <div className="flex h-screen justify-center items-center">
            <form onSubmit={registerUser} className="max-w-md w-full flex flex-col gap-3">
                <div className="text-center">
                    <span className="text-3xl font-bold">Registrasi</span>
                </div>
                <label htmlFor="">
                    <input required type="text" name="name" className="input input-bordered w-full" placeholder="Full Name" />
                </label>
                <label htmlFor="">
                    <input required type="email" name="email" className="input input-bordered w-full" placeholder="E-mail" />
                </label>
                <label htmlFor="">
                    <input required type="password" name="password" className="input input-bordered w-full" placeholder="Password" />
                </label>
                <button type="submit" className="btn btn-primary w-full text-white">Sign Up</button>
                <span className="text-center w-100">Already have an account? <Link className="text-primary font-semibold" to="/login">Sign In instead</Link></span>
            </form>
        </div>
    )
}

export default Register;