import Layout from '../../widgets/layout';
import Image from 'next/legacy/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Booking() {
    const router = useRouter();

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Head>
                <title>Visit Malang</title>
                <meta name='description' content='Jelajahi Kota Malang' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Layout>
                <main className='flex h-fit flex-col gap-10 scroll-smooth px-20'>
                    <h1
                        data-aos='fade-right'
                        data-aos-duration='1000'
                        className='text-3xl font-semibold'
                    >
                        Menu Booking
                    </h1>
                    <ul className='flex h-[20rem] gap-10'>
                        <li
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                            data-aos-delay='100'
                            className='group relative grow cursor-pointer overflow-hidden rounded-lg'
                        >
                            <Link href={'/booking/villa'}>
                                <span className='absolute bottom-0 z-10 w-full p-2 text-center'>
                                    Booking Villa
                                </span>
                                <div className='relative h-full w-full brightness-75 transition-all duration-200 group-hover:scale-110 group-hover:brightness-100'>
                                    <Image
                                        src={
                                            'https://asset.kompas.com/crops/yNUkePDvWSGjkzB2DfqSX4aB4RM=/21x0:813x528/750x500/data/photo/2022/03/24/623bfd0db517b.png'
                                        }
                                        priority
                                        alt='villa'
                                        layout='fill'
                                        objectFit='cover'
                                    />
                                </div>
                            </Link>
                        </li>
                        <li
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            className='group relative grow cursor-pointer overflow-hidden rounded-lg'
                        >
                            <Link href={'/booking/ticket'}>
                                <span className='absolute bottom-0 z-10 w-full p-2 text-center'>
                                    Booking Wisata
                                </span>
                                <div className='relative h-full w-full brightness-75 transition-all duration-200 group-hover:scale-110 group-hover:brightness-100'>
                                    <Image
                                        src={
                                            'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/08/07/1549777459.png'
                                        }
                                        priority
                                        alt='wisata'
                                        layout='fill'
                                        objectFit='cover'
                                    />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </main>
            </Layout>
        </>
    );
}

export default Booking;
