import React from 'react';
import JobList from './jobList';
/* imported images */

const Data = [
    {
        id: 1,
        image: '🎪',
        title: 'Web Developer',
        time: 'Now',
        location: 'Canada',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit quia fugit modi eos laboriosam nihil eaqu',
        company: 'Novac Linus Co.',
    },
    {
        id: 2,
        image: '🎏',
        title: 'Mobile Developer',
        time: 'Now',
        location: 'USA',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit quia fugit modi eos laboriosam nihil eaqu',
        company: 'AmtechBis',
    },
    {
        id: 3,
        image: '🎫',
        title: 'React Native Eng.',
        time: 'Now',
        location: 'Irland',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit quia fugit modi eos laboriosam nihil eaqu',
        company: 'Ayack Soft Tech',
    },
    {
        id: 4,
        image: '🛒',
        title: 'Network Analyst',
        time: '2d ago',
        location: 'Irland',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit quia fugit modi eos laboriosam nihil eaqu',
        company: 'Ayack Soft Tech',
    },
    {
        id: 5,
        image: '🖼',
        title: 'Web Developer',
        time: 'Now',
        location: 'Canada',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit quia fugit modi eos laboriosam nihil eaqu',
        company: 'Novac Linus Co.',
    },
    {
        id: 6,
        image: '👔',
        title: 'Mobile Developer',
        time: 'Now',
        location: 'USA',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit quia fugit modi eos laboriosam nihil eaqu',
        company: 'AmtechBis',
    },
    {
        id: 7,
        image: '🧤',
        title: 'React Native Eng.',
        time: 'Now',
        location: 'Irland',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit quia fugit modi eos laboriosam nihil eaqu',
        company: 'Ayack Soft Tech',
    },
    {
        id: 8,
        image: '👜',
        title: 'Network Analyst',
        time: '2d ago',
        location: 'Irland',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit quia fugit modi eos laboriosam nihil eaqu',
        company: 'Ayack Soft Tech',
    },
];

const Job = () => {
    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center  py-10">
                {Data.map((data) => (
                    <JobList key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default Job;
