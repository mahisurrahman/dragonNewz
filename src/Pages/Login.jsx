
import { Link } from 'react-router-dom';
import Navbar from './Shared/Navbar/Navbar';

const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password =e.target.password.value;
        console.log(email,password);
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-2/5 mx-auto px-5 py-5 border-2 rounded-lg'>
                <form onSubmit={handleLogin}>
                    <h2 className='text-center text-3xl font-bold mt-5'>Login Your Account</h2>
                    <hr className='w-4/5 mx-auto mt-8 mb-5' />
                    <input type="email" name="email" id="" className='w-full rounded-lg border-2 h-10 mt-5 px-5' placeholder='Email' required/>
                    <br />
                    <input type="password" name='password' id='' className='w-full rounded-lg border-2 h-10 mt-5 px-5' placeholder='Password' required/>
                    <br />
                    <div className='w-1/5 mx-auto'>
                        <input type="submit" value="Login" className='w-full rounded-lg border h-10 mt-5 px-5 bg-black text-white hover:text-black hover:bg-white hover:border-black'/>
                    </div>
                    <div className='mt-5 flex justify-between items-center'>
                        <h2 className='text.sm font-normal text-gray-400 hover:text-blue-300 hover:underline'><Link>Forgot Password?</Link></h2>
                        <h2 className='text.sm font-normal text-gray-400 hover:text-blue-300 hover:underline'><Link to="/register">Register Here</Link></h2>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;