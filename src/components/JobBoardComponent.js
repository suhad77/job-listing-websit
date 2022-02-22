import React from 'react';

// let x ={
//     "id": 5,
//     "company": "Loop Studios",
//     "logo": "/images/loop-studios.svg",
//     "new": false,
//     "featured": false,
//     "position": "Software Engineer",
//     "role": "Fullstack",
//     "level": "Midweight",
//     "postedAt": "1w ago",
//     "contract": "Full Time",
//     "location": "Worldwide",
//     "languages": ["JavaScript"],
//     "tools": ["Ruby", "Sass"]
//   },

const JobBoardCompornet = ({job:{company,logo,isNew,featured,position,role,level,postedAt,contract,location,languages,tools,}}) =>{
    const tags = [ role, level]

    if(languages) {
        tags.push(...languages);
    }
    if(tools) {
        tags.push(...tools);
    }

    return( 
        <div className={`flex bg-white shadow-md mx-16 my-4 p-4 rounded ${featured && 'border-l-4 border-teal-500 border-solid'}`}>
           <div>
               <img src={logo} alt={company} />
           </div>
           <div className='flex flex-col justify-between ml-4'>
               <h3 className='font-bold text-teal-500'>{company}
               {isNew && 
               (<span className='bg-teal-800 text-white font-bold m-2 py-1 px-2 rounded-full'>New</span>
               )}
               {featured && (<span className='bg-teal-500 text-teal-100 font-bold py-1 px-2 rounded-full'>Featured</span>
               )}
               </h3>
               <h2 className='font-bold text-xl'>{position}</h2>
               <p className='text-gray-700'>
                   {postedAt} . {contract} . {location}
               </p>
           </div>
           <div className=' flex items-center justify-end ml-auto'>
                {
                    tags ? tags.map((tag) => <span className='text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded '>{tag}</span>) : ''}
                
           </div>
        </div>

    )};

export default JobBoardCompornet;

