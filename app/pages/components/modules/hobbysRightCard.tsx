import React from "react";
import {hobbysTypes,hobbysdescType} from "../../api/type";

const HobbysRightCard:React.VFC<hobbysTypes> = ({contents}) =>{
    return (
        <div className="flex flex-col-reverse md:flex-row w-full h-94 bg-cyan-300 mx-2 my-10 rounded-xl transform 
                            hover:scale-110 transition-transform">
            <div className="md:w-5/12 flex justify-center items-center align-middle">

                {contents.image.src ? (
                    <div className="mx-3 my-3 p-2">
                        <img src={contents.image.src} alt={`img${contents.title}`}/>
                    </div>
                ):(
                    <div className="flex justify-center items-center m-1 p-2 h-64">
                        <p className="text-6xl text-gray-500">No Image</p>
                    </div>
                )}
            </div>
            <div className="md:w-7/12">
                <h2 className="mx-5 my-5 text-4xl font-medium">{contents.title}</h2>
                <div className="mx-5 my-7">
                    {contents.description.map((desc:hobbysdescType) => {
                        return(
                            <p className="text-2xl text-slate-600" key={desc.id}>{desc.param}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default HobbysRightCard;