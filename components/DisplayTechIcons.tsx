import { getTechLogos } from '@/lib/utils'
import Image from 'next/image';
import React from 'react'

const DisplayTechIcons = async ({techStack}:TechIconProps) => {
    const techIcons = await getTechLogos(techStack);
  return (
    <div className='flex gap-2'>
        {techIcons.slice(0,3).map(
            (techIcon,index) =>
                <div key={`${techIcon.tech}_${index}`} className='relative group bg-dark-300 rounded-full p-2 flex-center not-first:-ml-6'>
                    <span className='tech-tooltip'>{techIcon.tech}</span>
                    <Image height={100} 
                        width={100}
                        className='size-5' 
                        alt={techIcon.tech} 
                        src={techIcon.url}
                    />
                </div>
            )
        }
    </div>
  )
}

export default DisplayTechIcons