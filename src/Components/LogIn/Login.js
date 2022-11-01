import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hook/useFirebase';
import { useNavigate} from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {  googleSignIn,signIn } = useFirebase()
    const navigate =useNavigate();

    const handleBlur=(e)=>{
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...loginData };
        newData[field] = value
        setLoginData(newData)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        signIn(loginData.email,loginData.password);
        navigate("/");
    }
    return (
        <div>

            <h2>Please Log-in</h2>
            <form onSubmit={handleSubmit}>
                <input name="email" onBlur={handleBlur} type="text" placeholder='enter email'/>
                <br/>
                <input name="password" onBlur={handleBlur} type="password" placeholder='*****'/>
                <br/>
                <input className='btn btn-primary mt-2' type="submit" value="login"/>
                <br/>
            </form>
            <br/>
            <button onClick={ googleSignIn} className='btn btn-warning'>Goggle Sign In</button>
            <p className='text-danger'>-----------||or||------------</p>
            <Link to="/register"><span className="text-warning">still not registered plz register</span> </Link>
        </div>
    );
};

export default Login;