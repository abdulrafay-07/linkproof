import Link from 'next/link';

export const Navbar = () => {
   return (
      <nav className='max-w-4xl mx-auto flex justify-center p-4 mb-20'>
         <Link href='/' className='text-4xl font-bold text-purple-500'>linkproof</Link>
      </nav>
   )
};