import { useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Details = () => {

    const [showMyDetail, setShowMyDetail] = useState(false);

    return (

        <div className='flex items-center justify-evenly w-full h-screen bg-backgroundColor relative'>

            <ParallaxLayer
                offset={0.4}
                speed={0.25}>
                <div className='absolute left-[17%] z-10'>
                    <div className='flex bg-goldColor flex-col p-32'>
                        <h1 className='text-backgroundColor'>
                            Hi im danial
                        </h1>
                        <h3 className='text-goldColor stroke'>
                            and im an app developer
                        </h3>

                    </div>
                </div>
            </ParallaxLayer>


            <ParallaxLayer
                offset={0.2}
                speed={0.4}>
                <div className='absolute right-[17%] z-0'>
                    <div className='relative bg-goldColor p-32 flex flex-col justify-center items-center  shadow-2xl'>

                        <div className='rounded-lg group w-[450px] h-[450px] group'>
                            <div className={showMyDetail ? "showMyDetails-Image" : 'hideMyDetails-Image'}>
                                <div className={showMyDetail ? 'showMyDetails-BackDrop' : 'hideMyDetails-BackDrop'}>


                                    <div className=' flex just'>

                                        <h6 className={showMyDetail ? 'showMyDetails-HeadLines w-28' : 'hideMyDetails-HeadLines'}> Name: </h6>
                                        <h6 className={showMyDetail ? 'showMyDetails-HeadLines' : 'hideMyDetails-HeadLines'}> Danial Barazandeh </h6>

                                    </div>

                                    <div className=' flex just'>

                                        <h6 className={showMyDetail ? 'showMyDetails-HeadLines w-28' : 'hideMyDetails-HeadLines'}> Nationality: </h6>
                                        <h6 className={showMyDetail ? 'showMyDetails-HeadLines' : 'hideMyDetails-HeadLines'}> Persian </h6>

                                    </div>


                                    <div className=' flex just'>

                                        <h6 className={showMyDetail ? 'showMyDetails-HeadLines w-28' : 'hideMyDetails-HeadLines'}> Language: </h6>
                                        <h6 className={showMyDetail ? 'showMyDetails-HeadLines' : 'hideMyDetails-HeadLines'}> English - Farsi </h6>

                                    </div>


                                    <div className=' flex just'>

                                        <h6 className={showMyDetail ? 'showMyDetails-HeadLines w-28' : 'hideMyDetails-HeadLines'}> Birthday: </h6>
                                        <h6 className={showMyDetail ? 'showMyDetails-HeadLines' : 'hideMyDetails-HeadLines'}> 1997-01-03 </h6>

                                    </div>

                                    <div className=' flex'>
                                        <h6 className={showMyDetail ? 'showMyDetails-HeadLines w-28' : 'hideMyDetails-HeadLines'}> Sex: </h6>
                                        <h6 className={showMyDetail ? 'showMyDetails-HeadLines' : 'hideMyDetails-HeadLines'}> Male </h6>
                                    </div>

                                    <div className=' flex'>
                                        <h6 className={showMyDetail ? 'showMyDetails-HeadLines w-28' : 'hideMyDetails-HeadLines'}> Bachlor: </h6>
                                        <h6 className={showMyDetail ? 'showMyDetails-HeadLines' : 'hideMyDetails-HeadLines'}> Software engeneering in 2017 </h6>
                                    </div>

                                    <div className=' flex'>
                                        <h6 className={showMyDetail ? 'showMyDetails-HeadLines w-28' : 'hideMyDetails-HeadLines'}> Master: </h6>
                                        <h6 className={showMyDetail ? 'showMyDetails-HeadLines' : 'hideMyDetails-HeadLines'}> Artificial intelligence in 2019 </h6>
                                    </div>

                                    <div className=' flex'>
                                        <h6 className={showMyDetail ? 'showMyDetails-HeadLines w-28' : 'hideMyDetails-HeadLines'}> PhD: </h6>
                                        <h6 className={showMyDetail ? 'showMyDetails-HeadLines' : 'hideMyDetails-HeadLines'}> Artificial intelligence Candidate </h6>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='absolute w-full bottom-0 left-0 right-0 mb-12 flex items-center justify-center justify-items-center'>
                            <button className={showMyDetail ? "showMyDetails-Button" : "hideMyDetails-Button"} onClick={() => setShowMyDetail(current => !current)}>
                                {showMyDetail ? "Ok it is enogh" : "Show my details"}
                            </button>
                        </div>
                    </div>


                </div>
            </ParallaxLayer>

        </div>

    )
}

export default Details