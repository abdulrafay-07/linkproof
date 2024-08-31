'use client'

import { useState } from 'react';

import { InputPost } from '@/components/proofread/input-post';
import { OutputPost } from '@/components/proofread/output-post';

import toast from 'react-hot-toast';
import { IconArrowNarrowDown, IconArrowNarrowRight } from '@tabler/icons-react';
import axios, { AxiosError } from 'axios';

import { ApiResponse } from '@/types/api-response';
import { Check, X } from 'lucide-react';

const Proofread = () => {
   const [isEnhancing, setIsEnhancing] = useState(false);
   const [input, setInput] = useState('');
   const [output, setOutput] = useState('');
   const [error, setError] = useState('');

   const handleEnhancePost = async () => {
      if (input.length === 0) {
         setError('Input field is empty');
         return;
      };
      setIsEnhancing(true);
      try {
         const response = await axios.post<ApiResponse>('/api/proofread', { input });

         if (!response.data.success) {
            toast(response.data.message);
         };

         toast(response.data.message, {
            icon: <Check />,
            style: {
               background: '#4caf50',
               color: '#fff'
            },
         });
         setOutput(response.data.output);
      } catch (error) {
         const axiosError = error as AxiosError<ApiResponse>;
         console.log(axiosError);
         toast(axiosError.response?.data.message!, {
            icon: <X />,
            style: {
               background: '#f44336',
               color: '#fff'
            },
         });
      } finally {
         setError('');
         setIsEnhancing(false);
      };
   };

   return (
      <div className='flex flex-col items-center py-16 sm:py-28 max-w-5xl mx-auto px-4 md:px-8 xl:px-0'>
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
            <OutputPost
               content={output}
            />
         </div>
      </div>
   )
};

export default Proofread;