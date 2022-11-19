import { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import Logo from '../public/logo.png';
import layout from '../styles/Layout.module.css';

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
            className={`sticky top-0 mb-10 flex items-center justify-between gap-10 p-5 px-10 transition-all duration-200 ${
                bgChange ? 'bg-black bg-opacity-30 backdrop-blur-sm' : ''
            }`}
        >
            {/* logo */}
            <div className='flex items-center gap-2'>
                <div className='relative h-10 w-10'>
                    <Image src={Logo} layout='fill' alt='logo' />
                </div>
                <h1 className='text-xl font-semibold'>Visit Malang</h1>
            </div>

            {/* navigation */}
            <ul className='flex gap-10'>
                <li className='cursor-pointer hover:underline'>Booking</li>
                <li className='cursor-pointer hover:underline'>Rekomendasi</li>
                <li className='cursor-pointer hover:underline'>Kontak</li>
            </ul>

            <div className='flex items-center gap-10'>
                {/* search */}
                <form className='w-[20rem]'>
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
                            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:outline-none'
                            placeholder='Gunung Bromo...'
                            required
                        />
                        <button
                            type='submit'
                            className='absolute right-2.5 bottom-2.5 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 focus:outline-none'
                        >
                            Cari
                        </button>
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
                <div className='h-10 w-10 rounded-full bg-white'></div>
            </div>
        </nav>
    );
}

export default Navbar;
