import Layout from '../widgets/layout';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import wisata from '../data/wisata.json';

function Recommendation() {
    const [currentCategory, setCurrentCategory] = useState('');
    const [list, setList] = useState([]);

    const category = [
        'Pantai',
        'Gunung',
        'Taman Hiburan',
        'Kampung Wisata',
        'Museum',
        'Penginapan',
    ];

    useEffect(() => {
        if (currentCategory === '') {
            setList(wisata.data);
        } else {
            setList(
                wisata.data.filter((data) => {
                    return (
                        data.kategori?.toLowerCase() ===
                        currentCategory.toLowerCase()
                    );
                })
            );
        }
    }, [currentCategory]);

    return (
        <>
            <Head>
                <title>Visit Malang</title>
                <meta name='description' content='Jelajahi Kota Malang' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Layout>
                <main className='flex h-fit flex-col gap-10 px-5 md:px-20'>
                    <h1 className='text-2xl font-semibold md:text-3xl'>
                        Rekomendasi Destinasi & Penginapan
                    </h1>
                    <div className='flex flex-wrap gap-5 text-sm'>
                        <span
                            onClick={() => setCurrentCategory('')}
                            className={`cursor-pointer select-none rounded-full border border-transparent px-5  py-2 transition-all duration-200 hover:border-white ${
                                currentCategory.toLocaleLowerCase() === ''
                                    ? 'bg-white text-black'
                                    : 'bg-black bg-opacity-30 backdrop-blur-md'
                            }`}
                        >
                            Semua Destinasi
                        </span>
                        {category.map((data, index) => {
                            return (
                                <span
                                    onClick={() => {
                                        setCurrentCategory(data);
                                    }}
                                    key={index}
                                    className={`cursor-pointer select-none rounded-full border border-transparent px-5  py-2 transition-all duration-200 hover:border-white ${
                                        currentCategory.toLocaleLowerCase() ===
                                        data.toLocaleLowerCase()
                                            ? 'bg-white text-black'
                                            : 'bg-black bg-opacity-30 backdrop-blur-md'
                                    }`}
                                >
                                    {data}
                                </span>
                            );
                        })}
                    </div>

                    <ul className='flex flex-wrap gap-5'>
                        {list &&
                            list.map((data, index) => {
                                return (
                                    <li
                                        key={index}
                                        data-aos='fade-in'
                                        data-aos-duration='700'
                                        data-aos-delay={index * 100}
                                        data-aos-anchor='.pics'
                                        className='pics group relative h-52 w-full grow cursor-pointer overflow-hidden rounded-xl bg-white lg:h-72 lg:w-64 lg:grow-0'
                                    >
                                        <Link
                                            href={`detail/${data.name
                                                .split(' ')
                                                .join('_')}`}
                                        >
                                            <span className='absolute bottom-5 z-10 w-full p-2 text-center'>
                                                {data.name}
                                            </span>
                                            <div className='relative h-full w-full brightness-75 transition-all duration-200 group-hover:scale-110 group-hover:brightness-100'>
                                                <Image
                                                    src={data.img}
                                                    alt={data.name}
                                                    priority
                                                    layout='fill'
                                                    objectFit='cover'
                                                />
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                </main>
            </Layout>
        </>
    );
}

export default Recommendation;
