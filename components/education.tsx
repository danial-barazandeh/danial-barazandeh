import { useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import university from '../public/svgs/university.svg'
import blob from '../public/svgs/blob.svg'
import Image from 'next/image'

const Educations = () => {


  return (

    <div className="flex justify-evenly items-center">


      <div className='relative flex justify-center items-center w-[100%]'>


        <div className='absolute z-10 w-full h-full ml-24'>
          <ParallaxLayer offset={0} speed={0.1}>
            <h1 className='font-bold'>
              How My Journey Began
            </h1>
          </ParallaxLayer>
        </div>

        <div className='absolute z-1 w-[60%] h-[60%]'>
          <ParallaxLayer offset={0} speed={0.2}>
            <Image src={blob} layout='fill' />
          </ParallaxLayer>
        </div>


        <div className='absolute z-2 w-[40%] h-[40%]'>
          <ParallaxLayer offset={0} speed={0.3}>
            <Image src={university} layout='fill' />
          </ParallaxLayer>
        </div>

      </div>



      <div className='flex flex-col justify-center items-start gap-8 bg-goldColor p-24 w-[100%]'>

        <h6 className='text-backgroundColor font-bold'>
          I Got My Software Engineer Bachlor in 2019 from <a className='underline' href='https://en.wikipedia.org/wiki/Islamic_Azad_University,_Rasht_Branch'> Islamic Azad University - Rasht Branch </a>
        </h6>
        <h6 className='text-backgroundColor font-bold'>
          Next I Got my Artificial Intelligence Master in 2021 from <a className='underline' href='https://en.wikipedia.org/wiki/Islamic_Azad_University,_Lahijan_Branch'> Islamic Azad University - Lahijan Branch </a>
        </h6>
        <h6 className='text-backgroundColor font-bold'>
          And currently im a PhD candidate in Artificial from <a className='underline' href='https://en.wikipedia.org/wiki/Islamic_Azad_University,_Lahijan_Branch'> Islamic Azad University - Lahijan Branch </a>
        </h6>
      </div>

    </div>


  )
}

export default Educations