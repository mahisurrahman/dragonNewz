import logo from '../../../assets/assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className='text-center mt-10'>
                <img className='mx-auto' src={logo} alt="site_logo" />
                <p className='text-xl font-light mt-10'>Journalism Without Fear or Favour</p>
                <p className='text-2xl font-medium mt-2'>{moment().format('LLLL')}</p>
            </div>
        </div>
    );
};

export default Header;