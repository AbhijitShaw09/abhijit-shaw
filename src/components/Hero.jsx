import { styles } from '../styles'
import { useEffect, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";

import './style.css';
import { Me_about } from '../assets';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Competitive Programmer', 'Problem Solver'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto xl:flex-row flex-col flex`}>
        <div className="xl:w-2/3 flex gap-5 items-start">
          {/* Ball Line */}
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Abhijit</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>A computer science undergraduate</p>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}><span className='text-[#915eff]'>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor='#fff'
            />
            </p>
            <button className="resume-btn mt-20 mb-10 bg-transparent hover:bg-[#915eff] text-[#c1abef] font-semibold py-3 px-5 rounded-xl inline-flex items-center hover:text-white border">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
              <a href="https://drive.google.com/file/d/1G7SPErT_WSRl9YoNlTAyMw5VwHv9sBR3/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
            </button>
            <div className="home-sci">
              <a href="https://www.facebook.com/abhijit.shaw.5454" target='_blank'><i className='bx bxl-facebook'></i></a>
              <a href="https://www.instagram.com/_abhijit.shaw_/" target='_blank'><i className='bx bxl-instagram'></i></a>
              <a href="https://www.linkedin.com/in/abhijit-shaw-13583a203/" target='_blank'><i className='bx bxl-linkedin' target='_blank'></i></a>
              <a href="https://github.com/AbhijitShaw09" target='_blank'><i className='bx bxl-github' ></i></a>
            </div>
          </div>
        </div>

        <div className='ml-20 my-20 lg:ml-30 xl:ml-0 xl:my-0 w-3/5 md:w-2/5 lg:w-1/3 lg:flex-row flex banner-image justify-center items-center '>
          <img src={`${Me_about}`} alt="me" />
          <span className='circle-spin'></span>
        </div>
      </div>
    </section>
  )
}

export default Hero