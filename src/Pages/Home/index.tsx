import {
  AnimatePresence,
  motion,
  useMotionValue,
  usePresence,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { Link } from "react-router-dom";

import { FaShoppingBasket, FaTag} from 'react-icons/fa'
import heroImage from '../../Assets/image-stand-out.jpg'
import  '../../../node_modules/locomotive-scroll/dist/locomotive-scroll.css';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef, useState } from "react";

const Header = ()=>(
    <motion.header id='header' data-scroll-section>
        <div className="header_logo">
            <span className='name'>Strawberry</span>
            <span className='tag small'>Online</span>
        </div>

        <Link to='/' className="header_link"><span>Shop</span></Link>
    </motion.header>
);

const Hero = ()=>(
    <motion.section id='hero' data-scroll-section>
        <div className="title">
            <div className="title-top">
                <motion.span initial={{y:-10,opacity:0}} transition={{delay:0}} animate={{y:0,opacity:1}}>Cart {' '} <FaShoppingBasket /> </motion.span>
                <motion.span initial={{y:-10,opacity:0}} transition={{delay:0.2}} animate={{y:0,opacity:1}}>Buy {' '} <FaTag/> </motion.span>
            </div>
            <motion.div className="title-bottom" initial={{y:10,opacity:0}} transition={{delay:0.4}} animate={{y:0,opacity:1}}>Strawberry</motion.div>
        </div>

        <motion.div initial={{width:'200px', height:'200px'}} style={{backgroundImage:'url('+heroImage+')'}} transition={{delay:0.3,ease:'easeOut'}}  animate={{width:'100%',height:'500px'}} className="image-container">

        </motion.div>
    </motion.section>
)


window.addEventListener('load',()=>{
      let scroll = new LocomotiveScroll({
    el:document.querySelector('*[data-scroll-container]'),
    smooth:true,
    multiplier:.8,
    // direction:'horizontal'
})
    scroll.init()
    console.log('Locomotive')
})
const Home = () => {
    const ref= useRef(null!);
    // useEffect(()=>{
    //  if(ref.current){
    
        // scroll.destroy()
        // scroll.on('scroll',()=>{
        // })
    //  }
    // },[ref])
  return (
      <motion.main key={"home"} data-scroll-container  ref={ref} id="home">
          {/* <div data-scroll-section> */}
         <Header />
         <Hero />
        <div className="d-c" data-scroll-section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptas modi earum quaerat. Consequatur iure mollitia earum eos itaque facilis est laudantium. Odio, debitis minima a explicabo nostrum hic? Aspernatur, veritatis fugiat maiores aperiam placeat quisquam voluptatum! Debitis excepturi id facere beatae perferendis, velit facilis, repudiandae, explicabo ea ut nam.
        </div>
      {/* </div> */}
      </motion.main>
  );
};

export default Home;
