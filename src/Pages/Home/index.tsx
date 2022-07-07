import {
  AnimatePresence,
  motion,
  useMotionValue,
  usePresence,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import IMAGE from "../../Assets/image-stand-out.jpg";
import { Link } from "react-router-dom";

import { FaBehance, FaFacebook, FaInstagram, FaShoppingBasket, FaTag, FaTwitter } from "react-icons/fa";
import heroImage from "../../Assets/image-stand-out.jpg";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import LocomotiveScroll from "locomotive-scroll";
import { FaShare as Share } from "react-icons/fa";
import { ReactNode, useEffect, useRef, useState } from "react";

// const Menu = ()=>

const Header = () => (
  <motion.header id="header" key="header" data-scroll-section>
    <motion.span />

    <motion.div
      className="header_logo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.span className="name">Anabella's</motion.span>
      <motion.span className="tag small">Studio</motion.span>
    </motion.div>

    <motion.div className="menu-toggle">
      <motion.span> {"Open"} </motion.span>
      <motion.span className="menu-icon"></motion.span>
    </motion.div>
  </motion.header>
);

const Hero = () => (
  <motion.section id="hero" key="hero" data-scroll-section>
    <motion.div className="hero_text">
      <motion.h1
        key="hero heading"
        className="hero-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        POETRY IN DESIGN
      </motion.h1>
      <motion.p
        className="hero-tag"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Graphics Designer
      </motion.p>
    </motion.div>
  </motion.section>
);

interface ImageProps {
  key: string;
  src: string;
  details?: {
    title: string;
    link: string;
  };
}

const CustomImage = ({ key, src, details }: ImageProps) => (
  <motion.div key={key} className="custom-image">
    <motion.div className="image">
      <motion.img
        initial={{ height: 0 }}
        viewport={{once:true}} 
        transition={{ duration: 1.1, delay: 1, ease: "easeOut" }}
        whileInView={{ height: "100%" }}
        src={src}
      />
    </motion.div>
    {details && (
      <motion.div className="details">
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          viewport={{once:true}}
          transition={{ delay: 0.8, ease: "easeOut" }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          {details.title}
        </motion.h3>
        <motion.a
          href={details.link}
          className="link"
          transition={{ delay: 1.3, ease: "easeOut" }}
          initial={{ opacity: 0 }}
          viewport={{once:true}}
          whileInView={{ opacity: 1 }}
        >
          {" "}
          <span>VIEW PROJECT</span> <Share />
        </motion.a>
      </motion.div>
    )}
  </motion.div>
);

type myHTML = string | ReactNode;
interface HeadingProps {
  title: myHTML;
  key: string;
  subHeading?: myHTML;
  tag?: myHTML;
}

const Heading = (props: HeadingProps) => (
  <motion.div key={props.key} className="custom-heading">
    <motion.h2
      initial={{ y: 10, opacity: 0 }}
      viewport={{once:true}}
      transition={{ delay: 0.5, ease: "easeOut" }}
      whileInView={{ y: 0, opacity: 1 }}
    >
      {" "}
      {props.title}{" "}
    </motion.h2>
    <motion.p
      className="sub-heading"
      initial={{ y: 20, opacity: 0 }}
      viewport={{once:true}}
      transition={{ delay: 1, ease: "easeOut" }}
      whileInView={{ y: 0, opacity: 1 }}
    >
      {" "}
      {props.subHeading || ""}{" "}
    </motion.p>
    <motion.p
      className="tag"
      initial={{ y: 20, opacity: 0 }}
      viewport={{once:true}}
      transition={{ delay: 1.5, ease: "easeOut" }}
      whileInView={{ y: 0, opacity: 1 }}
    >
      {props.tag || ""}
    </motion.p>
  </motion.div>
);

const Footer = () => (
  <footer id="footer" data-scroll-section>
    <Heading
      key="footer head"
      title={
        <span>
          <motion.span
            initial={{ y: -10, opacity: 0 }}
            viewport={{once:true}}
            transition={{ delay: 1.4, ease: "easeOut" }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            Tell us About your Project{" "}
          </motion.span>
          <motion.span
            className="_block"
            initial={{ y: -10, opacity: 0 }}
            viewport={{once:true}}
            transition={{ delay: 1.5, ease: "easeOut" }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            Say Hello
          </motion.span>{" "}
        </span>
      }
    />

    <div className="socials">
        <a href='' className="social-link"><FaTwitter /></a>
        <a href='' className="social-link"><FaFacebook /></a>
        <a href='' className="social-link"><FaInstagram /></a>
        <a href='' className="social-link"><FaBehance /></a>
    </div>

    <div className="copyright">
        <span className="cc">&copy;</span>
        <span className="yr">2022</span>
        <a href="">Privacy Policy</a>
        <span> . </span>
        <a href="">Site Credits</a>
    </div>
  </footer>
);

const Home = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      let scroll = new LocomotiveScroll({
        el: ref.current,
        smooth: true,
        multiplier: 0.2,
        inertia: 0.3,
        mobile: {
          inertia: 0.3,
          breakpoint: 0,
        },
        tablet: {
          inertia: 0.3,
          breakpoint: 0,
        },
        // direction:'horizontal'
      });
      scroll.destroy();

      window.addEventListener("load", () => {
        console.log("INIT");
        scroll.init();
      });
    }
  }, [ref]);
  return (
    <main ref={ref} id="home">
      {/* <div data-scroll-section> */}
      <Header />
      <Hero />

      <div className="img-show-case" data-scroll-section>
        <CustomImage src={IMAGE} key="key1" />
        <CustomImage src={IMAGE} key="key2" />
      </div>

      <div data-scroll-section>
        <Heading
          key="key3"
          title="Timeless Courture Interior Creation"
          subHeading={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum?"
          }
          tag="Our Enterprise"
        />
      </div>

      <div className="enterprise" data-scroll-section>
        <div className="img-show-case">
          <CustomImage
            src={IMAGE}
            key="key4"
            details={{
              title: "Project Name",
              link: "",
            }}
          />
          <CustomImage
            src={IMAGE}
            key="key6"
            details={{
              title: "Project Name",
              link: "",
            }}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Home;
