import React from "react";
import Header from "./header";
import Footer from "./footer";
import WorksCard from "../modules/workCard";
import { worksCardContents } from "../../api/variable";
import { workTypes } from "../../api/type";


const Works:React.VFC = () => {

    return(
        <>
            <Header />
                <div className="min-h-screen flex justify-center items-center flex-wrap md:mx-3 mx-1">
                    {worksCardContents.map((contents:workTypes) => {
                        return (
                            <WorksCard contents={contents} key={contents.id}/>
                        );
                    })}
                </div>
            <Footer />
        </>
    );
}

export default Works;