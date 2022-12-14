import Layout from '../../../widgets/layout';
import wisata from '../../../data/wisata.json';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import Head from 'next/head';
import { GlobalContext } from '../../../context/GlobalContext';

function Ticket() {
    const router = useRouter();

    const { state } = useContext(GlobalContext);
    const { wisataInput, setWisataInput } = state;

    const [wisataList, setWisataList] = useState([]);
    const [limit, setLimit] = useState(4);

    const handleSubmit = (e) => {
        e.preventDefault();

        router.push('/booking/ticket/payment');
    };

    const handleChange = (e) => {
        setWisataInput({
            ...wisataInput,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        if (wisataInput.location === '') {
            setWisataList(
                wisata.data.filter((data) => {
                    return data.type === 'wisata';
                })
            );
        } else {
            setWisataList(
                wisata.data.filter((data) => {
                    return (
                        data.type === 'wisata' &&
                        data.name === wisataInput.location
                    );
                })
            );
        }
    }, [wisataInput.location, limit, wisataList.length]);

    return (
        <>
            <Head>
                <title>Visit Malang</title>
                <meta name='description' content='Jelajahi Kota Malang' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Layout>
                <main className='flex h-fit flex-col items-center gap-10 scroll-smooth px-5 md:px-20'>
                    <form
                        onSubmit={handleSubmit}
                        className='flex h-fit w-full flex-col gap-5 rounded-lg bg-black bg-opacity-30 p-5 text-sm backdrop-blur-md md:w-[40rem]'
                    >
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='location'>Lokasi</label>
                            <select
                                value={wisataInput.location}
                                onChange={handleChange}
                                name='location'
                                id='location'
                                className='h-9 rounded-lg px-2 text-black focus:outline-none'
                            >
                                <option value={''} className='text-black'>
                                    Pilih Wisata
                                </option>
                                {wisata.data
                                    .filter((data) => {
                                        return data.type === 'wisata';
                                    })
                                    .map((data, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={data.name}
                                                className='text-black'
                                            >
                                                {data.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>

                        <div className='flex items-center  gap-5'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor='date'>Tanggal</label>
                                <input
                                    required
                                    value={wisataInput.date}
                                    onChange={handleChange}
                                    id='date'
                                    name='date'
                                    type='date'
                                    className='h-9 rounded-lg px-2 text-black focus:outline-none'
                                />
                            </div>
                            <div className='flex w-1/6 flex-col gap-2'>
                                <label htmlFor='qty'>Qty</label>
                                <input
                                    required
                                    value={wisataInput.qty}
                                    onChange={handleChange}
                                    id='qty'
                                    name='qty'
                                    type='number'
                                    min={1}
                                    className='h-9 rounded-lg px-2 text-black focus:outline-none'
                                />
                            </div>
                        </div>

                        <button
                            type='submit'
                            className='mt-10 border border-white py-2 transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black'
                        >
                            Beli
                        </button>
                    </form>

                    <ul className='flex flex-col items-center justify-center gap-5'>
                        {wisataList &&
                            wisataList
                                .filter((data, index) => {
                                    return index < limit;
                                })
                                .map((data, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={`/detail/${data.name
                                                .split(' ')
                                                .join('_')}`}
                                        >
                                            <li className='res flex h-40 w-full max-w-screen-lg cursor-pointer overflow-hidden rounded-lg bg-black bg-opacity-40 backdrop-blur-sm md:h-52 md:w-[40rem]'>
                                                <div className='relative h-full w-[15rem] basis-2/6'>
                                                    <Image
                                                        src={data.img}
                                                        layout='fill'
                                                        alt={data.name}
                                                        objectFit='cover'
                                                    />
                                                </div>
                                                <div className='flex grow basis-3/6 flex-col gap-3 rounded-r-lg border border-transparent p-3 transition-all duration-200 hover:border-zinc-500 md:p-5'>
                                                    <h1 className='text-base font-semibold md:text-xl'>
                                                        {data.name}
                                                    </h1>
                                                    <p className='text-xs md:text-sm'>
                                                        {data.desc.substring(
                                                            0,
                                                            data.desc
                                                                .substring(
                                                                    0,
                                                                    120
                                                                )
                                                                .lastIndexOf(
                                                                    ' '
                                                                )
                                                        ) + ' ...'}
                                                    </p>
                                                </div>
                                            </li>
                                        </Link>
                                    );
                                })}
                    </ul>

                    {limit < wisataList.length && (
                        <button
                            onClick={() => setLimit(limit + 4)}
                            className='border border-white py-2 px-5 text-xs transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black'
                        >
                            Muat Lebih Banyak
                        </button>
                    )}
                </main>
            </Layout>
        </>
    );
}

export default Ticket;
