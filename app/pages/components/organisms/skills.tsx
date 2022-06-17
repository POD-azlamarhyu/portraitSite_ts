import React from "react";
import Image from "next/image";
import { skillCardContents } from "../../api/variable";
import Header from "./header";
import Footer from "./footer";
import SkillCard from "../modules/skillCard";
import "devicon";
import { skillTypes } from "../../api/type";


const Skills:React.VFC = () =>{
    return(
        <>
            <Header />
            <div className="flex justify-center bg-indigo-50">
                <div className="min-h-screen flex flex-wrap justify-center items-center mx-3 my-3 md:mx-6 md:my-5">
                    {skillCardContents.map((contents:skillTypes)=> {
                        return (
                            <SkillCard contents = {contents} key={contents.id}/>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Skills;