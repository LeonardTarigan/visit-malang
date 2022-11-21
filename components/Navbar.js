import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Logo from '../public/logo.png';
import { Link as Scroll } from 'react-scroll';
import Link from 'next/link';
import NavInput from './NavInput';
import NavProfile from './NavProfile';
import NavLang from './NavLang';

function Navbar() {
    const [bgChange, setBgChange] = useState(false);

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
        <nav
            className={`sticky top-0 z-20 mb-10 flex items-center justify-between gap-10 py-5 px-20 transition-all duration-200 ${
                bgChange ? 'bg-black bg-opacity-30 backdrop-blur-sm' : ''
            }`}
        >
            {/* logo */}
            <Link href={'/'} className='flex items-center gap-2'>
                <div className='relative h-10 w-10'>
                    <Image src={Logo} fill alt='logo' />
                </div>
                <span className='text-xl font-semibold'>Visit Malang</span>
            </Link>

            {/* navigation */}
            <ul className='flex select-none gap-10'>
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

            <div className='flex items-center gap-10'>
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
        </nav>
    );
}

export default Navbar;
