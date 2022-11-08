import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React, { useState, useRef, useEffect } from 'react';
import Details from '../components/details'
import Education from '../components/education'
import wavesOpacity from '../public/svgs/wavesOpacity.svg'
import wave from '../public/svgs/wave.svg'
import Image from 'next/image'
import Apps from '../components/apps'

const Home: NextPage = () => {




  return (
    <div>



      <Parallax pages={4} style={{ top: '0', left: '0' }}>




        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          <div className='w-full flex flex-col'>
            <Details />

            <div className='w-full relative'>

              <div className='absolute z-10 w-full h-52' >
                <ParallaxLayer
                  offset={0}
                  speed={0.25}>
                  <Image src={wave} layout='responsive' />
                </ParallaxLayer>
              </div>

              <div className='absolute z-1 w-full h-52'>
                <ParallaxLayer
                  offset={0}
                  speed={0.2}>
                  <Image src={wavesOpacity} layout='responsive' />
                </ParallaxLayer>
              </div>

            </div>

          </div>

        </ParallaxLayer>




        <ParallaxLayer offset={1} speed={0.5} >
          <Education></Education>
        </ParallaxLayer>



        <ParallaxLayer offset={2} speed={0.5} >
          <Apps></Apps>
        </ParallaxLayer>


        <ParallaxLayer offset={3} speed={0.5} >
          <Education></Education>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default Home
