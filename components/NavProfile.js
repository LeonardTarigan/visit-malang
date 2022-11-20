import { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';

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
        setLoggedIn(false);
        router.push('/');
    };

    useEffect(() => {
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
    }, []);

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
                            src={`/api/imageproxy?url=${encodeURIComponent(
                                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGj807ryXilh3XkXfTzlg1QpsmaduSOScd2g&usqp=CAU'
                            )}`}
                            layout='fill'
                            objectFit='cover'
                            alt='logo'
                        />
                    </div>
                    {openMenu && (
                        <ul
                            className={`absolute -bottom-[9.5rem] flex h-fit w-fit cursor-pointer  flex-col justify-center overflow-hidden rounded-md bg-white text-sm text-black transition-all duration-200`}
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
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z'
                                            clipRule='evenodd'
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
