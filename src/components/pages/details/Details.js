import React from 'react'
import {FaTimes} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Details = ({ open }) => {
    return (
        <>
            <div className='overlayThree'>
                <div className='modalContainer'>
                    <div className='container-fluid'>
                        <div className='details'>
                            <h2> WALLET </h2>
                            <Link to="dashboard"><FaTimes className="close" /></Link>
                            <div className='details_form'>
                                <h5> DETAILS </h5>
                                <input type="text" placeholder='BANK ACCOUNT NAME' /><br /><br />
                                <input type="tel" placeholder='BANK ACCOUNT NUMBER' /><br /><br />
                                <input type="tel" placeholder='AMOUNT' /><br /><br />
                                <input type="tel" placeholder='BANK ACCOUNT NUMBER' />
                            </div>
                        </div>
                        <div className='btn'>
                            <a href='#' className='withdrawal'> WITHDRAW </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details