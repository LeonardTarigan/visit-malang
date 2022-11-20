import { useRef, useState, useEffect } from 'react';

function NavLang() {
    const [openMenu, setOpenMenu] = useState(false);
    const [lang, setLang] = useState('ID');

    const menuRef = useRef();

    const handleChange = (lang) => {
        setLang(lang);
        setOpenMenu(false);
    };

    useEffect(() => {
        const handleClick = (e) => {
            if (menuRef.current) {
                if (!menuRef.current.contains(e.target)) {
                    setOpenMenu(false);
                }
            }
        };
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    return (
        <div className='relative flex w-12 cursor-pointer flex-col items-center'>
            <div
                className='flex gap-2'
                onClick={() =>
                    openMenu ? setOpenMenu(false) : setOpenMenu(true)
                }
            >
                <span>{lang}</span>
                <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                    />
                </svg>
            </div>

            <ul
                ref={menuRef}
                className={`absolute -bottom-[8rem] flex w-full flex-col overflow-hidden rounded-md bg-white text-black ${
                    openMenu ? 'visible' : 'hidden'
                }`}
            >
                <li
                    onClick={handleChange('ID')}
                    className='p-2 transition-all duration-200 hover:bg-yellow-400'
                >
                    ID
                </li>
                <li
                    onClick={handleChange('EN')}
                    className='p-2 transition-all duration-200 hover:bg-yellow-400'
                >
                    EN
                </li>
                <li
                    onClick={handleChange('CH')}
                    className='p-2 transition-all duration-200 hover:bg-yellow-400'
                >
                    CH
                </li>
            </ul>
        </div>
    );
}

export default NavLang;
