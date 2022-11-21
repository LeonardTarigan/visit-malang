import Head from 'next/head';
import Layout from '../widgets/layout';
import wisata from '../data/wisata.json';
import Image from 'next/legacy/image';
import { Link as Scroll } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
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
                <main id='main' className='flex h-fit flex-col gap-20 px-20'>
                    <section className='mb-20 flex h-[27rem] flex-col justify-center gap-10'>
                        <h1
                            className='text-5xl font-semibold'
                            data-aos='fade-right'
                            data-aos-duration='1000'
                        >
                            Selamat Datang di Malang
                        </h1>
                        <p
                            className='w-2/3'
                            data-aos='fade-right'
                            data-aos-duration='1000'
                            data-aos-delay='100'
                        >
                            Jelajahi kota penuh warna dengan segudang
                            tempat-tempat yang pastinya menarik untuk
                            dikunjungi. Kami mengakomodasi informasi dan
                            pemesanan tiket wisata maupun villa yang ada di Kota
                            Malang.
                        </p>
                        <Scroll
                            to='sejarah'
                            smooth={true}
                            offset={-110}
                            duration={1000}
                            data-aos='fade-right'
                            data-aos-duration='1000'
                            data-aos-delay='200'
                        >
                            <button className='w-fit border border-white py-2 px-5 font-semibold transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black'>
                                Mulai
                            </button>
                        </Scroll>
                    </section>

                    <section id='sejarah' className='mb-20 flex flex-col gap-5'>
                        <h2
                            className='text-3xl font-semibold'
                            data-aos='fade-right'
                            data-aos-duration='1000'
                        >
                            Sejarah Kota Malang
                        </h2>
                        <p
                            data-aos='fade-right'
                            data-aos-duration='1000'
                            data-aos-delay='100'
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Porro optio iusto et qui possimus ratione
                            praesentium, adipisci, quasi nulla voluptate placeat
                            minima, quibusdam quisquam sunt voluptatum eaque
                            repellat quis esse accusantium dolorum laboriosam
                            deleniti ipsam! Necessitatibus sint nihil modi nulla
                            at quia illum nostrum dolore omnis iure voluptatum,
                            distinctio esse numquam provident sapiente, maxime
                            voluptate cum laborum odio eum iste, deserunt
                            laboriosam autem. Neque incidunt libero molestiae
                            enim officia eaque ex aperiam eos est vitae quis
                            praesentium quisquam, eum voluptatum cumque, sint
                            quod commodi officiis id deleniti rerum sapiente
                            odio, facere voluptates! Neque, non et aliquid quod
                            autem molestias soluta? Aperiam facilis aspernatur
                            animi sit autem minus architecto consectetur ducimus
                            corporis dolorem, fugiat soluta perspiciatis
                            molestiae vitae, dolorum neque cum sint laudantium
                            exercitationem non est aliquam. Ratione velit
                            deleniti minus ipsam. Dolorum nulla laudantium,
                            inventore doloremque nisi iure culpa. Commodi
                            consectetur dolorem praesentium sunt! Fugit magni
                            repudiandae assumenda recusandae possimus. Iure
                            reprehenderit alias doloremque atque quos doloribus
                            amet cumque culpa voluptatem laboriosam illo iste
                            ducimus quis quisquam laudantium, magni eligendi
                            eius minus blanditiis accusantium consequuntur odio
                            itaque ipsam vitae! Beatae dolore minima eius rem
                            aspernatur nihil, soluta vero obcaecati rerum atque
                            reiciendis voluptate architecto magni quisquam
                            perspiciatis, non magnam dolorum.
                        </p>
                    </section>

                    <section id='wisata'>
                        <div className='mb-10 flex h-fit items-center justify-between'>
                            <h2
                                data-aos='fade-right'
                                data-aos-duration='1000'
                                className='text-3xl font-semibold'
                            >
                                Wisata Kota Malang
                            </h2>

                            <button
                                data-aos='fade-in'
                                data-aos-duration='1000'
                                data-aos-delay='100'
                                className='w-fit border border-white py-2 px-5 font-semibold transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black'
                            >
                                Rekomendasi
                            </button>
                        </div>
                        <ul className='flex flex-wrap'>
                            {wisata.data
                                .filter((data) => {
                                    return data.type === 'wisata';
                                })
                                .map((data, index) => {
                                    return (
                                        <li
                                            key={index}
                                            data-aos='fade-in'
                                            data-aos-duration='700'
                                            data-aos-delay={index * 100}
                                            data-aos-anchor='.pics'
                                            className='pics group relative h-72 w-64 grow cursor-pointer overflow-hidden bg-white'
                                        >
                                            <Link
                                                href={`detail/${data.name
                                                    .split(' ')
                                                    .join('_')}`}
                                            >
                                                <span className='absolute bottom-0 z-10 w-full p-2 text-center'>
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
                    </section>
                </main>
            </Layout>
        </>
    );
}
