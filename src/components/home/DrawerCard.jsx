import React, { useState } from 'react';

const DrawerCard = ({question, ans}) => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div className='my-4'>
            <div onClick={()=> setIsClicked(!isClicked)} className='shadow-sm text-primary  py-2 cursor-pointer text-xl'>
             <h1>{question}</h1>
            </div>
            {
                 isClicked && 
                 <div className='text-white bg-primary rounded-2xl border-t-0 p-5'>
                 <p>{ans}</p>
                 </div>
            }
        </div>
    );
};

export default DrawerCard;