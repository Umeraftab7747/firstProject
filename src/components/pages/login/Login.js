import React from 'react'
import { BiEnvelope } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import ract from "../../images/Rectangle3.png";
import hand from "../../images/hand.png";
import "./login.scss";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container-fluid page_1 px-0'>
            <div className='login'>
                <div className='login_content'>
                    <h1> LOGIN </h1>
                    <div className='inputs'>
                        <BiEnvelope className='icon' />
                        <input type="text" placeholder='Email' /><br /><br />
                        <AiOutlineLock className='icon' />
                        <input type="password" placeholder='Password' /><br />
                        <Link to="/reset"> Forgot Password ? </Link>
                    </div>
                    <div className='buttons'>
                        <div className='login_btn'>
                            <Link to="/dashboard"> LOGIN </Link>
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
                        <h2> IF YOU ARE NEW TO OUR<br /> WEBSITE YOU CAN<br /> SIGNUP HERE </h2>
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
        </div>
    )
}

export default Login