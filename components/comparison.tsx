import { Compare } from '@/components/ui/compare';

export const Comparison = () => {
   return (
      // TODO: change the images
      <div className='p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 mx-auto border-neutral-200 dark:border-neutral-800'>
         <Compare
            firstImage='/img1.png'
            secondImage='/img2.png'
            firstImageClassName='object-cover object-left-top'
            secondImageClassname='object-cover object-left-top'
            className='h-[250px] w-[250px] md:h-[400px] md:w-[500px]'
            slideMode='drag'
            showHandlebar={false}
            autoplayDuration={1500}
            autoplay
         />
      </div>
   )
};