import React from "react";
import Header from './header';
import Footer from './footer';
import HobbysLeftCard from "../modules/hobbysLeftCard";
import HobbysRightCard from "../modules/hobbysRightCard";
import { hobbysCardContents } from "../../api/variable";
import { hobbysTypes } from "../../api/type";


const Hobbys:React.VFC = () => {

    return (
        <>
            <Header />
            <div className="flex justify-center">
                <div className="flex-none w-0 md:w-1/12 sm:m-1 md:m-4">
                    <></>
                </div>
                <div className="flex-1 flex-col w-full md:w-5/6 m-1 p-1 sm:m-1 md:m-3 flex justify-center">
                    {hobbysCardContents.map((contents:hobbysTypes)=>{
                        return(
                            contents.id % 2 === 0 ? (
                                <HobbysLeftCard contents={contents} key={contents.id}/>
                            ):(
                                <HobbysRightCard contents={contents} key={contents.id}/>
                            )
                        )
                    })}
                </div>
                <div className="flex-none w-0 md:w-1/12 sm:m-1 md:m-4">
                    <></>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Hobbys;