import React from 'react'
import { BiEnvelope } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import ract from "../../images/Rectangle3.png";
import hand from "../../images/hand.png";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import "./Signup.scss";
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='container-fluid page_1 px-0'>
            <div className='login'>
                <div className='login_content'>
                    <h1> SIGNUP </h1>
                    <div className='inputs'>
                        <MdOutlinePermContactCalendar className='icon' />
                        <input type="text" placeholder='Name' /><br /><br />
                        <BsPhone className='icon' />
                        <input type="tel" placeholder='Number' /><br /><br/>
                        <BiEnvelope className='icon' />
                        <input type="text" placeholder='Email' /><br /><br />
                        <AiOutlineLock className='icon' />
                        <input type="password" placeholder='Password' /><br />
                        
                    </div>
                    <div className='buttons'>
                        <div className='login_btn'>
                            <button> SIGNUP </button>
                        </div>
                        <div className='google_btn'>
                            <a href='#'> <FcGoogle className='g_icon' /> LOGIN WITH GOOGLE </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hello'>
                <div className='image'>
                    <img src={ract} alt="image" />
                </div>
                <div className='hello_content'>
                    <div className='text_content'>
                        <h1> Hello ! <img src={hand} alt="hand" /> </h1>
                        <h2> Already a user ? <br/> Login below now </h2>
                    </div>
                    <div className='buttons'>
                        <div className='login_btn'>
                            <Link to="/login"> LOGIN </Link>
                        </div>
                        <div className='google_btn'>
                            <a href='#'> <FcGoogle className='g_icon' /> LOGIN WITH GOOGLE </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup