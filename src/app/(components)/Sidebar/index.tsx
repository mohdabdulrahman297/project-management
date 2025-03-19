"use client"

import { LockIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

const Sidebar = () => {

    const [showProjects, setShowProjects] = useState(true);
    const [showPriority, setShowPriority] = useState(true);

    const sidebarClassNames = `fixed flex flex-col h-[100x] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64`;  
    
    return (
    <div className={sidebarClassNames}>
        <div className='flex h-[100%] w-full flex-col justify-start'>
            {/* top logo */}
            <div className='z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black'>
                <div className='text-xl font-bold text-gray-800 dark:text-white'>
                    LIST
                </div>
                {/* team */}
                <div className='flex items-center gap-5 border-y-[1.5px] border-gray-200 px-6 py-4 dark:border-gray-800'>
                    <Image src='/logo.png' width={40} height={40} alt='logo'/>
                    <div className='mt-1 flex items-start gap-2'>
                        <LockIcon className='mt-[0.1rem] h-4 w-4 text-white dark:text-gray-400'/>
                        <p className='text-md text-white'>
                            Private
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar