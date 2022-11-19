import { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import Logo from '../public/logo.png';
import { Link as Scroll } from 'react-scroll';

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
            className={`sticky top-0 z-20 mb-10 flex items-center justify-between gap-10 py-7 px-10 transition-all duration-200 ${
                bgChange ? 'bg-black bg-opacity-30 backdrop-blur-sm' : ''
            }`}
        >
            {/* logo */}
            <div className='flex items-center gap-2'>
                <div className='relative h-10 w-10'>
                    <Image src={Logo} layout='fill' alt='logo' />
                </div>
                <span className='text-xl font-semibold'>Visit Malang</span>
            </div>

            {/* navigation */}
            <ul className='flex gap-10'>
                <li className='cursor-pointer hover:underline'>Booking</li>
                <li className='cursor-pointer hover:underline'>
                    <Scroll
                        to='sejarah'
                        smooth={true}
                        offset={-110}
                        duration={1000}
                    >
                        Sejarah
                    </Scroll>
                </li>
                <li className='cursor-pointer hover:underline'>
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
                <form className='w-[15rem]'>
                    <label
                        htmlFor='search'
                        className='sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                        Search
                    </label>
                    <div className='relative'>
                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                            <svg
                                aria-hidden='true'
                                className='h-5 w-5 text-gray-500 dark:text-gray-400'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                />
                            </svg>
                        </div>
                        <input
                            type='search'
                            id='search'
                            className='block h-10 w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:outline-none'
                            placeholder='Gunung Bromo...'
                            required
                        />
                    </div>
                </form>

                {/* lang */}
                <div className='flex cursor-pointer items-center'>
                    <select
                        name='lang'
                        id='lang'
                        className='w-12 bg-transparent focus:outline-none'
                    >
                        <option value='ID' className='text-black'>
                            ID
                        </option>
                        <option value='EN' className='text-black'>
                            EN
                        </option>
                    </select>
                </div>

                {/* profile */}
                <div className='relative h-10 w-10 overflow-hidden rounded-full'>
                    <Image
                        src={`/api/imageproxy?url=${encodeURIComponent(
                            'https://i.pinimg.com/736x/d9/ed/94/d9ed9494c8675919343c36f942cb1ec5.jpg'
                        )}`}
                        layout='fill'
                        objectFit='cover'
                        alt='logo'
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
