import { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

function NavProfile() {
    const { state } = useContext(GlobalContext);
    const { loggedIn, setLoggedIn } = state;

    const [openMenu, setOpenMenu] = useState(false);

    const router = useRouter();
    const menuRef = useRef();

    const handleLogin = () => {
        router.push('/auth/login');
    };

    const handleLogout = () => {
        Cookies.remove('user_token');
        setLoggedIn(false);
        window.location = '/';
    };

    useEffect(() => {
        if (Cookies.get('user_token') !== undefined) {
            setLoggedIn(true);
        }

        const handleClick = (e) => {
            if (menuRef.current) {
                if (!menuRef.current.contains(e.target)) {
                    setOpenMenu(false);
                }
            }
        };
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [setLoggedIn]);

    return (
        <>
            {loggedIn ? (
                <div
                    ref={menuRef}
                    className='relative flex h-fit flex-col items-center'
                >
                    <div
                        onClick={() =>
                            openMenu ? setOpenMenu(false) : setOpenMenu(true)
                        }
                        className='relative h-10 w-10 cursor-pointer overflow-hidden rounded-full'
                    >
                        <Image
                            src={
                                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGj807ryXilh3XkXfTzlg1QpsmaduSOScd2g&usqp=CAU'
                            }
                            layout='fill'
                            objectFit='cover'
                            alt='logo'
                        />
                    </div>
                    {openMenu && (
                        <ul
                            className={`-bottom-[9.5rem] hidden h-fit w-fit cursor-pointer flex-col justify-center  overflow-hidden rounded-md bg-white text-sm text-black transition-all duration-200 md:absolute md:flex`}
                        >
                            <li className='flex items-center gap-2 p-2 transition-all duration-200 hover:bg-yellow-400'>
                                <span className='flex h-7 w-7 items-center justify-center'>
                                    <svg
                                        className='h-6 w-6'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z' />
                                    </svg>
                                </span>
                                <span>Pengaturan</span>
                            </li>
                            <li className='flex items-center gap-2 p-2 transition-all duration-200 hover:bg-yellow-400'>
                                <span className='flex h-7 w-7 items-center justify-center'>
                                    <svg
                                        className='h-5 w-5'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                </span>
                                <span>Profil</span>
                            </li>
                            <li
                                onClick={handleLogout}
                                className='flex items-center gap-2 whitespace-nowrap p-2 transition-all duration-200 hover:bg-yellow-400'
                            >
                                <span className='flex h-7 w-7 items-center justify-center'>
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
                                </span>
                                <span>Keluar</span>
                            </li>
                        </ul>
                    )}
                </div>
            ) : (
                <button
                    onClick={handleLogin}
                    className='border border-white py-2 px-3 transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400  hover:text-black'
                >
                    Masuk
                </button>
            )}
        </>
    );
}

export default NavProfile;
