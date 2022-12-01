import { useState, useEffect, useContext } from 'react';
import Image from 'next/legacy/image';
import Logo from '../public/logo.png';
import { Link as Scroll } from 'react-scroll';
import Link from 'next/link';
import NavInput from './NavInput';
import NavProfile from './NavProfile';
import NavLang from './NavLang';
import Drawer from './Drawer';
import { GlobalContext } from '../context/GlobalContext';

function Navbar() {
    const [bgChange, setBgChange] = useState(false);

    const { state } = useContext(GlobalContext);
    const { openSideMenu, setOpenSideMenu } = state;

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                setBgChange(true);
            } else {
                setBgChange(false);
            }
        });
    }, []);

    return (
        <>
            <Drawer />
            <nav
                className={`sticky top-0 z-20 mb-10 flex items-center justify-between gap-10 py-5 px-5 transition-all duration-200 md:px-20 ${
                    bgChange ? 'bg-black bg-opacity-30 backdrop-blur-sm' : ''
                }`}
            >
                {/* logo */}
                <Link href={'/'} className='flex items-center gap-2'>
                    <div className='relative h-8 w-8 md:h-10 md:w-10'>
                        <Image
                            src={Logo}
                            layout='fill'
                            alt='logo'
                            objectFit='cover'
                        />
                    </div>
                    <span className='text-lg font-semibold md:text-xl'>
                        Visit Malang
                    </span>
                </Link>

                {/* navigation */}
                <ul className='hidden select-none gap-10 md:flex'>
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
                            Sejarah
                        </Scroll>
                    </li>
                    <li className='cursor-pointer transition-all duration-200 hover:text-pink-500 hover:underline'>
                        <Scroll
                            to='wisata'
                            smooth={true}
                            offset={-110}
                            duration={1000}
                        >
                            Wisata
                        </Scroll>
                    </li>
                </ul>

                <div className='hidden items-center gap-10 md:flex'>
                    {/* search */}
                    <NavInput />

                    {/* lang */}
                    <div className='flex items-center'>
                        <select
                            name='lang'
                            id='lang'
                            className='w-12 cursor-pointer bg-transparent focus:outline-none'
                        >
                            <option value='ID' className='text-black'>
                                ID
                            </option>
                            <option value='EN' className='text-black'>
                                EN
                            </option>
                            <option value='CH' className='text-black'>
                                CH
                            </option>
                        </select>
                    </div>

                    {/* profile */}
                    <NavProfile />
                </div>

                <button
                    onClick={() =>
                        openSideMenu
                            ? setOpenSideMenu(false)
                            : setOpenSideMenu(true)
                    }
                    className='block md:hidden'
                >
                    {openSideMenu ? (
                        <svg
                            className='h-8 w-8'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fillRule='evenodd'
                                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                clipRule='evenodd'
                            />
                        </svg>
                    ) : (
                        <svg
                            className='h-8 w-8'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fillRule='evenodd'
                                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                                clipRule='evenodd'
                            />
                        </svg>
                    )}
                </button>
            </nav>
        </>
    );
}

export default Navbar;
