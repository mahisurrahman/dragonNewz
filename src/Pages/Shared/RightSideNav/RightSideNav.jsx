import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-2'>
                <h2 className="text-xl font-semibold pl-4 py-4">Login with</h2>
                <button className="btn w-full border-2 border-blue-500 text-blue-500 bg-white">
                    <FaGoogle></FaGoogle>
                    Sign-In with Google
                </button>
                <button className="btn w-full border-2 border-black text-black bg-white mt-2">
                    <FaGithub></FaGithub>
                    Sign-In with Github
                </button>
            </div>
            <div className='p-4 mb-2 border rounded-lg mt-5'>
                <h2 className="text-xl font-semibold pl-4 py-4">Find Us On</h2>
                <a href="" className='p-4 flex items-center'><FaFacebook className='mx-2 w-7 h-7'></FaFacebook> Facebook</a>
                <a href="" className='p-4 flex items-center'><FaTwitter className='mx-2 w-7 h-7'></FaTwitter> Twitter</a>
                <a href="" className='p-4 flex items-center'><FaInstagram className='mx-2 w-7 h-7'></FaInstagram> Instagram</a>
            </div>
        </div>
    );
};

export default RightSideNav;