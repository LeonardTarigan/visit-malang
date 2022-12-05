import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import wisata from '../data/wisata.json';

function NavInput() {
    const router = useRouter();

    const { state } = useContext(GlobalContext);
    const { searchInput, setSearchInput, searchRes, setSearchRes } = state;

    const handleSubmit = (e) => {
        e.preventDefault();

        setSearchRes(
            wisata.data.filter((data) => {
                return data.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
            })
        );

        console.log(searchInput);

        router.push('/search');
    };

    // useEffect(() => {}, [searchRes]);

    return (
        <form className='w-[15rem]' onSubmit={handleSubmit}>
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
                        className='h-5 w-5 text-gray-500'
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
                    type='text'
                    id='search'
                    className='block h-10 w-full rounded-full bg-black bg-opacity-30 p-4 pl-10 text-sm text-white focus:outline-none'
                    placeholder='Gunung Bromo'
                    required
                    autoComplete='off'
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                    }}
                />
            </div>
        </form>
    );
}

export default NavInput;
