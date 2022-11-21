import Image from 'next/legacy/image';
import Link from 'next/link';
import Logo from '../public/logo.png';

function Footer() {
    return (
        <footer className='mt-20 rounded-lg bg-black bg-opacity-30 p-4 backdrop-blur-sm md:px-20 md:py-8'>
            <div className='sm:flex sm:items-center sm:justify-between'>
                <Link href='/' className='mb-4 flex items-center gap-2 sm:mb-0'>
                    <div className='relative h-10 w-10'>
                        <Image src={Logo} layout='fill' alt='logo' />
                    </div>
                    <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
                        Visit Malang
                    </span>
                </Link>
                <ul className='mb-6 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0'>
                    <li>
                        <a href='#' className='mr-4 hover:underline md:mr-6 '>
                            Kebijakan Cookie
                        </a>
                    </li>
                    <li>
                        <a href='#' className='mr-4 hover:underline md:mr-6'>
                            Kebijakan Privasi
                        </a>
                    </li>
                    <li>
                        <a href='#' className='mr-4 hover:underline md:mr-6 '>
                            Syarat dan Ketentuan
                        </a>
                    </li>
                    <li>
                        <a href='#' className='hover:underline'>
                            Hubungi Kami
                        </a>
                    </li>
                </ul>
            </div>
            <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
            <span className='block text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
                © 2022 Visit Malang™ . All Rights Reserved.
            </span>
        </footer>
    );
}

export default Footer;
