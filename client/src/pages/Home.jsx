import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { useSnapshot } from 'valtio'
import {headContainerAnimation, headContentAnimation,headTextAnimation, slideAnimation} from '../config/motion'

import state from '../store'
import { CustomButton } from '../components'

const Home = () => {
 const snap = useSnapshot(state);

  return (
    <AnimatePresence >
{snap.intro && (
 <motion.section className='home' {...slideAnimation ('left')}>
<motion.header {...slideAnimation('down')}>
    <img 
    src='./threejs.png'
    alt='logo'
    className='w-8 h-8 object-contain'
    />
</motion.header>
<motion.div className='home-content' {...headContainerAnimation}>
    <motion.div {...headTextAnimation}> 
    <h1 className='head-text'>
        Let's  <br className='xl:block' /> Fucking' Go

    </h1>

    </motion.div>
    <motion.div
    {...headContentAnimation}
    className='flex flex-col gap-5'    
    >
        <p className='max-w-md font-normal text-gray-700 text-base'>
        Design Your Own Exclusive <i className='text-red-600'>SHIRT</i> with my brand-new 3-D Customization tool. <strong>Unleash Your Potential</strong>
        </p>

<CustomButton
type="filled"
title="Just Do It"
handleClick={() => state.intro = false}
customStyles="w-fit px-4 py-3 font-bold text-sm"
 />


    </motion.div>

</motion.div>

 </motion.section>

)}






    </AnimatePresence>
  )
}

export default Home