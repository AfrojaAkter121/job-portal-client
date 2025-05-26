import React from 'react';
import { motion } from "motion/react"

const Header = () => {
    return (
       <div className='flex items-center max-w-6xl mx-auto'>
         <div
         className='flex-1'>
            <motion.h1
            
            animate={{
                 color: ['#ebdef0', '#ee9ca7', '#abebc6', '#f9e79f', '#85c1e9', '#7dcea0'],
                 transition:{duration: 3, repeat: Infinity}

                }}
            transition={{duration:2}}
            className='text-5xl'>Find Jobs,<br/>
            Hire Creatives</motion.h1>
            <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration: 6 }}
             className='mt-8 text-lg'>Each month, more than 3 million job seekers turn to <br/> website in their search for work, making over 140,000 <br/> applications every single day
            </motion.p>

            <div className='flex mt-5 gap-4 items-center'>
                <button className='btn-grad'>Get Started</button>
                <button className='border-2 border-[#ee9ca7] px-4 py-2 rounded-xl'>Learn More</button>
            </div>
        </div>
        <div className='flex-1 mt-0'>
                <motion.img
                animate={{y: [30, 80, 30 ]}}
                transition={{duration: 5,  repeat: Infinity}}
                 className='max-w-sm rounded-t-[40px] rounded-br-[40px] rounded-tl-[40px] border-s-8 border-b-8 shadow-3xl object-cover' src="https://i.ibb.co/z1Mcybc/side-view-friends-winning-videogame.jpg" alt="" />
                <motion.img
                animate={{x: [100, 150, 100 ]}}
                transition={{duration: 5, repeat: Infinity}}
                className='w-96 h-52 rounded-t-[40px] rounded-br-[40px] rounded-tl-[40px] border-s-8 border-b-8 shadow-3xl object-cover' src="https://i.ibb.co/Mxmqyq75/team-working-animation-project.jpg" alt="" />
        </div>
       </div>
    );
};

export default Header;