import React from 'react';

const Value = () => {
    return (
        <div className="mb-[4rem] mt-[6rem]">
            <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
                The value that holds us true and to account
            </h1>
            <div className="grid gap-[10rem] grid-cols-3 items-center">
                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-[40px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                            {/* <img src="#" alt="test" className="w-[70%]" /> */}
                            🍊
                        </div>
                        <span className="font-semibold text-textColor text-[18px]">
                            Simplicity
                        </span>
                    </div>
                    <p className="text-textColor text-[13px] opacity-[.7] py-[1rem] font-semibold">
                        Journey to learning begins in a day and consistency
                    </p>
                </div>
                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-[40px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                            {/* <img src="#" alt="test" className="w-[70%]" /> */}
                            🍊
                        </div>
                        <span className="font-semibold text-textColor text-[18px]">
                            Simplicity
                        </span>
                    </div>
                    <p className="text-textColor text-[13px] opacity-[.7] py-[1rem] font-semibold">
                        Journey to learning begins in a day and consistency
                    </p>
                </div>
                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                    ''
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-[40px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                            {/* <img src="#" alt="test" className="w-[70%]" /> */}
                            🍊
                        </div>
                        <span className="font-semibold text-textColor text-[18px]">
                            Simplicity
                        </span>
                    </div>
                    <p className="text-textColor text-[13px] opacity-[.7] py-[1rem] font-semibold">
                        Journey to learning begins in a day and consistency
                    </p>
                </div>
            </div>
            <div className="flex items-center bg-[#eeedf7] p-[5rem] rounded-[10px] w-full">
                <div className="w-[80%]"> <h1 className='text-[25px] text-blueColor font-semibold'>Ready to switch a career ?</h1>
                <p className='text-textColor font-semibold text-[16px]'>Let's get started</p></div>
                <div className="w-[20%]"> <button className='border-[1px] border-blueColor p-[1rem] rounded-[5px] hover:text-white hover:bg-blueColor'> Get Started</button></div>
            </div>
        </div>
    );
};

export default Value;
