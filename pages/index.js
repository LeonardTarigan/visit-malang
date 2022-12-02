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
                <main
                    id='main'
                    className='flex h-fit flex-col gap-20 px-5 md:px-20'
                >
                    <section className='mb-20 mt-20 flex h-[27rem] flex-col justify-center gap-10 md:mt-0'>
                        <h1
                            className='text-4xl font-semibold md:text-5xl'
                            data-aos='fade-right'
                            data-aos-duration='1000'
                        >
                            Selamat Datang di Malang
                        </h1>
                        <p
                            className='md:w-2/3'
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
                            className='text-2xl font-semibold md:text-3xl'
                            data-aos='fade-right'
                            data-aos-duration='1000'
                        >
                            Sejarah Kota Malang
                        </h2>
                        <p
                            data-aos='fade-right'
                            data-aos-duration='1000'
                            data-aos-delay='100'
                            className='text-sm md:text-base'
                        >
                                Pariwisata di Kota Malang cukup besar. Pada tahun 2016, tercatat jumlah wisatawan domestik di Kota Malang berjumlah 3.987.074 orang, 
                            sedangkan wisatawan mancanegara sejumlah 9.535 orang. Jumlah wisatawan tahun 2016 merupakan suatu lonjakan yang signifikan dari tahun 
                            sebelumnya. Dengan melihat bukti tersebut, pemerintah optimis jumlah kunjungan wisatawan, terutama mancanegara akan terus meningkat.
                                Malang dikenal memiliki banyak sekali kampung tematik yang bernuansa pedesaan dan khas. Di antaranya, yang paling terkenal adalah Kampung 
                            Wisata Jodipan (Kampung Warna-Warni), kampung warna-warni pertama di Indonesia yang menjadi salah satu destinasi favorit di Kota Malang. 
                            Selain itu, ada juga Kampung Tridi yang terletak di seberang Kampung Warna-Warni yang terkenal akan karya seni mural di dinding-dinding 
                            perumahannya, seperti Haji Lane di Singapura. Kedua kampung tersebut dihubungkan oleh sebuah jembatan kaca. Keduanya merupakan tempat selfie 
                            favorit para wisatawan.
                                Selain itu, ada juga kampung wisata di Kota Malang yang terkenal akan keramahan lingkungannya dan kehijauannya. Di antaranya adalah Kampung 
                            Glintung Go Green (3G) yang terletak di Purwantoro dan Kampung Bamboo Mewek di Tunjungsekar. Keramahan lingkungan di Kampung 3G dapat dilihat dari 
                            penuhnya kampung oleh tanaman. Kampung 3G pun merupakan kampung konservasi air pertama di Indonesia. Sedangkan, Kampung Bamboo Mewek dianggap ramah 
                            lingkungan karena penuh dengan pohon dan bambu serta merupakan kampung konservasi.
                                Pada Februari 2015, Pemerintah Kota Malang meluncurkan sistem angkutan bus tingkat wisata bewarna hijau yang dinamai Bus Macyto, singkatan dari 
                            Malang City Tour yang disediakan secara gratis dan khusus untuk para wisatawan. Bus ini beroperasi di Kota Malang dari depan gedung DPRD Kota Malang 
                            dan rutenya melewati beberapa titik-titik penting di tiap sudut kota, di antaranya beberapa museum-museum penting, kawasan Jalan Ijen, wisata kuliner, 
                            dan sebagainya. Bus ini berkapasitas 40 penumpang dengan jatah keliling sebanyak tiga kali.
                                Sarana penginapan untuk pariwisata di Kota Malang beragam, mulai dari hotel, apartemen, losmen, hingga rumah singgah yang tersebar di seluruh penjuru kota. 
                            Keberagaman ini didukung oleh kenyataan bahwa Malang merupakan tujuan wisata paling populer di Indonesia setelah Bali, Bandung, dan Yogyakarta. Hotel yang paling 
                            terkenal di kota adalah Hotel Tugu. Hal ini dikarenakan hotel sudah dikenal baik di kalangan wisatawan asing dan hotel ini sering memeanjakan pengunjungnya dengan 
                            berbagai acara. Hotel terkenal lainnya adalah Hotel Pelangi karena hotel tersebut memiliki koleksi lukisan-lukisan Belanda.
                        </p>
                    </section>

                    <section id='wisata'>
                        <div className='mb-10 flex h-fit items-center justify-between'>
                            <h2
                                data-aos='fade-right'
                                data-aos-duration='1000'
                                className='text-2xl font-semibold md:text-3xl'
                            >
                                Wisata Kota Malang
                            </h2>

                            <button
                                data-aos='fade-in'
                                data-aos-duration='1000'
                                data-aos-delay='100'
                                className='w-fit border border-white py-2 px-5 text-sm font-semibold transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black md:text-base'
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
                    </section>
                </main>
            </Layout>
        </>
    );
}
