import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link as Scroll } from 'react-scroll';
import NavProfile from './NavProfile';
import Link from 'next/link';
import Cookies from 'js-cookie';

function Drawer() {
    const { state } = useContext(GlobalContext);
    const { openSideMenu, loggedIn, setLoggedIn } = state;

    const handleLogout = () => {
        Cookies.remove('user_token');
        setLoggedIn(false);
        window.location = '/';
    };

    return (
        <div
            className={`fixed z-30 flex h-full w-2/3 flex-col items-start justify-between bg-black bg-opacity-50 px-5 py-10 backdrop-blur-md transition-all duration-200 lg:hidden ${
                openSideMenu ? 'left-0' : '-left-full'
            }`}
        >
            <div className='flex w-full flex-col gap-10'>
                <div className='flex w-full items-center gap-4 border-b-2 border-zinc-500 pb-10'>
                    <NavProfile />
                    <span
                        className={`text-xl font-semibold ${
                            loggedIn ? 'block' : 'hidden'
                        }`}
                    >
                        Hello, User
                    </span>
                </div>

                <ul className='flex select-none flex-col gap-7'>
                    <li className='cursor-pointer transition-all duration-200 hover:text-sky-500 hover:underline'>
                        <Link href={'/booking'}>Booking</Link>
                    </li>
                    <li className='cursor-pointer transition-all duration-200 hover:text-green-400 hover:underline'>
                        <Scroll
                            to='sejarah'
                            smooth={true}
                            offset={-110}
                            duration={1000}
                        >
                            Tentang
                        </Scroll>
                    </li>
                    <li className='cursor-pointer transition-all duration-200 hover:text-pink-500 hover:underline'>
                        <Link
                            href={'/recommendation'}
                            smooth={true}
                            offset={-110}
                            duration={1000}
                        >
                            Wisata
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='flex w-full justify-end gap-10'>
                <button>
                    <svg
                        className='h-6 w-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                        />
                    </svg>
                </button>

                <button>
                    <svg
                        className='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            fillRule='evenodd'
                            d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
                            clipRule='evenodd'
                        />
                    </svg>
                </button>

                <button onClick={handleLogout}>
                    <svg
                        className='h-6 w-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Drawer;
