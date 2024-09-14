import React from 'react'
import './ForgetUserPass.scss'
import Navbar from '../HomePage/Navbar'
import { RiQuestionFill } from "react-icons/ri"
import { IoArrowBackCircleOutline, IoChevronForward } from "react-icons/io5"


const ForgetUserPass = () => {
  return (
    <>
         <Navbar className='forgetuser' />
         
         <div className='faquser'>
         <div className='FAQsExit'>
           <p className='faqsExit quest'><RiQuestionFill /> Questions?</p>
           <p className='faqsExit'>Read our FAQs <IoChevronForward /> </p>
           <p className='faqsExit'> <IoArrowBackCircleOutline /> Exit</p>
           </div>
           <div>
                  <p>Identification</p>
                  <p>Let's confirm your identity</p>
                  <p>To protect your account, please tell us the requested info so we can confirm your identity. If you have more than one account, choose one and we'll take care of the rest.
                  </p>
                  <p>Commercial administrators must tell us a Tax ID number.</p>
           </div>
         </div>
    </>
  )
}

export default ForgetUserPass