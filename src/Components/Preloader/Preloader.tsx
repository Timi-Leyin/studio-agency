import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export const Preloader = () => {
  return (
  <AnimatePresence initial={true} key={'dffdfs'} exitBeforeEnter>
       <motion.section key='assa1' animate={{opacity:1,y:0}} initial={{opacity:0,y:-100}} exit={{opacity:0,y:-100}}>
       loading
   </motion.section>
  </AnimatePresence>
  )
}
