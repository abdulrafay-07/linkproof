import Link from 'next/link';

import { Comparison } from '@/components/comparison';
import { Headline } from '@/components/headline';

import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className='flex flex-col items-center pt-16 sm:py-16'>
      <div className='flex flex-col gap-y-12'>
        <Headline />
        <Comparison />
        <Link
          href='/proofread'
          className='px-6 py-2.5 bg-black text-white rounded-lg font-semibold transform hover:-translate-y-1 transition duration-400 max-w-[200px] w-full self-center flex justify-center'
        >
          Try Now <ArrowRight className='h-5 w-5 self-center ml-1.5' />
        </Link>
      </div>
    </div>
  )
};

export default Home;