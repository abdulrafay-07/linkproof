import { Loader2 } from 'lucide-react';
import { Dispatch, FormEvent, SetStateAction } from 'react';

interface InputPostProps {
   input: string;
   setInput: Dispatch<SetStateAction<string>>;
   isEnhancing: boolean;
   error: string;
   setError: Dispatch<SetStateAction<string>>;
   handleEnhancePost: () => void;
};

export const InputPost = ({
   input,
   setInput,
   isEnhancing,
   error,
   setError,
   handleEnhancePost,
}: InputPostProps) => {
   return (
      <div className='flex flex-col gap-y-2 w-full md:w-1/2 lg:w-1/2 md:py-20'>
         <div className='flex justify-between'>
            <label htmlFor='input-field'>Paste your LinkedIn post</label>
            {error && (
               <p className='text-red-500'>{error}</p>
            )}
         </div>
         <textarea
            id='input-field'
            value={input}
            onChange={(e) => {
               setInput(e.target.value);
               setError('');
            }}
            className='resize-none p-2 border rounded'
            placeholder='Hey everoyne, Just an quick update! I am starting a new position as a Software Engineer at @LinkedIN'
            rows={6}
         />
         <button
            type='button'
            onClick={handleEnhancePost}
            className={`px-8 py-2.5 rounded-md bg-gradient-to-br from-purple-500 to-purple-800 text-white focus:ring-2 focus:ring-purple-400 hover:shadow-xl transition duration-200 ${isEnhancing ? 'opacity-70' : ''}`}
            disabled={isEnhancing}
         >
            {isEnhancing ? (
               <Loader2 className='animate-spin self-center w-full' />
            ): (
               'Proofread post'
            )}
         </button>
      </div>
   )
};