import React, { useRef, useState, Suspense } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight, faHandsBubbles } from '@fortawesome/free-solid-svg-icons';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

import { Model } from '../assets/3dmodels/Scene';
import Loader from '../components/Loader';

import enos1purple from "../assets/images/01_normal.jpg";
import enos2purple from "../assets/images/02_normal.jpg";
import enos3purple from "../assets/images/05_normal.jpg";
import enos4purple from "../assets/images/03_normal.jpg";
import enos5purple from "../assets/images/04_normal.jpg";
import enos6purple from "../assets/images/06_normal.jpg";
import enos7purple from "../assets/images/07_normal.jpg";
import enos8purple from "../assets/images/08_normal.jpg";
import enos9purple from "../assets/images/09_normal.jpg";

const PaginationDot = (props) => {

    return(
        <>
            <div className={`w-[8px] h-[8px] transition-all rounded-full ${props.active === props.count ? "bg-purple-900" : "bg-gray-500"} hover:opacity-50 active:opacity-25 cursor-pointer select-none`} onClick={() => {
                props.setActive(props.count)
            }}></div>
        </>
    )
}

function About() {
    const [ active, setActive ] = useState(1);
    const [ loading, setLoading ] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

    }

  return (
    <>
        <div className='w-full h-screen flex pt-[60px] overflow-hidden'>
            <div className='w-[40%] h-full bg-white flex flex-col '>
                <div className='w-full h-1/2 flex flex-col items-center justify-center'>
                    <div className='w-full h-[88%] transition-all rounded flex  select-none'>
                            <div className={`group ${active === 3 ? "rounded-r" : ""} relative ${active === 1 ? "translate-x-0 " : ""} min-w-full h-full bg-purple-950 transition-all flex`}>
                                <img src={enos6purple} className='w-1/3 opacity-50 h-full object-cover' alt='Enos Face Gray'/>
                                <img src={enos1purple} className='w-1/3 opacity-50 h-full object-cover' alt='Enos Face normal'/>
                                <img src={enos8purple} className='w-1/3 opacity-50 h-full rounded-r object-cover' alt='Enos Face Purple'/>
                            </div>
                            <div className={`group ${active === 3 ? "rounded-r" : ""} relative ${active === 1 ? "translate-x-0" : "-translate-x-[100%]"} min-w-full h-full transition-all bg-purple-900 flex`}>
                                <img src={enos4purple} className={`w-1/3 opacity-50 h-full object-cover`} alt='Enos Face Gray'/>
                                <img src={enos5purple} className='w-1/3 opacity-50 h-full object-cover' alt='Enos Face normal'/>
                                <img src={enos3purple} className={`w-1/3 ${active === 3 ? "rounded-r" : ""} opacity-50 h-full object-cover`} alt='Enos Face Purple'/>
                            </div>  
                            <div className={`group relative rounded-r ${active === 1 ? "translate-x-0" : active === 2 ?  "-translate-x-[100%]" : "-translate-x-[200%]"} min-w-full h-full transition-all bg-purple-900 flex`}>
                                <img src={enos7purple} className='w-1/3 opacity-50 h-full object-cover' alt='Enos Face Gray'/>
                                <img src={enos9purple} className='w-1/3 opacity-50 h-full object-cover' alt='Enos Face normal'/>
                                <img src={enos2purple} className={`w-1/3 opacity-50 h-full rounded-r object-cover`} alt='Enos Face Purple'/>
                            </div>    
                    </div>
                    <div className='w-[85%] h-[12%] flex items-center justify-center'>
                        <div className='w-[55%] h-full flex items-center justify-between'>
                            <div className='w-[15%] h-full flex items-center justify-center'>
                                <div className='min-w-[37px] max-w-[37px] h-[37px] border rounded-full bg-white shadow cursor-pointer hover:opacity-50 active:opacity-25 flex items-center justify-center' onClick={() => {
                                    if(active === imageCount.length || active > 1){
                                        setActive(active - 1)
                                    } else if(active === 1){
                                        setActive(imageCount.length)
                                    }
                                }}>
                                    <FontAwesomeIcon icon={faChevronLeft} size="md"/>
                                </div>
                            </div>
                            <div className='w-[50%] h-full flex items-center justify-center gap-1'>
                            {imageCount.map((dot, index) => (
                                <PaginationDot 
                                    key={dot.count}
                                    index={index}
                                    active={active}
                                    setActive={setActive}
                                    {...dot}
                                />
                            ))}
                            </div>
                            <div className='w-[15%] h-full flex items-center justify-center'>
                                <div className='min-w-[37px] max-w-[37px] h-[37px] border rounded-full bg-white shadow cursor-pointer hover:opacity-50 active:opacity-25 flex items-center justify-center' onClick={() => {
                                    if(active === 1 || active < imageCount.length){
                                        setActive(active + 1)
                                    } else if(active === imageCount.length) {
                                        setActive(1)
                                    }
                                }}>
                                    <FontAwesomeIcon icon={faChevronRight} size="md"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative w-full h-1/2 bg-white flex items-center justify-center'>
                    <div className='w-[85%] h-[70%] rounded shadow border'>
                        <div className='w-full h-[20%] border-b flex select-none items-center justify-center uppercase font-bold text-[20px]'>
                            Contact me
                        </div>
                        <div className='w-full h-[80%] select-none'>
                                <form 
                                    ref={formRef}
                                    className='w-full h-full'
                                    onSubmit={handleSubmit}
                                >
                                    <div className='w-full h-[30%] flex items-center justify-evenly'>
                                        <input 
                                            type="text"
                                            className="w-[35%] h-[60%] p-3 rounded-xl border  font-merri text-[14px] outline-none shadow"
                                            placeholder='Your Name' 
                                        />
                                        <input 
                                            type="email"
                                            className="w-[35%] p-3 h-[60%] rounded-xl border font-merri text-[14px] outline-none shadow" 
                                            placeholder='Your Email'
                                        />
                                    </div>
                                    <div className='w-full h-[45%] flex items-center justify-center'>
                                        <textarea 
                                            className='w-[80%] h-[95%] resize-none shadow rounded-xl outline-none p-3 font-merri text-[14px] border'
                                            placeholder='Your Message'
                                        />
                                    </div>
                                    <div className='w-full h-[25%] flex items-center justify-center'>
                                        <input 
                                            className='w-[40%] h-[80%] rounded-xl border shadow text-white uppercase select-none font-bold text-lg bg-black hover:opacity-50 active:opacity-25 cursor-pointer flex items-center justify-center' 
                                            value={`${loading ? "Sending..." : "Send"}`}
                                            type="submit"
                                        />
                                    </div>
                                </form>
                        </div>
                    </div>
                    <div className='absolute bottom-0 w-full h-[50px] flex items-center justify-center'>
                        <div className='w-[55%] h-full flex items-center justify-between select-none'>
                            <a href='https://www.google.com' target="_blank" className='hover:opacity-50 active:opacity-25 uppercase font-light text-[12px] select-none cursor-pointer'>visit portfolio</a>
                            <span className='hover:opacity-50 active:opacity-25 uppercase font-light text-[12px] select-none cursor-pointer'><Link>subscribe to newsletter</Link></span>
                        </div>
                    </div> 
                </div>
            </div>
            <div className='relative w-[60%] h-full flex flex-col items-start justify-center'>
                <div className={`absolute w-[33%] group z-20 cursor-ew-resize rounded-l bg-black top-0 right-0 h-[340.56px] transition-all ${active === 1 || active === 2 ? "translate-x-[100%]" : ""}`}>
                    <div className='select-none absolute w-full h-[10%] top-0 flex items-center justify-center'>
                        <div className='w-[80%] text-[10px] text-center text-gray-400 p-1 italic font-thin flex items-center justify-center gap-2'>
                            <span className='group-hover:animate-bounce group-hover:font-bold transition-all'>Shell is Draggable</span>
                            <FontAwesomeIcon icon={faHandsBubbles} size="lg" />
                        </div>
                    </div>
                    <Canvas camera={{position: [5, 1, 6] ,fov: 1}}>
                        <ambientLight intensity={1.25}/>
                            <Suspense fallback={Loader}>
                                <Model/>
                            </Suspense>
                        <OrbitControls 
                            enableZoom={false}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={Math.PI / 2}    
                        />
                    </Canvas>
                    <div className='select-none w-full h-[20%] absolute bottom-0 flex items-center justify-center'>
                        <div className='w-[90%] text-[12px] text-center text-gray-400 font-bold p-3'>
                            We should be like snails, they are home wherever they go. 
                        </div>
                    </div>
                </div>
                <div className='w-full h-[45%] px-20 pt-14 text-black select-none'>
                    <h1 className={`font-extrabold ${active === 1 ? "text-white" : active === 2 ? "text-white" : "text-black"} transition-all drop-shadow-2xl font-arch uppercase text-[130px]`}>who is</h1>
                    <h1 className={`font-extrabold font-arch uppercase text-[130px] -mt-8`}>enos</h1>
                </div>
                <div className='w-full h-[30%] px-20 pt-20 select-none text-justify flex items-center -mt-10 font-semibold text-[20px]'>
                    <p className='text-black'>Enos is passionate about self-prioritization and exploration of co-existence in modern society. Thriving in software development, he's equally devoted to writing, emotional intelligence, and fostering peaceful cohabitation. Enos seeks to inspire a whollistic approach to self-acceptance and empathy in todays fast-paced society.</p>
                </div>
                <div className='w-full h-[5%] px-20 pt-5 text-black font-thin select-none text-[17px]'>
                    <span>Enos is curious and always full of thought.</span>
                </div>
                <div className='absolute bottom-0 w-full h-[50px] flex items-center justify-between pl-20 pr-20'>
                    <div className='text-white text-[20px] font-bold flex items-center'>
                        
                    </div>
                    <div className='text-black flex gap-2 select-none'>
                        <a className='hover:opacity-50 active:opacity-25 cursor-pointer select-none' href='https://www.google.com' target="_blank"><FontAwesomeIcon icon={faMedium} size="xl"/></a>
                        <a className='hover:opacity-50 active:opacity-25 cursor-pointer select-none' href='https://www.google.com' target="_blank"><FontAwesomeIcon icon={faInstagram} size="xl"/></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About;

const imageCount = [
    {
        count: 1,
    },
    {
        count: 2,
    },
    {
        count: 3,
    },
]
