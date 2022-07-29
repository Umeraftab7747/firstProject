import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import pdf from "../../images/pdf.png";

const AfterModal = ({open}) => {

    if (!open) return null;

  return (
    <>
        <div className='overlayTwelve'>
            <div className='modalContainer'>
              <Link to='/refund'> <AiOutlineClose/> </Link>
                <h2> Order Details </h2>
                <div className='content'>
                  <p> Title: <span> Print this PDF </span> </p>
                  <p> Time: <span> 24-08-2022/ 10:15Am </span> </p>
                  <p> Description </p>
                  <div className='box'>
                    <p> Hey I want these pages of 200 to be printed before 24 of this month i will come to take this at 10:15 AM hope so this will be done by then </p>
                    <img src={pdf} alt="image" />
                    <img src={pdf} alt="image" />
                  </div>
                </div> 
            </div>
        </div>
    </>
  )
}

export default AfterModal