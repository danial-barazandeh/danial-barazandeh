import { useState } from 'react';
import Image from 'next/image'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import wavesOpacity from '../public/svgs/wavesOpacity.svg'
import wave from '../public/svgs/wave.svg'
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { database } from '../util/firebaseConfig'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaGithub, FaDownload } from "react-icons/fa";
import { app } from '../util/App';

// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from 'swiper';


const Apps = () => {


    const [notesArray, setNotesArray] = useState<app[]>([]);


    const getApss = () => {

        if (typeof window !== "undefined") {

            const dbInstance = collection(database, 'apps');
            console.log("getApss is called");
            getDocs(dbInstance)
                .then((data) => {
                    setNotesArray(data.docs.map(d => d.data() as app));
                })

            notesArray.forEach(item => console.log(item))
            console.log("***")
        }
    }

    return (

        <div className='flex flex-col'>


            <div className='w-full relative rotate-180'>

                <div className='absolute z-10 w-full h-52' >
                    <Image src={wave} layout='responsive' />
                </div>

                <div className='absolute z-1 w-full h-52'>
                    <Image src={wavesOpacity} layout='responsive' />
                </div>

            </div>






            <div className=' bg-backgroundColor'>
                <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    className='w-[70vw] h-[50vh] bg-backgroundColor flex items-center justify-center justify-items-center'
                    spaceBetween={50}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    centerInsufficientSlides={true}
                    slidesPerView={1}
                    navigation
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {notesArray.map((app) =>
                        <SwiperSlide className='flex items-center justify-center justify-items-center gap-8 px-[5vw]' key={app.name}>
                            <div className='w-[100%] h-[100%] overflow-hidden rounded-3xl backgr bg-[url("http://localhost:3000/images/mobileWorldSlider.jpg")] bg-cover bg-center'>
                                {/* <Image src={app.images.cover?.endsWith("undefined") ? "/images/noImage.jpg" : app.images.cover}
                                        alt=''
                                        height={1920}
                                        width={1280}
                                    /> */}
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='rounded-3xl bg-goldColor text-backgroundColor w-28 h-12 flex items-center justify-center'>
                                    What is it ?
                                </div>
                                <div className='rounded-3xl bg-goldColor text-backgroundColor w-28 h-12 flex items-center justify-center'>
                                    {app.name}
                                </div>
                                <div className='rounded-3xl bg-goldColor text-backgroundColor w-28 h-12 flex items-center justify-center'>
                                    {app.language}
                                </div>
                                <div className='rounded-3xl bg-goldColor text-backgroundColor w-28 h-12 flex items-center justify-center'>
                                    {"Android"}{app.ios ? " , IOS" : ""}
                                </div>
                                <div className='rounded-3xl bg-goldColor text-backgroundColor w-28 h-12 flex items-center justify-center'>
                                    {app.backEnd}
                                </div>
                                <div className='rounded-3xl bg-goldColor text-backgroundColor w-28 h-12 flex items-center justify-center text-3xl icon'>
                                    <FaGithub></FaGithub>
                                </div>

                                <div className='rounded-3xl bg-goldColor text-backgroundColor w-28 h-12 flex items-center justify-center text-3xl icon'>
                                    <FaDownload></FaDownload>
                                </div>

                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>



            <div className='flex items-center justify-evenly w-full h-screen bg-backgroundColor'>
                <button onClick={() => getApss()}> get Apps </button>
            </div>


            <div className='w-full relative'>

                <div className='absolute z-10 w-full h-52' >
                    <Image src={wave} layout='responsive' />
                </div>

                <div className='absolute z-1 w-full h-52'>
                    <Image src={wavesOpacity} layout='responsive' />
                </div>

            </div>

        </div>

    )
}

export default Apps