import React, { useState } from 'react'
import { MdDashboard } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";
import { HiReceiptRefund } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import seven from "../../images/7.png";
import six from "../../images/6.png";
import five from "../../images/5.png";
import four from "../../images/4.png";
import "./Setting.scss";
import { Link } from 'react-router-dom';

const Settind = () => {

    const [click, setClick] = useState(false);
    const clicked = () => {
        setClick(!click);
    }

  return (
    <>
    <div className='container-fluid px-0 mainNine'>
                <div className='right'>
                    <div className="navbar">
                        <div className='container'>
                            <div className='icons' onClick={clicked}>
                                {click ? <FaTimes className='time' /> : <FaBars className='bar' />}
                            </div>
                            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <h4> ADMIN PANEL </h4>
                                <li className='nav-items'>
                                    <Link to='/dashboard'><MdDashboard className='icon' /> Dashboard </Link>
                                </li>
                                <li className='nav-items'>
                                    <Link to='/order'><BsFillBagCheckFill className='icon' /> Order </Link>
                                </li>
                                <li className='nav-items'>
                                <Link to='/refund'><HiReceiptRefund className='icon' /> Refund </Link>
                                </li>
                                <li className='nav-items'>
                                    <Link to='/payment'><MdPayment className='icon' /> Payment </Link>
                                </li>
                                <li className='nav-items'>
                                    <Link to='/chat'><BsFillChatLeftTextFill className='icon' /> Chat </Link>
                                </li>
                                <li className='nav-items'>
                                <Link to='/settind'><AiFillSetting className='icon' /> Setting </Link>
                                </li>
                                <div className='login_side'>
                                <div className='price'> <Link to="/walletback"><MdOutlinePriceChange style={{ fontSize: "28px", marginBottom: "4px" }} /> 50.42$ </Link> </div>
                            <div className='login-btn'> <Link to="/login"><FiLogIn /> Logout </Link> </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='left'>
                    <div className='header'>
                        <div className='dash'>
                            <h4> Setting </h4>
                        </div>
                        <div className='login'>
                            <div className='price'> <Link to="/walletback"><MdOutlinePriceChange style={{ fontSize: "28px", marginBottom: "4px" }} /> 50.42$ </Link> </div>
                            <div className='login-btn'> <Link to="/login"><FiLogIn /> Logout </Link> </div>
                        </div>
                    </div>
                    <div className='left_content'>
                    <ul>
                            <li><img src={seven} alt="image"/> Account Setting </li>
                            <li><img src={six} alt="image"/> Store Setting </li>
                            <li><img src={five} alt="image"/> Chat Support </li>
                            <li><img src={four} alt="image"/> Privacy Policy </li>
                        </ul>
                    </div>
                </div>
    </div>
    </>
  )
}

export default Settind

