import React from 'react'
import { RiFilterLine, RiSearchLine } from 'react-icons/ri';
import { GiClothes,GiWheat } from 'react-icons/gi';
import { LuMonitorSmartphone } from 'react-icons/lu';
import { CiSearch } from 'react-icons/ci';

function FilterBar() {
  return (
    <div className="filter-bar md:flex justify-between border-2 border-[whitesmoke] rounded-md p-3">
      <div className='left-filter flex justify-between py-2 items-center gap-3 md:w-[50%] '>
      <GiClothes className='text-2xl md:text-4xl cursor-pointer '/>
      <LuMonitorSmartphone className='text-2xl md:text-4xl cursor-pointer '/>
      <GiWheat className='text-2xl md:text-4xl cursor-pointer '/>
      <GiClothes className='text-2xl md:text-4xl cursor-pointer '/>
      <LuMonitorSmartphone className='text-2xl md:text-4xl cursor-pointer '/>
      <GiWheat className='text-2xl md:text-4xl cursor-pointer '/>
      
      </div>
      <div className='right-filter flex justify-center gap-1 items-center md:border-none border-t mt-2 pt-2 md:m-0 md:p-0'>
        <input className="focus:outline-none focus:border-b-[1px] border-black transition-all ease-in-out" type='search' placeholder='Search here...'/>
        <button className='text-2xl cursor-pointer' type="button"><CiSearch /></button>
      </div>
    </div>
  );
}

export default FilterBar