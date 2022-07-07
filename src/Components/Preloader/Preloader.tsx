import { AnimatePresence, motion } from 'framer-motion'

export const Preloader = () => {
  return (
  <AnimatePresence initial={true} key='preloader' exitBeforeEnter>
   <motion.section id="preloader" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
     loading
   </motion.section>
  </AnimatePresence>
  )
}
