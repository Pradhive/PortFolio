import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <div className='bg-black border-b h-[10vh] p-4 flex justify-between items-center sticky top-0'>
        <div className='flex '>
            <div className='text-white text-[30px] pl-4 tracking-widest font-bold italic'>PU</div>
            <span className="p-1 mt-2 ml-1 h-fit bg-white rounded-full"></span>
        </div>
        <div className='flex gap-24'>
        <div className='text-white text-[14px] tracking-widest font-bold underline-hover'><a href='#home'>Home</a></div>
        <div className='text-white text-[14px] tracking-widest font-bold underline-hover'><a href='#skill'>Skill</a></div>
        <div className='text-white text-[14px] tracking-widest font-bold underline-hover'><a href='#project'>Project</a></div>
        <div className='text-white text-[14px] tracking-widest font-bold underline-hover'><a href='#contact'>Contact</a></div>
        </div>
    </div>
  )
}
