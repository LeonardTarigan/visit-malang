import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import Head from 'next/head';
import Layout from '../../widgets/layout';
import wisata from '../../data/wisata.json';
import Image from 'next/legacy/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Detail() {
    const router = useRouter();
    const { name } = router.query;
    const { state } = useContext(GlobalContext);

    const { villaIput, setVillaInput, wisataInput, setWisataInput } = state;

    const [data, setData] = useState();

    const [type, setType] = useState('');

    const handleBuy = () => {
        if (type === 'wisata') {
            setWisataInput({ ...wisataInput, location: data.location });
            router.push('/booking/ticket');
        } else {
            router.push('/booking/villa');
        }
    };

    useEffect(() => {
        if (name) {
            setData(
                wisata.data.find((data) => {
                    data.type === 'wisata'
                        ? setType('wisata')
                        : setType('villa');

                    return data.name === name.replace(/_/g, ' ');
                })
            );

            AOS.init();
        }
    }, [name]);

    return (
        <>
            <Head>
                <title>Visit Malang</title>
                <meta name='description' content='Jelajahi Kota Malang' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                {data && (
                    <main className='flex h-fit flex-col gap-10 scroll-smooth px-5 md:flex-row md:px-20'>
                        <div
                            className='pic relative h-[20rem] w-full overflow-hidden rounded-lg md:h-[25rem] md:w-[20rem] md:basis-2/6'
                            data-aos='fade-right'
                            data-aos-duration='1000'
                        >
                            <Image
                                src={data.img}
                                alt={data.name}
                                layout='fill'
                                objectFit='cover'
                            />
                        </div>

                        <section className='flex flex-col justify-between md:basis-4/6'>
                            <div>
                                <h1
                                    className='mb-5 text-2xl font-semibold md:text-3xl'
                                    data-aos='fade-right'
                                    data-aos-duration='1000'
                                    data-aos-delay='100'
                                    data-aos-anchor='.pic'
                                    data-aos-once='true'
                                >
                                    {data.name}
                                </h1>
                                <p
                                    data-aos='fade-right'
                                    data-aos-duration='1000'
                                    data-aos-delay='200'
                                    className='desc text-sm md:text-base'
                                    data-aos-anchor='.pic'
                                    data-aos-once='true'
                                >
                                    {data.desc}
                                </p>
                            </div>

                            <button
                                onClick={handleBuy}
                                className='mt-10 border border-white py-2 transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black'
                                data-aos='fade-right'
                                data-aos-duration='1000'
                                data-aos-delay='300'
                                data-aos-anchor='.desc'
                                data-aos-once='true'
                            >
                                {type === 'wisata'
                                    ? 'Beli Tiket'
                                    : 'Booking Villa'}
                            </button>
                        </section>
                    </main>
                )}
            </Layout>
        </>
    );
}

export default Detail;
