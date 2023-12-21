import React from 'react';
import { BiTimeFive } from 'react-icons/bi';

const JobList = ({ data }) => {
    return (
        <div className="group group/items singleJob w-[250px] p-[20px] rounded-[10px] hover:bg-blueColor hover:cursor-pointer shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
            <span className="flex justify-between items-centergap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white ">
                    {data.title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                    <BiTimeFive />
                    {data.time}
                </span>
            </span>
            <h6 className="text-[#ccc]">{data.location}</h6>
            <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {data.desc}
            </p>
            <div className="company flex items-center gap-2">
                {data.image}
                <span className="text-[10px] py-[1rem] block group-hover-text-white">
                    {' '}
                    {data.company}
                </span>
            </div>
            <button
                className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor 
    hover:bg-white group-hover/item:text-textColor"
            >
                Apply Now
            </button>
        </div>
    );
};

export default JobList;
