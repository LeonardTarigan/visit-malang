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
                    <main className='flex h-fit gap-10 scroll-smooth px-20'>
                        <div
                            className='relative h-[25rem] w-[20rem] basis-2/6 overflow-hidden rounded-lg'
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

                        <section className='flex basis-4/5 flex-col justify-between'>
                            <div>
                                <h1
                                    className='mb-5 text-3xl font-semibold'
                                    data-aos='fade-right'
                                    data-aos-duration='1000'
                                    data-aos-delay='100'
                                >
                                    {data.name}
                                </h1>
                                <p
                                    data-aos='fade-right'
                                    data-aos-duration='1000'
                                    data-aos-delay='200'
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Autem expedita ea, quis
                                    distinctio fugiat error architecto in iure
                                    aut reprehenderit voluptatem ipsum ut quasi
                                    officia aperiam quisquam qui. Numquam saepe,
                                    laboriosam provident consequatur culpa
                                    similique architecto sunt molestiae
                                    quibusdam! Excepturi incidunt accusamus
                                    nostrum repellat recusandae? Consectetur
                                    laudantium quibusdam minima nesciunt?
                                </p>
                            </div>

                            <button
                                onClick={handleBuy}
                                className='border border-white py-2 transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black'
                                data-aos='fade-right'
                                data-aos-duration='1000'
                                data-aos-delay='300'
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
