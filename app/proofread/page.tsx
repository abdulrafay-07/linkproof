'use client'

import { useState } from 'react';

import { InputPost } from '@/components/proofread/input-post';
import { OutputPost } from '@/components/proofread/output-post';

import { IconArrowNarrowDown, IconArrowNarrowRight } from '@tabler/icons-react';

const Proofread = () => {
   const [isEnhancing, setIsEnhancing] = useState(false);
   const [input, setInput] = useState('');
   const [error, setError] = useState('');

   const handleEnhancePost = async () => {
      if (input.length === 0) {
         setError('Input field is empty');
         return;
      };
      setIsEnhancing(true);
      try {
         console.log(input);
      } catch (error) {
         
      } finally {
         setError('');
         setIsEnhancing(false);
      };
   };

   return (
      <div className='flex flex-col items-center pt-16 sm:py-28 max-w-5xl mx-auto px-4 md:px-8 xl:px-0'>
         <div className='flex flex-col md:flex-row md:justify-evenly items-center w-full gap-10'>
            <InputPost
               input={input}
               setInput={setInput}
               isEnhancing={isEnhancing}
               error={error}
               setError={setError}
               handleEnhancePost={handleEnhancePost}
            />
            <IconArrowNarrowRight height={40} width={40} className='hidden md:flex' />
            <IconArrowNarrowDown height={40} width={40} className='flex md:hidden' />
            <OutputPost />
         </div>
      </div>
   )
};

export default Proofread;