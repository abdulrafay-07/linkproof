export const Headline = () => {
   return (
      <div className='flex flex-col gap-y-2 md:gap-y-0'>
         <h1 className='text-4xl md:text-5xl xl:text-7xl font-semibold max-w-4xl mx-auto text-center leading-tight md:leading-snug xl:leading-tight px-4 md:px-8 xl:px-0 md:mb-6'>
            Proofread LinkedIn Posts with{' '}
            <span className='bg-purple-500 px-2 py-0.5 text-white rounded-sm whitespace-nowrap'>
            AI in seconds
            </span>
         </h1>
         <p className='text-center text-gray-500 font-semibold'>You don't need to log in or subscribe.</p>
      </div>
   )
};