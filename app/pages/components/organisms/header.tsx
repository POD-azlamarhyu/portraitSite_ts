import React from "react";
import Link from "next/link";
import { webTitle } from "../../api/variable";

const Navbar:React.VFC = () =>{
    return(
        <div className="py-2">
            <ul className="flex flex-col items-center justify-center sm:flex-row md:justify-end sm:mt-2 sm:h-12">
                <li className="text-white px-6 py-2 w-1/6 text-center">
                    <Link      
                        href={"/components/organisms/top"}
                    >
                        <a className="align-middle block sm:text-xl md:text-2xl ">Top</a>
                    </Link>
                </li>
                <li className="text-white px-6 py-2 w-1/6 text-center">
                    <Link
                        href={"/components/organisms/about"}
                    >
                        <a className="align-middle block sm:text-xl md:text-2xl">About</a>
                    </Link>
                </li>
                <li className="text-white px-6 py-2 w-1/6 text-center">
                    <Link href={"/components/organisms/skills"}>
                        <a className="align-middle block sm:text-xl md:text-2xl">Skills</a>
                    </Link>
                </li>
                <li className="text-white px-6 py-2 w-1/6 text-center">
                    <Link href={"/components/organisms/works"}>
                        <a className="align-middle block sm:text-xl md:text-2xl">Works</a>
                    </Link>
                </li>
                <li className="text-white px-6 py-2 w-1/6 text-center">
                    <Link href={"/components/organisms/hobbys"}>
                        <a className="align-middle block sm:text-xl md:text-2xl">Hobbys</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

const Header:React.VFC = () => {
    return (
        <>
        <header className="bg-gray-700 h-1/6 py-3 sm:pt-4 sm:pb-4">
            <h1 className="text-4xl font-bold text-white text-center sm:text-left sm:my-2 sm:mx-4">
                {webTitle}
            </h1>
            <Navbar/>
        </header>
        </>
    );
}

export default Header;