import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
    // const [ form,setform ] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [checkSubmit, setcheckSubmit] = useState(false);
    const navigate = useNavigate();

    var storedData = sessionStorage.getItem('UserData');
    var UserDetail = JSON.parse(storedData);

    const formSubmit = (e) => {
        e.preventDefault();
        console.log('UserDetail', UserDetail);

// And
// true && True -> then process

//  or
// false || True -> then process
// true || false -> then process


        if (email == UserDetail?.email && number == UserDetail?.password) {
            navigate('/Health-policy');
            toast.success("Login successfully");
        }
        else {
            toast.error("Deepti Moye Moye");
        }
    }

    const resetform = (e) => {
        e.preventDefault();
        setcheckSubmit(false);
        setName('');
        setEmail('');
        setNumber('');
    }

    return (
        <>
            {/* {checkSubmit ?
         <div class="card">
            <div class="card-body text-left">
                <h5>Name : {name}</h5>
                <h5>Email : {email}</h5>
                <h5>Number : {number}</h5>
            </div>
        </div>
        :
        ""
        } */}
            <div className="Login-body">
                <div class="card">
                    <div class="card-body">
                        <form>
                            <div className='head'>
                                <h2>Sign In</h2>
                            </div>
                            <div class="mb-3">
                                <input name={email} value={email} onChange={(e) => setEmail(e?.target?.value)} type="email" class="form-control" placeholder='some@gmail.com' id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <input type="text" name={number} value={number} onChange={(e) => setNumber(e?.target?.value)} class="form-control" placeholder='password' id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="button-group">
                                <button onClick={resetform} type="submit" class="btn btn-danger danger">Reset</button>
                                <button onClick={formSubmit} type="submit" class="btn btn-primary primary">Sign in</button>
                            </div>
                            <p className='last-line'>Already you have an account? <Link to="/"><span>{' '}Sign Up</span></Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
