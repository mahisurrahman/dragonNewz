
import { Link } from 'react-router-dom';
import Navbar from './Shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { signIn, user, logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error=>
          console.error(error))
      }

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signIn(email,password)
        .then(result => console.log(result))
        .catch(error => console.error(error));
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-2/5 mx-auto px-5 py-5 border-2 rounded-lg'>
                <form onSubmit={handleLogin}>
                    <h2 className='text-center text-3xl font-bold mt-5'>Login Your Account</h2>
                    <hr className='w-4/5 mx-auto mt-8 mb-5' />
                    <input type="email" name="email" className='w-full rounded-lg border-2 h-10 mt-5 px-5' placeholder='Email' required />
                    <br />
                    <input type="password" name='password' className='w-full rounded-lg border-2 h-10 mt-5 px-5' placeholder='Password' required />
                    <br />
                    <div className='w-2/5 mx-auto'>
                        {
                            user ? 
                            <button onClick={handleLogOut} className='w-full rounded-lg border h-10 mt-5 px-5 bg-black text-white hover:text-black hover:bg-white hover:border-black'>Log Out</button>
                            :
                            <input type="submit" value="Log In" className='w-full rounded-lg border h-10 mt-5 px-5 bg-black text-white hover:text-black hover:bg-white hover:border-black' />
                        }
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