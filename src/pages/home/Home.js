import React from 'react'
import Footer from '../../shared/Footer'
import { Link } from 'react-router-dom'
import Cards from './Cards'
import Features from '../../components/Features'
import Faq from '../../components/Faq'
import Hero from '../../components/Hero'

import Auth from '../../components/Auth'
import Contact from '../../components/Contact'
import About from '../../components/About'
import Cookies from "js-cookie";
import SeoMeta from '../../utils/SeoMeta'


const Home = () => {
//     const dd = Cookies.get('XSRF-TOKEN')
//   console.log('dd',dd);
    return (
        <>
      
            <SeoMeta
                title="ToraTax | Fast & Secure Online Tax Filing Service"
                description="File your income tax returns effortlessly with ToraTax. Enjoy fast, secure, and expert-assisted online tax filing with maximum accuracy and compliance."
                keywords="ToraTax, Online Tax Filing, ITR Filing, Income Tax Return, Secure Tax Filing, Tax Solutions, E-Filing, Financial Services, Tax Preparation, Expert Tax Guidance"
                author="ToraTax Team"
                canonical="https://www.toratax.com/"
            />
        
           <Hero/>
           <Features/>
           <Faq/>
           {/* <Contact/> */}
           <About/>

           {/* <Auth/> */}
        </>
    )
}

export default Home
