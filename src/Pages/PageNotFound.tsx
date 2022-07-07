import { AnimatePresence, motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const item = {hidden:{opacity:1}}
const list = {hidden:{x:-10,opacity:1}}


const PageNotFound = () => {
    const x = useMotionValue(0);
    const opacity = useTransform(x, [-100,0,100],[0,1,0]);
    const { scrollYProgress } = useViewportScroll()
    useEffect(()=>{
        console.log(scrollYProgress)
    },[scrollYProgress])
  return (
    <section id="home">
       <AnimatePresence key={'m34s'}>

        <motion.div key='sd3' drag={true} dragConstraints={{top:0, bottom:10,left:-100,right:100}} initial={true} animate={{x:[-100,10,5,50,4]}}>
            404
        </motion.div>
    

       <motion.h1 key={'mod34al2'} initial={{y:-20,opacity:0}}  transition={{duration:0.6}} viewport={{once:false}} whileInView={{y:0,opacity:1}} exit={{opacity:0}} layout>Hello Framer Motion</motion.h1>
       <Link to='/'>Likn</Link>
       </AnimatePresence>

{/* 
        <motion.ul variants={list} animate='hidden'>
            <motion.li variants={item}>List 1</motion.li>
            <motion.li variants={item}>List 2</motion.li>
            <motion.li variants={item}>List 3</motion.li>
            <motion.li variants={item}>List 4</motion.li>
        </motion.ul> */}
    </section>
  )
}

export default PageNotFound