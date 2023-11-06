"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname().split("/");
  const currentArea = pathname[2];
  const recipeId = pathname[3];

  console.log(pathname);
  return (
    <div className='py-5 bg-slate-300 flex items-center justify-between px-5' >
      <div>
        <Link href="/">
         <h1 className='text-blue-700 font-bold text-4xl text-center' >Foodie</h1>
        </Link>
      </div>
      {pathname && currentArea && <Link className='bg-blue-400 rounded p-2 font-bold text-white hover:bg-blue-600 text-xs' href={recipeId ? `/types/${currentArea}` : '/types'}>
          Back to {recipeId ? `${currentArea} recipes` : "recipe types"}
        </Link>}
    </div>
  );
};

export default Header;
