import React from 'react'
import "./Pop.scss";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Model = ({open}) => {
    if (!open) return null;
  return (
    <>
        <div className='overlaySix'>
            <div className='modalContainer'>
                <h2> Order Details </h2>
                <p> Name: <span> Umer </span> </p>
                <p> Time: <span> 27-08-2022/ 10:15Am </span> </p>
                <p> Pickup: <span> 27-08-2022/ 10:15Am </span> </p>
                <p> Pages: <span> 22 </span> </p>
                <p> Files: <span> 2 </span> </p>
                <p> Paper: <span> A4 </span> </p>
                <p> Filetype: <span> PDF </span> </p>
                <p> Print: <span> ColorFull </span> </p>
                <Link to='/order'> <AiOutlineClose/> </Link>
            </div>
        </div>
    </>
  )
}

export default Model