import Layout from '../../widgets/layout';
import wisata from '../../data/wisata.json';
import { useRouter } from 'next/router';

function Villa() {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        router.push('/payment');
    };

    return (
        <>
            <Layout>
                <main className='flex h-fit flex-col items-center gap-10 scroll-smooth px-20'>
                    <form
                        onSubmit={handleSubmit}
                        className='flex h-fit w-[40rem] flex-col gap-5 rounded-lg bg-black bg-opacity-30 p-5 backdrop-blur-md'
                    >
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='location'>Lokasi</label>
                            <input
                                required
                                id='location'
                                name='location'
                                type='text'
                                className='h-9 w-full rounded-lg px-2 text-sm text-black focus:outline-none'
                            />
                        </div>

                        <div className='flex items-center  gap-5'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor='location'>Tanggal</label>
                                <input
                                    required
                                    id='date'
                                    name='date'
                                    type='date'
                                    className='h-9 rounded-lg px-2 text-sm text-black focus:outline-none'
                                />
                            </div>
                            <div className='flex w-1/6 flex-col gap-2 '>
                                <label htmlFor='duration'>Malam</label>
                                <input
                                    required
                                    id='duration'
                                    name='duration'
                                    type='number'
                                    min={1}
                                    className='h-9 rounded-lg px-2 text-sm text-black focus:outline-none'
                                />
                            </div>
                            <div className='flex w-1/6 flex-col gap-2'>
                                <label htmlFor='qty'>Qty</label>
                                <input
                                    required
                                    id='qty'
                                    name='qty'
                                    type='number'
                                    min={1}
                                    className='h-9 rounded-lg px-2 text-sm text-black focus:outline-none'
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
                </main>
            </Layout>
        </>
    );
}

export default Villa;
