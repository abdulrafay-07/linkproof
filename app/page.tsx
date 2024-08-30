import { Headline } from '@/components/headline';
import { Navbar } from '@/components/navbar';

const Home = () => {
  return (
    <div className='h-full min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative'>
      <div className='absolute pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>

      <div className='flex flex-col items-center'>
        <Navbar />
        <Headline />
      </div>
    </div>
  )
};

export default Home;