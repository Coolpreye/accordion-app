import React, { useState } from 'react';

export const QuestionsComponents = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <React.Fragment>
                <div className="mt-3 shadow-lg rounded px-6 py-3 border border-gray-200">
                    <div className="">
                        <div className="flex justify-between">
                            <h4 className="text-xs md:text-sm md:font-semibold">{title}</h4>
            <span className="bg-clr3 text-clr2 rounded-full btn px-2 self-start pb-1 text-sm sm:text-xl cursor-pointer" onClick={()=> setShowInfo(!showInfo)}>{showInfo ? "-" : "+"}</span>
                        </div>
                        { showInfo && <p className="mt-4 text-xs md:text-sm text-gray-500">{info}</p>}
                    </div>
                </div>
        </React.Fragment>
    )
}
