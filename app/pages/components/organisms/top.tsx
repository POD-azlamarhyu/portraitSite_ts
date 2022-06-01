
import Image from "next/image";
import React from "react";
import Header from './header';
import Footer from './footer';
import {topImages} from '../../api/variable';
import { topImage } from "../../api/type";



const Top:React.VFC = () => {

    return(
        <>
            <Header />
            {
                topImages.map((content:topImage) => {
                    return (
                        <div className="m-0 p-0 bg-gray-700" key={content.id}>
                            <div className="m-0 p-0">
                                <img src={content.image.src}/>
                            </div>
                        </div>
                    );
                })
            }
            <Footer />
        </>
    );
}

export default Top;