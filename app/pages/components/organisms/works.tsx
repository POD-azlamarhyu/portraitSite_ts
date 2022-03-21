import React from "react";
import Header from "./header";
import Footer from "./footer";
import WorksCard from "../modules/workCard";
import { worksCardContents } from "../../api/variable";

const Works:React.VFC = () => {

    return(
        <>
            <Header />
                <div className="min-h-screen flex justify-center items-center flex-wrap mx-2">
                    {worksCardContents.map((contents) => {
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