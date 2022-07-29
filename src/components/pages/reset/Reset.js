import React from 'react'
import { BiEnvelope } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import ract from "../../images/Rectangle3.png";
import hand from "../../images/hand.png";
import "./reset.scss";
import { Link } from 'react-router-dom';

const Reset = () => {
    return (
        <div className='container-fluid page_1 px-0'>
            <div className='login'>
                <div className='login_content'>
                    <div className='head'>
                     <h1> RESET </h1>
                    <p> IF YOU HAVE LOST YOUR PASSWORD FEEL FREE TO RESET IT </p>
                    </div>
                    <div className='inputs'>
                        <BiEnvelope className='icon' />
                        <input type="text" placeholder='Email' /><br /><br />                       
                    </div>
                    <div className='buttons'>
                        <div className='login_btn'>
                            <Link to="/signup"> SIGNUP </Link>
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

export default Reset