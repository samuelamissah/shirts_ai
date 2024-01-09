import React from 'react'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import config from '../config/config'
import state from '../store'
import {download} from'../assets'
import {downloadCanvasToImage, reader} from '../config/helpers'
import {EditorTabs, FilterTabs, DecalTypes} from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'
import {AIPicker, FilePicker, ColorPicker, CustomButton, Tab} from '../components'



const Customizer = () => {
  const snap = useSnapshot(state)
  return (
   <AnimatePresence>
    {!snap.intro && (
      <>
<motion.div
key="customizer"
className='absolute top-0 left-0 z-10 '
{...slideAnimation('left')}
>
  <div className='flex items-center min-h-screen'>
<div className='editortabs-container tabs'>
{EditorTabs.map((tab) => (
  <Tab key={tab.name} tab={tab}
  handleClick={() => {}}
  />
))}
</div>
  </div>
  
  </motion.div>  
  <motion.div
  className='absolute top-2 right-5 z-10 '
  {...fadeAnimation}
  >
  <CustomButton 
  type='filled'
  title="Back"
  handleClick={() => state.intro = true}
  className='bg-gray-900 text-white'

  
  />
  </motion.div>  

  <motion.div
  className='filtertabs-container'
  {...slideAnimation('up')}
  >
    {FilterTabs.map((tab) => (
  <Tab key={tab.name} tab={tab}
  isFilterTab
  isActiveTab=""
  handleClick={() => {}}
  />
))}

  </motion.div>
  
  
    </>
      )}


   </AnimatePresence>
  )
}

export default Customizer