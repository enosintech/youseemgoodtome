import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FourOFour() {
    const [ data, setData ] = useState({});

    useEffect(() => {
        setData(quoteData[Math.floor(Math.random() * 15)])
    }, [])
    
  return (
    <>
        <div className="w-full h-screen bg-white flex flex-col items-center pt-[60px] justify-center">
            <div className="h-[70%] w-[60%]">
                <div className={`w-full h-[30%] flex items-end font-extrabold justify-center text-[150px] tracking-wide text-purple-950`}>
                    Oops :/
                </div>
                <div className="w-full h-[50%] flex">
                    <div className="w-1/2 h-full flex items-center justify-center text-[200px] font-bold">
                        404
                    </div>
                    <div className="h-[90%] border-l-2 border-black"/>
                    <div className="w-1/2 h-full px-20 flex items-center justify-center text-justify text-[30px] font-semibold text-gray-500">
                        We can't seem to find the page you are looking for.
                    </div>
                </div>
                <div className="w-full px-20 font-thin h-[20%] flex flex-col items-center justify-center">
                    <p className="text-justify overflow-scroll mt-2">
                        <span className="text-[20px]">“</span>{data.content}<span className="text-[20px]">.”</span>
                    </p>
                    <span className="font-bold">― {data.author}.</span>
                </div>
            </div>
            <div className="w-full h-[10%] mt-5 flex items-center justify-center gap-8">
                <div className="h-[50%] w-[15%] rounded-2xl bg-purple-950 flex items-center justify-center hover:opacity-50 active:opacity-25 cursor-pointer select-none text-white font-semibold">
                    <Link to="/">Go to Home</Link>
                </div>
                <div className="h-[50%] w-[15%] rounded-2xl bg-[#222831] flex items-center justify-center hover:opacity-50 active:opacity-25 cursor-pointer select-none text-white font-semibold">
                    <Link to="/blog">Read Articles</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default FourOFour;

const quoteData = [
    {
        content: "Blessed is he who expects nothing, for he shall never be disappointed",
        author: "Alexander Pope",
    },
    {
        content: `If you're betrayed, release disappointment at once.
        By that way, the bitterness has no time to take root`,
        author: "Toba Beta",
    },
    {
        content: `Look. I have a strategy. Why expect anything? If you don’t expect anything, you don’t get disappointed`,
        author: "Patricia McCormick",
    },
    {
        content: "Disappointment is a sort of bankruptcy - the bankruptcy of a soul that expends too much in hope and expectation",
        author: "Eric Hoffer",
    },
    {
        content: "Disappointments are not meant to destroy you. They are meant to strengthen you and make you resilient",
        author: "Unknown",
    },
    {
        content: "Disappointments are inevitable; discouragement is a choice",
        author: "Charles Stanley",
    },
    {
        content: "We must all suffer one of two things: the pain of discipline or the pain of regret or disappointment",
        author: "Jim Rohn",
    },
    {
        content: "If you put in little effort and expect big returns, you will be deeply disappointed. You don’t get apples by planting lemon seeds",
        author: "Catherine Pulsifer",
    },
    {
        content: "As you work towards your goals, disappointments may slow you down, but they don’t have to keep you down",
        author: "Catherine Pulsifer",
    },
    {
        content: "You may encounter many disappointments. Be strong. Tell yourself, “I am good enough, I will try again",
        author: "Lailah Gifty Akita",
    },
    {
        content: "The beauty is that through disappointment you can gain clarity, and with clarity comes conviction and true originality",
        author: "Conan O'Brien",
    },
    {
        content: "Suspense is worse than disappointment",
        author: "Robert Burns",
    },
    {
        content: "We must accept finite disappointment, but never lose infinite hope",
        author: "Martin Luther King, Jr",
    },
    {
        content: "Many of our disappointments and much of our unhappiness arise from our forming false notions of things and persons",
        author: "Abigail Adams",
    },
    {
        content: "Life is a great disappointment",
        author: "Oscar Wilde",
    },
]
