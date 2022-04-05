import React from "react";
import "devicon";
import Rating from '@mui/material/Rating';
import { skillTypes } from "../../api/type";

const SkillCard:React.VFC<skillTypes> = ({contents}) =>{
    return(
        <div className="p-4">
            <div className={contents.color}>
                <div className="flex justify-center items-center mx-3 my-3">
                    <span className={`${contents.image} text-9xl p-1`}></span>
                </div>
                <div className="m-0 p-0 border-t-2"></div>
                <div className="mx-3 my-2">
                    <div className="mx-2">
                        <p className="mx-2 my-3 p-0 text-4xl">{contents.title}</p>
                    </div>
                    <div className="mx-5 mt-1 p-0">
                        <Rating 
                            name="read-only" 
                            value={contents.stars} 
                            readOnly
                        />
                    </div>
                    <div className="mx-3 my-2 p-0">
                        <p className="mx-2 p-0 text-lg">{contents.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SkillCard;