import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../widgets/layout';
import wisata from '../../data/wisata.json';
import Image from 'next/legacy/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Detail() {
    const router = useRouter();
    const { name } = router.query;

    const [data, setData] = useState();

    useEffect(() => {
        if (name) {
            setData(
                wisata.data.find((data) => {
                    return data.name === name.replace(/_/g, ' ');
                })
            );

            AOS.init();
        }
    }, [name]);

    return (
        <Layout>
            {data && (
                <main className='flex h-fit gap-10 scroll-smooth px-20'>
                    <div
                        className='relative h-[25rem] w-[20rem] basis-2/6 overflow-hidden rounded-lg'
                        data-aos='fade-right'
                        data-aos-duration='1000'
                    >
                        <Image
                            src={`/api/imageproxy?url=${encodeURIComponent(
                                data.img
                            )}`}
                            alt='img'
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
                                distinctio fugiat error architecto in iure aut
                                reprehenderit voluptatem ipsum ut quasi officia
                                aperiam quisquam qui. Numquam saepe, laboriosam
                                provident consequatur culpa similique architecto
                                sunt molestiae quibusdam! Excepturi incidunt
                                accusamus nostrum repellat recusandae?
                                Consectetur laudantium quibusdam minima
                                nesciunt?
                            </p>
                        </div>

                        <button
                            className='border border-white py-2 transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black'
                            data-aos='fade-right'
                            data-aos-duration='1000'
                            data-aos-delay='300'
                        >
                            Beli Tiket
                        </button>
                    </section>
                </main>
            )}
        </Layout>
    );
}

export default Detail;
