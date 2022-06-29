import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import './App.css';

const App = () => {
  const activeMenu = false;
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
            <TooltipComponent content="Settings" position="Top">
              <button className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background:'blue', borderRadius:'50%'}} type='button'>
                <FiSettings/>
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            Sidebar enebled
          </div>
        ):(
          <div className='w-0 dark:bg-secondary-dark-bg'>
            Sidebar disabled
          </div>
        )}
        <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            Navbar
          </div>
        </div>
        <div>
          <Routes>
            {/* Dashboards */}
            <Route path='/' element="home"/>
            <Route path='/ecommerce' element="eCommerce"/>
            {/* Pages */}
            <Route path='/orders' element="Orders"/>
            <Route path='/employee' element="Employees"/>
            <Route path='/products' element="Products"/>
            <Route path='/customers' element="Customers"/>

            {/* Apps */}
            <Route path='/ecommerce' element="eCommerce"/>
            <Route path='/ecommerce' element="eCommerce"/>
            <Route path='/ecommerce' element="eCommerce"/>
            <Route path='/ecommerce' element="eCommerce"/>

            {/* Charts */}
            <Route path='/ecommerce' element="eCommerce"/>
            <Route path='/ecommerce' element="eCommerce"/>
            <Route path='/ecommerce' element="eCommerce"/>
            <Route path='/ecommerce' element="eCommerce"/>
            <Route path='/ecommerce' element="eCommerce"/>
            <Route path='/ecommerce' element="eCommerce"/>
            <Route path='/ecommerce' element="eCommerce"/>

            
          </Routes>
        </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App