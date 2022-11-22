import Layout from '../../widgets/layout';
import Head from 'next/head';

function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Head>
                <title>Visit Malang</title>
                <meta name='description' content='Jelajahi Kota Malang' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Layout>
                <section className='flex h-fit justify-center gap-10 px-20'>
                    <form
                        onSubmit={handleSubmit}
                        className='flex h-fit w-[28rem] flex-col items-center gap-10 rounded-lg bg-black bg-opacity-30 p-5 backdrop-blur-md'
                    >
                        <h1 className='text-xl font-semibold'>Buat Akun</h1>

                        <div className='flex w-11/12 flex-col gap-4'>
                            {/* email */}
                            <div className='mb-2 flex flex-col'>
                                <div className='relative flex w-full '>
                                    <label
                                        htmlFor='email'
                                        className='inline-flex items-center rounded-l-md border-t border-l border-b border-gray-300 bg-white  px-3 text-sm text-zinc-600 shadow-sm'
                                    >
                                        <svg
                                            className='h-5 w-5'
                                            fill='currentColor'
                                            viewBox='0 0 20 20'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                                            <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                                        </svg>
                                    </label>
                                    <input
                                        required
                                        type='email'
                                        id='email'
                                        name='email'
                                        className=' focus:ring-3 w-full flex-1 appearance-none rounded-r-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-zinc-900'
                                        placeholder='Email'
                                    />
                                </div>
                            </div>

                            {/* password */}
                            <div className='mb-2 flex flex-col'>
                                <div className='relative flex '>
                                    <label
                                        htmlFor='password'
                                        className='inline-flex items-center rounded-l-md border-t border-l border-b border-gray-300 bg-white  px-3 text-sm text-zinc-600 shadow-sm'
                                    >
                                        <svg
                                            className='h-5 w-5'
                                            fill='currentColor'
                                            viewBox='0 0 20 20'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </label>
                                    <input
                                        required
                                        type='password'
                                        id='password'
                                        name='password'
                                        minLength={8}
                                        className=' focus:ring-3 w-full flex-1 appearance-none rounded-r-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-zinc-900'
                                        placeholder='Password'
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type='submit'
                            className='w-11/12 border border-white py-2 transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black'
                        >
                            Daftar
                        </button>
                    </form>
                </section>
            </Layout>
        </>
    );
}

export default Register;
