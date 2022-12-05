import Layout from '../../../widgets/layout';
import Image from 'next/legacy/image';
import { useContext, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import wisata from '../../../data/wisata.json';
import CardsPic from '../../../public/card_img.png';
import Ovo from '../../../public/bg/ovo.png';
import Dana from '../../../public/bg/dana.jpg';
import Gopay from '../../../public/bg/gopay.png';
import ShopeePay from '../../../public/bg/ShopeePay.png';

function TicketPayment() {
    const { state } = useContext(GlobalContext);
    const { wisataInput } = state;

    const [image, setImage] = useState(
        'https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg'
    );
    const [paymentInput, setPaymentInput] = useState({
        name: '',
        phone: '',
        email: 'user@user.com',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setPaymentInput({ ...paymentInput, [e.target.name]: e.target.value });
    };

    useState(() => {
        if (wisataInput.location !== '') {
            const res = wisata.data.filter((data) => {
                return data.name === wisataInput.location;
            });
            console.log(res);
            setImage(res[0].img);
        }
    }, []);

    console.log(image);

    return (
        <Layout>
            <main className='flex h-fit justify-center px-5 md:px-20'>
                {wisataInput && (
                    <form className='flex h-full w-10/12 flex-col gap-10 rounded-xl bg-black bg-opacity-30 p-5 backdrop-blur-md'>
                        <section className='flex'>
                            <div className='flex basis-1/2 flex-col gap-7'>
                                <h1 className='text-2xl font-semibold'>
                                    Detail Pembayaran
                                </h1>
                                <div className='relative h-52 w-[25rem] overflow-hidden rounded-lg'>
                                    <Image
                                        src={image}
                                        priority
                                        layout='fill'
                                        objectFit='cover'
                                        alt='image'
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-2'>
                                        Destinasi : {wisataInput.location}
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        Tanggal : {wisataInput.date}
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        Jumlah : {wisataInput.qty} Tiket
                                    </div>
                                </div>
                            </div>
                            <div className='flex basis-1/2 flex-col justify-between gap-5'>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor='name'>
                                            Nama Lengkap
                                        </label>
                                        <input
                                            type='text'
                                            id='name'
                                            name='name'
                                            autoComplete='off'
                                            required
                                            placeholder='Nama Anda'
                                            className='h-9 w-full rounded-lg px-2 text-sm text-black focus:outline-none'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor='name'>
                                            No. Telepon
                                        </label>
                                        <input
                                            type='text'
                                            id='phone'
                                            name='phone'
                                            autoComplete='off'
                                            required
                                            placeholder='08xxxxxxxxxx'
                                            className='h-9 w-full rounded-lg px-2 text-sm text-black focus:outline-none'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor='name'>Email</label>
                                        <input
                                            value={paymentInput.email}
                                            onChange={handleChange}
                                            type='email'
                                            id='email'
                                            name='email'
                                            autoComplete='off'
                                            required
                                            placeholder='example@example.com'
                                            className='h-9 w-full rounded-lg px-2 text-sm text-black focus:outline-none'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <div className='relative h-8 w-60'>
                                        <Image
                                            src={CardsPic}
                                            alt='cards'
                                            layout='fill'
                                        />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div className='relative h-8 w-16 overflow-hidden rounded'>
                                            <Image
                                                src={Ovo}
                                                alt='ovo'
                                                layout='fill'
                                            />
                                        </div>
                                        <div className='relative h-8 w-10 overflow-hidden rounded'>
                                            <Image
                                                src={Dana}
                                                alt='dana'
                                                layout='fill'
                                            />
                                        </div>
                                        <div className='relative h-8 w-16 overflow-hidden rounded bg-white'>
                                            <Image
                                                src={Gopay}
                                                alt='gopay'
                                                layout='fill'
                                            />
                                        </div>
                                        <div className='relative h-8 w-14 overflow-hidden rounded'>
                                            <Image
                                                src={ShopeePay}
                                                alt='shopeepay'
                                                layout='fill'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <button
                            onClick={handleSubmit}
                            className='border border-white py-2 px-5 font-semibold transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black'
                        >
                            Bayar
                        </button>
                    </form>
                )}
            </main>
        </Layout>
    );
}

export default TicketPayment;
