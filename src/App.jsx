import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import HomeScreen from "./screens/HomeScreen";
import About from "./screens/About";
import Blog from "./screens/Blog";
import FourOFour from "./screens/FourOFour";
import QuoteRoom from "./screens/QuoteRoom";

import burgerMenu from "./assets/icons/burgerMenu.png";
import burgerMinus from "./assets/icons/burgerMinus.png";
import { selectScrollTop } from "../slices/navSlice";

function App() {
  const location = useLocation();

  const [ active, setActive ] = useState(location.pathname);
  const [ dropdownVisible, setDropdownVisible ] = useState(false);
  const [ burgerVisible, setBurgerVisible ] = useState(false);
  const [ slideMenu, setSlideMenu ] = useState(false);

  const scrollTop = useSelector(selectScrollTop);

  useEffect(() => {
    setActive(location.pathname)
  }, [location])

  const windowHeight = window.innerHeight;
  const threePageHeight = windowHeight * 3 - 125;

return (
    <div className="flex-1">
      <div  className={`fixed h-[60px] z-[100] transition-all ease-linear duration-500 w-full ${location.pathname === "/" ? scrollTop >= windowHeight && scrollTop < threePageHeight ? "bg-black" : scrollTop >= threePageHeight ? "bg-white" : "bg-transparent" : "bg-transparent"} flex items-center justify-between px-5 sm:px-10 lg:px-20 xl:px-32`}>
          <div className={`absolute left-0 right-0 lg:hidden backdrop-blur-lg transition-all ${burgerVisible ? "h-[774px] top-[60px]" : "h-[0px] top-0"}`}>
            <div className={`${location.pathname === "/" ? scrollTop >= windowHeight && scrollTop < threePageHeight ? "bg-black text-white" : scrollTop > threePageHeight ? "bg-white text-black" : "bg-transparent text-white" : "bg-white"} w-full h-[40%] transition-all ease-linear flex-col flex`}>
              <span onClick={() => setBurgerVisible(false)} className={`w-[35%] h-1/3 ${burgerVisible ? "inline opacity-100 delay-300" : "opacity-0 -translate-y-20"} ${active === "/blog" ? "font-bold" : "font-light"} flex items-center px-10 sm:text-[14px] text-[12px] md:text-[16px] uppercase hover:opacity-50 active:opacity-25 transition-all cursor-pointer `}><Link to="/blog">blog</Link></span>
              <span onClick={() => setBurgerVisible(false)} className={`w-[35%] h-1/3 ${burgerVisible ? "inline opacity-100 delay-300 translate-y-0" : "opacity-0 -translate-y-20"} ${active === "/about" ? "font-bold" : "font-light"} flex items-center px-10 uppercase sm:text-[14px] text-[12px] md:text-[16px] transition-all hover:opacity-50 active:opacity-25 cursor-pointer`}><Link to="/about">the founder</Link></span>
              <div className={`relative w-full h-1/3 ${burgerVisible ? "inline opacity-100 delay-300 translate-y-0" : "opacity-0 -translate-y-20"}`}>
                <div onMouseEnter={() => {setSlideMenu(true)}} onMouseLeave={() => {setSlideMenu(false)}} className={`h-full w-[35%] cursor-default flex items-center px-10 uppercase gap-2`}>
                  <span className={`${slideMenu ? `${location.pathname === "/" && scrollTop < windowHeight ? "text-white" : "text-purple-900"} font-bold` : "font-light"} transition-all sm:text-[14px] text-[12px] md:text-[16px]`}>resources</span>
                  <FontAwesomeIcon icon={faChevronRight} size="md"/>
                </div>
                <div onMouseLeave={() => {setSlideMenu(false)}} onMouseEnter={() => {
                  if(slideMenu === false){
                    return;
                  } else {
                    setSlideMenu(true)
                  }
                }} className={`absolute ${slideMenu ? "w-[65%]" : "w-[0%] delay-500"} transition-all  h-[310px] pl-2 lg:pl-0 right-0 bottom-0`}>
                  <div className={` w-full h-[12.5%] transition-all select-none hover:opacity-50 px-3 active:opacity-25 cursor-pointer flex items-center`}>
                    <span className={`uppercase ${slideMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"} transition-all delay-300 font-bold sm:text-[14px] text-[12px] md:text-[16px]`}>on accepting yourself</span>
                  </div>
                  <div className={` w-full h-[12.5%]  transition-all select-none hover:opacity-50 px-3 active:opacity-25 cursor-pointer flex items-center`}>
                    <span className={`uppercase ${slideMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"} transition-all delay-300 font-bold sm:text-[14px] text-[12px] md:text-[16px]`}><Link to="quoteroom">Quote room</Link></span>
                  </div>
                  <div className={` w-full h-[12.5%] transition-all select-none hover:opacity-50 px-3 active:opacity-25 cursor-pointer flex items-center`}>
                    <span className={`uppercase ${slideMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"} transition-all delay-300 font-bold sm:text-[14px] text-[12px] md:text-[16px]`}>this is a resource</span>
                  </div>
                  <div className={` w-full h-[12.5%] transition-all select-none hover:opacity-50 px-3 active:opacity-25 cursor-pointer flex items-center`}>
                    <span className={`uppercase ${slideMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"} transition-all delay-300 font-bold sm:text-[14px] text-[12px] md:text-[16px]`}>this is a resource</span>
                  </div>
                  <div className={` w-full h-[12.5%] transition-all select-none hover:opacity-50 px-3 active:opacity-25 cursor-pointer flex items-center`}>
                    <span className={`uppercase ${slideMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"} transition-all delay-300 font-bold sm:text-[14px] text-[12px] md:text-[16px]`}>this is a resource</span>
                  </div>
                  <div className={` w-full h-[12.5%] transition-all select-none hover:opacity-50 px-3 active:opacity-25 cursor-pointer flex items-center`}>
                    <span className={`uppercase ${slideMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"} transition-all delay-300 font-bold sm:text-[14px] text-[12px] md:text-[16px]`}>this is a resource</span>
                  </div>
                  <div className={` w-full h-[12.5%] transition-all select-none hover:opacity-50 px-3 active:opacity-25 cursor-pointer flex items-center`}>
                    <span className={`uppercase ${slideMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"} transition-all delay-300 font-bold sm:text-[14px] text-[12px] md:text-[16px]`}>this is a resource</span>
                  </div>
                  <div className={` w-full h-[12.5%] transition-all select-none hover:opacity-50 px-3 active:opacity-25 cursor-pointer flex items-center`}>
                    <span className={`uppercase ${slideMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"} transition-all delay-300 font-bold sm:text-[14px] text-[12px] md:text-[16px]`}>this is a resource</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div onClick={() => {
              if(location.pathname !== "/"){
                setDropdownVisible(false)
              }
              setBurgerVisible(false)
          }} className={`uppercase font-extrabold hover:scale-110 transition-all text-purple-900 xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[14px] text-[13px] hover:opacity-50 drop-shadow-2xl active:opacity-25 cursor-pointer select-none ${location.pathname === "/" ? scrollTop > windowHeight && scrollTop < threePageHeight ? "text-white" : scrollTop > threePageHeight ? "text-purple-900" : "text-white" : "text-purple-950"}`}><Link to="/">you seem good to me</Link></div>
          <div className="relative lg:flex h-full items-center justify-evenly hidden lg:w-[38%] xl:w-[30%]">
            <span onClick={() => {
              if(location.pathname !== "/blog"){
                setDropdownVisible(false)
              }
            }} className={`${active === "/blog" ? "font-bold" : "font-light"} uppercase text-[11px] hover:opacity-50 active:opacity-25 cursor-pointer transition-all select-none ${location.pathname === "/" ? scrollTop > windowHeight && scrollTop < threePageHeight ? "text-white" : scrollTop > threePageHeight ? "text-black" : "text-white" : "text-black"}`}><Link to="blog">blog</Link></span>
            <span onClick={() => {
              if(location.pathname !== "/about"){
                setDropdownVisible(false);
              }
            }} className={`${active === "/about" ? "font-bold" : "font-light"} uppercase text-[11px] hover:opacity-50 active:opacity-25 cursor-pointer transition-all select-none ${location.pathname === "/" ? scrollTop > windowHeight && scrollTop < threePageHeight ? "text-white" : scrollTop > threePageHeight ? "text-black" : "text-white" : "text-black"}`}><Link to="about">the founder</Link></span>
            <span className={`relative h-full flex items-center text-[11px] transition-all select-none`}>
              <span className={`cursor-pointer transition-all h-full flex items-center uppercase ${dropdownVisible ? "font-bold text-purple-900" : "font-light"} ${location.pathname === "/" ? scrollTop > windowHeight && scrollTop < threePageHeight ? "text-white" : scrollTop > threePageHeight ? "text-black" : "text-white" : "text-black"}`} onMouseEnter={() => { setDropdownVisible(true)}} onMouseLeave={() => {setDropdownVisible(false)}}>Resources</span>
              <FontAwesomeIcon icon={faChevronDown} size="md" color={`${location.pathname === "/" ? scrollTop > windowHeight && scrollTop < threePageHeight ? "white" : scrollTop > threePageHeight ? "black" : "white" : "black"}`} className="ml-1"/>
              <div onMouseLeave={() => {setDropdownVisible(false)}} onMouseEnter={() => {
                if(dropdownVisible === false){
                  return;
                } else {
                  setDropdownVisible(true)
                }
              }} className={`absolute w-[200px] -right-[70px] top-[60px] ${dropdownVisible ? " h-[300px]" : "h-[0px] border-none delay-500"} flex flex-col transition-all ${location.pathname === "/" ? scrollTop > windowHeight && scrollTop < threePageHeight ? "bg-black text-white" : scrollTop > threePageHeight ? "bg-white shadow text-black border-b-[0.5px]" : "bg-transparent text-white" : "bg-white shadow text-black"}`}>
                <div className={`${location.pathname === "/" ? scrollTop > windowHeight && scrollTop < threePageHeight ? "bg-black" : scrollTop > threePageHeight ? "bg-white border-x-[0.5px] border-gray-300" : "bg-transparent" : "bg-white border-x-[0.5px] border-gray-300"} w-full h-[12.5%] px-2 flex items-center  transition-all cursor-pointer  hover:w-[300px] hover:opacity-50 active:opacity-25`}>
                  <span className={`uppercase font-bold transition-all truncate delay-300 ${dropdownVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>on accepting yourself</span>
                </div>
                <div className={`${location.pathname === "/" ? scrollTop > windowHeight && scrollTop < threePageHeight ? "bg-black" : scrollTop > threePageHeight ? "bg-white border-x-[0.5px] border-gray-300" : "bg-transparent" : "bg-white border-x-[0.5px] border-gray-300"} w-full h-[12.5%] px-2 flex items-center cursor-pointer hover:opacity-50 active:opacity-25`}>
                  <span className={`uppercase font-bold transition-all truncate delay-300 ${dropdownVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}><Link to="quoteroom">quote room</Link></span>
                </div>
                <div className={`${location.pathname === "/" ? scrollTop > windowHeight && scrollTop < threePageHeight ? "bg-black " : scrollTop > threePageHeight ? "bg-white border-x-[0.5px] border-gray-300" : "bg-transparent" : "bg-white border-x-[0.5px] border-gray-300"} w-full h-[12.5%] px-2 flex items-center cursor-pointer hover:opacity-50 active:opacity-25`}>
                  <span className={`uppercase font-bold transition-all truncate delay-300 ${dropdownVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>books you ought to read</span>
                </div>
                <div className={`${location.pathname === "/" ? scrollTop > windowHeight && scrollTop < threePageHeight ? "bg-black" : scrollTop > threePageHeight ? "bg-white border-x-[0.5px] border-gray-300" : "bg-transparent" : "bg-white border-x-[0.5px] border-gray-300"} w-full h-[12.5%] px-2 flex items-center cursor-pointer hover:opacity-50 active:opacity-25`}>
                  <span className={`uppercase font-bold transition-all truncate delay-300 ${dropdownVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>this is a resource</span>
                </div>
                <div className={`${location.pathname === "/" ? scrollTop > windowHeight && scrollTop < threePageHeight ? "bg-black" : scrollTop > threePageHeight ? "bg-white border-x-[0.5px] border-gray-300" : "bg-transparent" : "bg-white border-x-[0.5px] border-gray-300"} w-full h-[12.5%] px-2 flex items-center cursor-pointer hover:opacity-50 active:opacity-25`}>
                  <span className={`uppercase font-bold transition-all truncate delay-300 ${dropdownVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>this is a resource</span>
                </div>
                <div className={`${location.pathname === "/" ? scrollTop > windowHeight && scrollTop < threePageHeight ? "bg-black" : scrollTop > threePageHeight ? "bg-white border-x-[0.5px] border-gray-300" : "bg-transparent" : "bg-white border-x-[0.5px] border-gray-300"} w-full h-[12.5%] px-2 flex items-center cursor-pointer hover:opacity-50 active:opacity-25`}>
                  <span className={`uppercase font-bold transition-all truncate delay-300 ${dropdownVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>this is a resource</span>
                </div>
                <div className={`${location.pathname === "/" ? scrollTop > windowHeight && scrollTop < threePageHeight ? "bg-black" : scrollTop > threePageHeight ? "bg-white border-x-[0.5px] border-gray-300" : "bg-transparent" : "bg-white border-x-[0.5px] border-gray-300"} w-full h-[12.5%] px-2 flex items-center cursor-pointer hover:opacity-50 active:opacity-25`}>
                  <span className={`uppercase font-bold transition-all truncate delay-300 ${dropdownVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>this is a resource</span>
                </div>
                <div className={`${location.pathname === "/" ? scrollTop > windowHeight && scrollTop < threePageHeight ? "bg-black" : scrollTop > threePageHeight ? "bg-white border-x-[0.5px] border-gray-300" : "bg-transparent" : "bg-white border-x-[0.5px] border-gray-300"} w-full h-[12.5%] px-2 flex items-center cursor-pointer hover:opacity-50 active:opacity-25`}>
                  <span className={`uppercase font-bold transition-all truncate delay-300 ${dropdownVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>this is a resource</span>
                </div>
              </div>
            </span>
          </div>
          <div className="lg:hidden flex w-[50px] select-none transition-all h-[50px] items-center justify-center cursor-pointer hover:opacity-50 active:opacity-25" onClick={() => {
            setBurgerVisible(!burgerVisible)
          }}>
            <img className={`${location.pathname === "/" ? scrollTop > windowHeight && scrollTop < threePageHeight ? "invert" : scrollTop > threePageHeight ? "invert-0" : "invert" : "invert-0"} md:w-[100px] sm:w-[40px] w-[30px] `} src={burgerVisible ? burgerMinus : burgerMenu }  />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HomeScreen />}/>
          <Route path="/home" element={<HomeScreen />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="quoteroom" element={<QuoteRoom />}/>
          <Route path="*" element={<FourOFour />}/>
        </Routes>
    </div>
  )
}

export default App;
