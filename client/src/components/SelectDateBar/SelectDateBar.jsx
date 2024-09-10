import React from "react";
import searchIcon from "../../assets/svg/tabler--search.svg"

const SelectDateBar = () => {
    return (
    <div className="border border-gray-400 flex h-16  w-[90%] m-auto items-center justify-between px-2 rounded-3xl shadow-lg sm:w-[45%] ">

        <div className="flex items-center w-[85%] lg:w-[90%] h-[90%] justify-evenly x">
            <input type="date" className="w-1/5 "/>
            <div className="w-[1px] bg-gray-500 h-[80%]"></div>
            <input type="date" className="w-1/5 "/>
            <div className="w-[1px] bg-gray-500 h-[80%]"></div>
            <input type="date" className="w-1/5 "/>
        </div>

        <button className="bg-[#57886C] size-10 rounded-full flex items-center justify-center sm:size-12">
            <img src={searchIcon} alt="searchIcon"/>

        </button>
    </div>
    )
}
export default SelectDateBar;