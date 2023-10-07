import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

import qZoneOne from '../../../assets/assets/qZone1.png';
import qZoneTwo from '../../../assets/assets/qZone2.png';
import qZoneThree from '../../../assets/assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className='pl-4 pr-4 pb-4 mb-2'>
                <h2 className="text-2xl font-bold pb-4">Login with</h2>
                <button className="btn w-full border-2 border-blue-500 text-blue-500 bg-white">
                    <FaGoogle></FaGoogle>
                    Sign-In with Google
                </button>
                <button className="btn w-full border-2 border-black text-black bg-white mt-2">
                    <FaGithub></FaGithub>
                    Sign-In with Github
                </button>
            </div>
            <div className='p-4 mt-5'>
                <h2 className="text-xl font-semibold pl-4 py-4">Find Us On</h2>
                <a href="" className='p-4 flex items-center border rounded-t-lg mb-2 hover:bg-gray-300'><FaFacebook className='mx-2 w-7 h-7'></FaFacebook> Facebook</a>
                <a href="" className='p-4 flex items-center border mb-2 hover:bg-gray-300'><FaTwitter className='mx-2 w-7 h-7'></FaTwitter> Twitter</a>
                <a href="" className='p-4 flex items-center border rounded-b-lg mb-2 hover:bg-gray-300'><FaInstagram className='mx-2 w-7 h-7'></FaInstagram> Instagram</a>
            </div>
            <div className='p-4 mb-2'>
                <div className=' bg-slate-100 py-5 px-1 rounded'>
                <h2 className="text-2xl font-semibold pl-4 pb-4 mb-2">Q Zone</h2>
                <img className="my-6" src={qZoneOne} />
                <img className="my-6" src={qZoneTwo} />
                <img className="my-6" src={qZoneThree} />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;