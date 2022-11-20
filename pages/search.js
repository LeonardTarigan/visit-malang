import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Head from 'next/head';
import Layout from '../widgets/layout';
import Image from 'next/legacy/image';

function Search() {
    const { state } = useContext(GlobalContext);
    const { searchRes, searchInput } = state;

    return (
        <>
            <Head>
                <title>Visit Malang</title>
                <meta name='description' content='Jelajahi Kota Malang' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Layout>
                <main className='flex h-fit min-h-[20rem] flex-col gap-20 px-20'>
                    <ul className='flex flex-col items-center justify-center gap-5'>
                        {searchRes.length === 0 &&
                            (searchInput === '' ? (
                                ''
                            ) : (
                                <h3>Pencarian Tidak Ditemukan</h3>
                            ))}
                        {searchRes.length > 0 &&
                            searchRes.map((data, index) => {
                                return (
                                    <li
                                        key={index}
                                        className='flex h-52 w-full max-w-screen-lg cursor-pointer overflow-hidden rounded-lg bg-black bg-opacity-40 backdrop-blur-sm'
                                    >
                                        <div className='relative h-full w-[15rem] basis-1/5'>
                                            <Image
                                                src={`/api/imageproxy?url=${encodeURIComponent(
                                                    data.img
                                                )}`}
                                                layout='fill'
                                                alt='logo'
                                                objectFit='cover'
                                            />
                                        </div>
                                        <div className='flex basis-4/5 flex-col gap-3 rounded-r-lg border border-transparent p-5 transition-all duration-200 hover:border-zinc-500'>
                                            <h1 className='text-xl font-semibold'>
                                                {data.name}
                                            </h1>
                                            <p className='text-sm'>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Ut, repellat in! Quisquam animi
                                                optio aut voluptatibus excepturi
                                                tempore, facilis aliquam qui
                                                perferendis culpa doloribus
                                                ullam suscipit repudiandae minus
                                                laudantium dicta ducimus enim
                                                veritatis similique. Expedita
                                                dolorum similique numquam ut
                                                officiis repellendus nesciunt
                                                magnam reiciendis explicabo
                                                sequi! Eaque accusantium tenetur
                                                unde?
                                            </p>
                                        </div>
                                    </li>
                                );
                            })}
                    </ul>
                </main>
            </Layout>
        </>
    );
}

export default Search;
