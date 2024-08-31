import Link from 'next/link';
import Image from 'next/image';

import { IconBrandGithub, IconBrandMedium, IconBrandX } from '@tabler/icons-react';

export const Footer = () => {
   return (
      <footer className='max-w-7xl mx-auto flex justify-between w-full p-4 md:py-6 md:px-8 bottom-auto left-0 right-0'>
         <div className='flex items-center justify-center md:justify-start w-full md:w-auto gap-x-1 text-gray-500 text-base md:text-lg'>
            Made by |
            <Link
               href='https://linktr.ee/abdulrafay_07'
               target='_blank'
               className='text-neutral-900 font-semibold text-lg md:text-xl flex items-center gap-x-1'
            >
               Abdul Rafay
               <Image
                  src={'/pfp.png'}
                  alt='Profile Picture'
                  className='rounded-full aspect-square ml-1'
                  width={35}
                  height={35}
               />
            </Link>
         </div>
         <div className='hidden md:flex md:items-center gap-x-2'>
            <h4 className='font-semibold text-lg'>Follow me on | </h4>
            <div className='flex items-center gap-x-2.5'>
               <Link href='https://x.com/swe_rafay' target='_blank'>
                  <IconBrandX height={28} width={28} />
               </Link>
               <Link href='https://github.com/abdulrafay-07' target='_blank'>
                  <IconBrandGithub height={28} width={28} />
               </Link>
               <Link href='https://medium.com/@abdul-rafay' target='_blank'>
                  <IconBrandMedium height={28} width={28} />
               </Link>
            </div>
         </div>
      </footer>
   )
};