import { Compare } from '@/components/ui/compare';

export const Comparison = () => {
   return (
      <div className='p-4 sm:border sm:rounded-3xl sm:dark:bg-neutral-900 sm:bg-neutral-100 mx-auto sm:border-neutral-200 sm:dark:border-neutral-800 '>
         <Compare
            firstImage='/img2.png'
            secondImage='/img1.png'
            firstImageClassName='object-cover'
            secondImageClassname='object-cover'
            className='h-[150px] w-[350px] md:h-[250px] md:w-[600px] lg:w-[800px]'
            slideMode='hover'
            showHandlebar={false}
            autoplayDuration={3000}
            autoplay
         />
      </div>
   )
};