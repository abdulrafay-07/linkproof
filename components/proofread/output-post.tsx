'use client'

import { useState } from 'react';

import { Check, Copy } from 'lucide-react';

interface OutputPostProps {
   content: string;
};

export const OutputPost = ({
   content,
}: OutputPostProps) => {
   const [error, setError] = useState<string | null>(null);
   const [isCopied, setIsCopied] = useState(false);

   const copyToClipboard = () => {
      const textArea = document.getElementById('output-field') as HTMLTextAreaElement;
      if (textArea.value) {
         navigator.clipboard.writeText(textArea.value)
            .then(() => {
               setIsCopied(true);
               setError(null);
               setTimeout(() => setIsCopied(false), 2000);
            })
            .catch((err) => console.error('Failed to copy text: ', err));
      } else {
         setError('Nothing to copy');
      };
   };

   return (
      <div className='flex flex-col gap-y-2 w-full md:w-1/2 lg:w-1/2 md:py-20'>
         <div className='flex justify-between'>
            <label htmlFor='output-field'>Enchanced post</label>
            {error && (
               <p className='text-red-500'>{error}</p>
            )}
         </div>
         <textarea
            id='output-field'
            defaultValue={content.length > 0 ? content: ''}
            className='resize-none p-2 border rounded'
            placeholder="Hey everyone, Just a quick update! I'm starting a new position as a Software Engineer at @LinkedIn."
            rows={6}
         />
         <button
            onClick={copyToClipboard}
            disabled={isCopied}
            className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]'
         >
            {isCopied ? (
               <Check className='h-[22px] w-[22px] mr-2' />
            ) : (
               <Copy className='h-[22px] w-[22px] mr-2' />
            )}
            {isCopied ? 'Copied!' : 'Copy to clipboard'}
         </button>    
      </div>
   )
};