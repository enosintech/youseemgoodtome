import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import  Lottie  from "lottie-react";

import { selectScrollTop, setScrollTop } from "../../slices/navSlice";

import heroVideo from "../assets/videos/heroVideo.mp4";
import avatar from  "../assets/animations/avatar.json";
import established from "../assets/animations/established.json";

import berry1 from "../assets/images/berry1.jpg";
import berry2 from "../assets/images/berry2.jpg";
import berry3 from "../assets/images/berry3.jpg";
import berry4 from "../assets/images/berry4.jpg";

function HomeScreen() {

  const dispatch = useDispatch()
  const paraRef = useRef(null);
  const [ active, setActive ] = useState(1);
  const [ page, setPage ] = useState(1);
  const [ shadow, setShadow ] = useState(0);
  const [ quote, setQuote ] = useState("waves come and go");
  const [ mood, setMode ] = useState(null);
  const [ checkInVisible, setCheckInVisible ] = useState(false);
  const [ adjectiveWord, setAdjectiveWord ] = useState("Efficient");

  const about = ("is a brand focused on self acceptance. With ambitions to become a movement of profound significance, You seem good to me is more than just a name. We aim to encourage individuals to break free from the chains of self criticism and live authentically. To live in a world where kindness towards onself is as celebrated as kindness towards others. Our ultimate goal is simple, live with empathy especially towards oneself. With you seem good to me you get to be who you are, just as who you are.")
  const singlePageHeight = window.innerHeight;
  const twoPageHeight = window.innerHeight * 2;
  const year = new Date().getFullYear();
  const cube = document.querySelector(".cube");
  const scrollTop = useSelector(selectScrollTop);

  const handleScroll = () => {
    if(paraRef.current){
      dispatch(setScrollTop(paraRef.current.current))
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setAdjectiveWord(adjectives[Math.floor(Math.random() * adjectives.length) + 1]?.adjective)
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if(scrollTop > 1200){
      setShadow(shadow + 1)
      if(scrollTop > 1515){
        setShadow(0)
      }
    }
  }, [scrollTop])

  useEffect(() => {
    const container = document.querySelector(".parallaxContainer")
    container.addEventListener("scroll", handleScroll)
    return () => {
      container.removeEventListener("scroll", handleScroll)
    }
  }, [])  

  return (
          <Parallax
            pages={4}
            ref={paraRef}
            className="parallaxContainer"
          >
            <ParallaxLayer
              offset={0}
              factor={4}
              style={{
                background: "linear-gradient(rgba(59, 7, 100, 0.6) 29%, black 30% 73%, white 75%)"
              }}
            />

            <ParallaxLayer
              offset={0}
            >
              <div className={`w-full h-full 2xl:h-auto bg-themePurple`}>
                <video loop muted autoPlay className={`w-full 2xl:h-auto h-full object-cover transition-all duration-300 opacity-40`}>
                  <source src={heroVideo} type="video/mp4"/>
                  Video Format Not supported
                </video>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={0}
              speed={1}
              style={{
                zIndex : 9999
              }}
            >
            <div className={`pt-[60px] relative w-full h-full flex items-center justify-center`}>
              <div className={`relative transition-all duration-200 group text-center min-w-[375px] w-fit select-none hoverContainer`} onMouseEnter={() => {
                setQuote(quoteData[Math.floor(Math.random() * quoteData.length) + 1].quote)
              }}>
                <div className="absolute left-0 text-white font-arch font-[900] w-full uppercase right-0 mx-auto block transition-all duration-200 ease-linear text-center drop-shadow-2xl upper">hover me</div>
                <div className="absolute left-0 text-white font-arch font-[900] w-full uppercase right-0 mx-auto block transition-all duration-200 ease-linear text-center drop-shadow-2xl lower">hover me</div>
                <div className="absolute left-0 uppercase w-full font-merri font-[800] text-themePurple block text-center transition-all duration-200 ease-linear opacity-0 group-hover:opacity-100 group-hover:scale-150 drop-shadow-2x inside">{quote}</div>
              </div>
            </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={0}
              speed={2.2}
            >
              <div className={`uppercase w-full font-thin font-lex text-white flex flex-col items-center gap-1 justify-center absolute -bottom-5`}>
                <div className={`w-[10%]  h-[100px] ${scrollTop  === 0  ? "opacity-0" :  "opacity-100"} transition-all duration-100 ease-linear`}>
                  <Lottie 
                    className={`w-full h-full`}
                    animationData={established}
                  />
                </div>
                <span>established {year}</span>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={1}
              speed={0.5}
            >
              <div className="w-full h-full flex">
                <div className={`w-1/2 h-full flex flex-col items-center justify-center`}>
                  <Lottie 
                    className="w-[80%] h-[80%]"
                    animationData={avatar}
                  />
                  <div className={`w-[80%] h-[20%] flex items-center uppercase text-white font-arch font-bold justify-center`}>
                    We are always changing shape
                  </div>
                </div>
                <div className={`w-1/2 h-full`}>

                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={1}
              speed={1.2}
            >
              <div className={`w-full h-full flex`}>
                <div className="w-1/2 h-full">

                </div>
                <div className={`w-1/2 h-full flex flex-col items-center justify-center gap-20`}>
                  <div className={`w-[80%] h-[33%] flex flex-col gap-10`}>
                    <div className={`w-full h-full text-[50px] font-extrabold font-arch text-white text-center uppercase`}>
                      you are an infinity of feelings. You aren't always going to be your most <span className="flicker transition-none">{adjectiveWord}</span> 
                    </div>
                  </div>
                  <div className={`w-[80%] h-[30%] flex items-center justify-center px-5`}>
                    <h1 className={`text-[35px] uppercase font-normal text-center font-lex text-[#1e0546]`}>some days you are too slow Some days your head hurts Some days you are far too much for yourself to bear</h1>
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            
            <ParallaxLayer
              offset={2}
              speed={1.8}
              style={{
                width: "25%",
                height: 800,
                zIndex: 2,
              }}
            >
              <div className={`w-full h-full flex items-center justify-end`}>
                <div className={`w-[85%] h-[85%]`}>
                  <div className={`w-full h-full bg-themePurple`}>
                    <img 
                      className={`w-full h-full object-cover opacity-60`}
                      src={berry1}
                    />
                  </div>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={2}
              speed={-5.5}
              factor={2}
              style={{
                width: "25%",
                left: "25%",
                height: 800,
                zIndex: 2
              }}
            >
              <div className={`w-full h-full flex items-center justify-end`}>
                <div className={`w-full h-[85%]`}>
                  <div className={`w-full h-full bg-themePurple`}>
                    <img 
                      className={`w-full h-full object-cover opacity-60`}
                      src={berry2}
                    />
                  </div>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={2}
              speed={1.8}
              style={{
                width: "25%",
                left: "50%",
                height: 800,
                zIndex: 2
              }}
            >
              <div className={`w-full h-full flex items-center justify-end`}>
                <div className={`w-full h-[85%]`}>
                  <div className={`w-full h-full bg-themePurple`}>
                    <img 
                      className={`w-full h-full object-cover opacity-60`}
                      src={berry3}
                    />
                  </div>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={2}
              speed={-5.5}
              factor={2}
              style={{
                width: "25%",
                left: "75%",
                height: 800,
                zIndex: 2
              }}
            >
              <div className={`w-full h-full flex items-center justify-start`}>
                <div className={`w-[85%] h-[85%]`}>
                  <div className={`w-full h-full bg-themePurple`}>
                    <img 
                      className={`w-full h-full object-cover opacity-60`}
                      src={berry4}
                    />
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={2}
              speed={0.2}
              style={{
                zIndex: 1
              }}
            >
              <div className={`w-full h-full transition-all duration-200 flex flex-col pb-20 items-center justify-end text-white`}>
                <div className={`transition-all relative duration-200 ease-linear w-full h-[60%] flex items-center justify-center uppercase font-arch font-extrabold text-[120px] text-[#1e0546]`}>
                  <div className={`w-[80%] h-[80%] ${scrollTop >= 1515 ? "opacity-0" : "opacity-100"} transition-all duration-200 ease-linear flex items-center pl-8`}>
                    <div className={`w-70%`}>it comes and </div>
                    <div className={`ml-3 relative w-fit flex items-center`}>
                      <span className={`absolute z-50`}>goes</span>
                      <span className={`absolute translate-x-3 text-white z-40`}
                        style={{
                          textShadow: `${shadow}px 0px 0px white, ${shadow + 1}px 0px 0px white, ${shadow + 2}px 0px 0px white, ${shadow + 3}px 0px 0px white, ${shadow + 4}px 0px 0px white,  ${shadow + 5}px 0px 0px white, ${shadow + 6}px 0px 0px white, ${shadow + 7}px 0px 0px white, ${shadow + 8}px 0px 0px white`
                        }}
                      >goes</span>
                    </div>
                  </div>
                </div>
                <div className={`transition-all duration-200 ${scrollTop >= 1800 ? "opacity-100" : "opacity-0"} ease-linear w-full h-[30%] flex items-center justify-center uppercase font-extrabold font-arch text-[50px]`}>
                  same face. different day. different feelings
                </div>
                <div className={`transition-all duration-200 ${scrollTop >= 1785 ? "opacity-100" : "opacity-0"} ease-linear w-full h-[10%] flex items-start justify-center uppercase font-thin font-arch`}>
                  and thats okay
                </div>
              </div>
            </ParallaxLayer>
        
            <ParallaxLayer
              offset={3}
            >
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className={`absolute w-full h-[8%] flex items-center justify-center bottom-0 z-50`}>
                  <div className={`w-[40%] h-full flex items-center justify-between`}>
                    <div className={`w-[10%] h-full flex items-center  justify-center`}>
                      <div className={`min-w-[40px] max-w-[40px] w-[40px] min-h-[40px] max-h-[40px] h-[40px] rounded-full border shadow bg-slate-50 flex items-center justify-center cursor-pointer select-none hover:opacity-50  active:opacity-25`} onClick={() => {
                        if(active === 3 || active > 1){
                          setActive(active - 1)
                        } else if(active === 1){
                          setActive(3)
                        }
                      }}>  
                        <FontAwesomeIcon icon={faChevronLeft} size="lg"/>
                      </div>
                    </div>
                    <div className={`w-[50%] h-full flex items-center justify-evenly`}>
                      <span className={`uppercase ${active === 1 ? "font-bold scale-110" : "font-extralight"} transition-all duration-150 ease-linear cursor-pointer select-none hover:opacity-50 active:opacity-25`} onClick={() => {
                        setActive(1);
                      }}>home</span>
                      <span className={`uppercase ${active === 2 ? "font-bold scale-110" : "font-extralight"} transition-all duration-150 ease-linear cursor-pointer select-none hover:opacity-50 active:opacity-25`} onClick={() => {
                        setActive(2);
                      }}>explore</span>
                      <span className={`uppercase ${active === 3 ? "font-bold scale-110" : "font-extralight"} transition-all duration-150 ease-linear cursor-pointer select-none hover:opacity-50 active:opacity-25`} onClick={() => {
                        setActive(3);
                      }}>about</span>
                    </div>
                    <div className={`w-[10%] h-full flex items-center  justify-center`}>
                      <div className={`min-w-[40px] max-w-[40px] w-[40px] min-h-[40px] max-h-[40px] h-[40px] rounded-full border shadow bg-slate-50 flex items-center justify-center cursor-pointer select-none hover:opacity-50  active:opacity-25`} onClick={() => {
                        if(active === 1 || active < 3){
                          setActive(active + 1)
                        } else if(active === 3){
                          setActive(1)
                        }
                      }}>  
                        <FontAwesomeIcon icon={faChevronRight} size="lg"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${active === 1 ? "translate-x-0" : "-translate-x-[100%]"} pt-[60px] transition-all duration-500 flex items-center justify-center absolute min-w-full h-full w-full bg-white`}>
                    <div className={`absolute z-10 bottom-20 w-[200px] h-[45px] bg-themePurple rounded-2xl flex items-center justify-center uppercase font-extrabold text-white cursor-pointer hover:opacity-50 active:opacity-25 select-none glow`} onClick={() => {
                      setCheckInVisible(!checkInVisible)
                    }}>
                      check in
                    </div>
                    <div className={`${checkInVisible === false ? "hidden" : "flex"} absolute z-20 left-0 right-0 bottom-0 top-0 backdrop-blur-xl items-center justify-center`}>
                      <div className="relative w-[55%] h-[70%] bg-white shadow border-[0.25px] rounded-xl">
                        <div className="absolute top-0 right-0 h-[20px] w-[20px] bg-themePurple rounded-xl" onClick={() => {
                          setCheckInVisible(!checkInVisible)
                        }}>

                        </div>
                      </div>
                    </div>
                    <div className={`w-full h-full flex flex-col`}>
                      <div className={`w-full h-[80%] flex items-center justify-center`}>
                          <div className={`w-[80%] h-full flex items-center justify-center shadow rounded-lg border-[0.25px]`}>
                            <div className={`cube cursor-pointer select-none`} onClick={() => {
                              if(cube){
                                cube.classList.add("cubeAnimate")
                              }
                            }}>
                              <div className="side front">
                                <div className="text-white uppercase h-full w-full px-2 flex items-center justify-center text-center font-extrabold font-arch text-[60px]">
                                  it may be hard to tell but
                                </div>
                              </div>
                              <div className="side back">
                                <div className="text-themePurple uppercase h-full w-full flex items-center justify-center text-center font-extrabold font-arch text-[100px]">
                                  you
                                </div>
                              </div>
                              <div className="side left">
                                <div className="text-themePurple uppercase h-full w-full flex items-center justify-center text-center font-extrabold font-arch text-[100px]">
                                  are
                                </div>
                              </div>
                              <div className="side right">
                                <div className="text-themePurple uppercase h-full w-full flex items-center justify-center text-center font-extrabold font-arch text-[100px]">
                                  doing
                                </div>
                              </div>
                              <div className="side top">
                                <div className="text-themePurple uppercase h-full w-full flex items-center justify-center text-center font-extrabold font-arch text-[100px]">
                                  fine
                                </div>
                              </div>
                              <div className="side bottom">
                                <div className="text-themePurple uppercase h-full w-full flex items-center justify-center text-center font-extrabold font-arch text-[100px]">
                                  just
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
                <div className={`${active === 1 ? "translate-x-[100%]" : active === 2 ? "translate-x-0" : ""} pt-[60px] transition-all duration-500 flex items-start justify-end absolute min-w-full h-full w-full bg-white`}>
                  <div className="w-[91%] h-[92%] grid grid-cols-2 grid-rows-2">
                    <div className="row-start-1 row-end-3 flex flex-col">
                        <div className="w-full h-[30%] flex items-center text-center justify-center text-themePurple font-bold font-pac text-[30px]">
                            Self Improvement takes forever. Accept yourself first. Accept yourself today
                        </div>
                        <div className="w-full h-[70%] flex items-center justify-center">
                            <div className="w-[90%] h-[90%] bg-white rounded-xl shadow border-[0.25px]">

                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-[90%] h-[90%] shadow rounded-xl border-[0.25px]">

                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-[90%] h-[90%] flex justify-between">
                            <div className="h-full w-[45%] shadow rounded-xl border-[0.25px]">

                            </div>
                            <div className="h-full w-[45%] shadow rounded-xl border-[0.25px]">

                            </div>
                        </div>   
                    </div>
                  </div>
                </div>
                <div className={`${active === 1 ? "translate-x-[200%]" : active === 2 ? "translate-x-[100%]" : active === 3 ? "translate-x-0" : ""} bg-white pt-[60px] transition-all duration-500 flex items-center justify-end absolute  min-w-full h-full w-full`}>
                  <div className={`h-full w-[91%] grid grid-cols-2 grid-rows-2`}>
                      <div className="row-start-1 row-end-2 flex items-center justify-center">
                          <Lottie
                            className={`w-[65%] h-[60%]`} 
                            animationData={established}
                          />
                      </div>      
                      <div className={`flex items-start justify-start pl-44`}>
                        <div className="perspective-text">
                            <div className="perspective-line">
                              <p></p>
                              <p>it</p>
                            </div>
                            <div className="perspective-line">
                              <p>it</p>
                              <p>comes</p>
                            </div>
                            <div className="perspective-line">
                              <p>comes</p>
                              <p>and</p>
                            </div>
                            <div className="perspective-line">
                              <p>and</p>
                              <p>goes</p>
                            </div>
                            <div className="perspective-line">
                              <p>goes</p>
                            </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center row-start-1 row-end-3 col-start-2">
                            <p className="w-[80%] h-[90%] flex items-center justify-center text-justify font-light text-[25px]"><div><span className="text-purple-950 font-normal">You seem good to me </span>{about}</div></p>
                      </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>
            
            <ParallaxLayer
              offset={3}
              speed={1.8}
              style={{
                width: 150,
                height: 100,
                top: 350
              }}
            >
              <div className={`select-none hover:opacity-50 hover:scale-125 active:opacity-25 transition-all duration-150 ease-linear cursor-pointer w-full h-full py-2 flex flex-col`}>
                <div className={`w-full h-[60%] flex items-center justify-center text-[50px]`}>
                    {mood ? mood : "- -"}
                </div>
                <div className={`w-full h-[20%] flex items-center justify-center uppercase text-[10px] font-extralight`}>
                  {mood ? mood : "Please Check In"}
                </div>
                <div className={`w-full h-[20%] flex items-center justify-center uppercase font-bold text-[12px]`}>
                  your mood
                </div>
              </div>
            </ParallaxLayer>

              <ParallaxLayer
                sticky={{
                  start: 0, end: 2.1
                }}
                style={{
                  top: 735,
                  height:"10%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className={`${scrollTop > twoPageHeight ? "border-black" : "border-white"} cursor-pointer transition-all duration-200 ease-linear w-[30px] h-[60px] flex items-start justify-center rounded-full border-[5px]`} onClick={() => {
                  if( scrollTop < singlePageHeight){
                    setPage(1)
                  } else if  (scrollTop >= singlePageHeight && scrollTop < singlePageHeight * 2){
                    setPage(2)
                  } else if  (scrollTop >= singlePageHeight * 2 && scrollTop < singlePageHeight * 3){
                    setPage(3)
                  } else if  (scrollTop > singlePageHeight * 3 && scrollTop < singlePageHeight * 4){
                    setPage(0)
                  } 
                  paraRef.current.scrollTo(page)
                }}>
                  <div className={`w-[15px] h-[15px] ${scrollTop > twoPageHeight ? "bg-black" : "bg-white"} animate-bouncer rounded-full`}></div>
                </div>
              </ParallaxLayer>            
          </Parallax> 
  )
}

export default HomeScreen;

const quoteData = [
  {
  quote: "you can't always give your best"
  },
  {
    quote: "you seem good to me!"
  },
  {
    quote: "take a  breather"
  },
  {
    quote: "one day at a time"
  },
  {
    quote: "you are further than yesterday"
  },
  {
    quote: "one day at a time"
  },
  {
    quote: "you are doing the best you can"
  },
  {
    quote: "it isn't our job to control things"
  },
  {
    quote: "just walk through it"
  },
  {
    quote: "leave the window open"
  },
  {
    quote: "be present"
  },
  {
    quote: "stop looking so hard"
  },
  {
    quote: "waves come and go"
  },
  {
    quote: "you're alright actually"
  },
  {
    quote: "there's a vision"
  },
  {
    quote: "love ahead"
  },
  {
    quote: "you don't end here"
  },
  {
    quote: "rest"
  },
  {
    quote: "remember to be you"
  },
  {
    quote: "check on yourself"
  },
  {
    quote: "you're okay"
  },
  {
    quote: "you  have skin"
  },
  {
    quote: "you can"
  },
  {
    quote: "it's okay if you can't"
  },
  {
    quote: "maybe one day"
  },
  {
    quote: "hey look you're okay"
  },
  {
    quote: "i'm digital but you look amazing"
  },
  {
    quote: "nice everything"
  },
  {
    quote: "you're gorgeous I think"
  },
  {
    quote: "nice eyes glad you can see this"
  },
  {
    quote: "you make everyone proud"
  },
  {
    quote: "the stars are  waiting for you"
  },
  {
    quote: "go to therapy"
  },
  {
    quote: "say good morning"
  },
  {
    quote: "have fun"
  },
  {
    quote: "believe in yourself"
  },
  {
    quote: "quit freaking out"
  },
  {
    quote: "you're gonna be here anyway"
  },
  {
    quote: "you're on your way"
  }
]

const adjectives = [
  {
    adjective: "Productive"
  },
  {
    adjective: "Motivated"
  },
  {
    adjective: "Ready"
  },
  {
    adjective: "in Sync"
  },
  {
    adjective: "Effective"
  },
  {
    adjective: "Efficient"
  },
  {
    adjective: "Stable"
  },
  {
    adjective: "Sane"
  },
]

