import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';

const Sidebar = () => {
  const activeMenu = true;
  return (
    // <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
    //   {activeMenu &&(<>
    //     <div className='flex justify-between items-center'>
    //       <Link onClick={()=>{}} className="items-center gap-3 ml-3 mt-3 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
    //         <SiShopware /> <span>Shoppy</span>
    //       </Link>
    //       <TooltipComponent content="Menu" position="BottomCenter">
    //         <button type='button' onClick={()=>{}} className="p-3 text-xl rounded-full hover:bg-light-gray mt-4 block md:hidden">
    //           <MdOutlineCancel />
    //         </button>
    //       </TooltipComponent>
    //     </div>
    //   </>)}
    // </div>
    <div>Sidebar</div>
  )
}

export default Sidebar