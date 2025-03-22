import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import './index.scss'

const Layout = () => {

  return (
    <>
    <div className='oga'>
        <Navbar/>
        <div className='outlet'>
          <Outlet/>
        </div>
        
    </div>          
    
    </>
  )
}

export default Layout