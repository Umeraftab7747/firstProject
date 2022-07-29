import React from 'react'
import { Link } from 'react-router-dom';
import {FaTimes} from "react-icons/fa";
import "./Wallet.scss"

const Wallet = ({ open }) => {
    if (!open) return null;
    return (
        <>
            <div className="overlayOne">
                <div className="modalContainer">
                    <div className='container-fluid'>
                        <div className='wallet'>
                            <Link to="/dashboard"><FaTimes className="close" /></Link>
                            <div className='wallet_content'>
                                <h2> WALLET </h2>
                                <div className='wallet_head'>
                                    <div className='head_content_right'>
                                        <p> Amount withdraw: <span> 450$ </span> </p>
                                        <p> Amount left: <span> 200$ </span> </p>
                                    </div>
                                    <div className='head_content_left'>
                                        <Link to="/detailback"><h5>$</h5></Link>
                                    </div>
                                </div>
                                <div className='table'>
                                    <table>
                                        <tr>
                                            <th>Date/Time</th>
                                            <th>Amount</th>
                                            <th>Holding</th>
                                            <th>Remark</th>
                                        </tr>
                                        <tr>
                                            <td>6/8/2022 - 10:20Am</td>
                                            <td>120$</td>
                                            <td>32.444$</td>
                                            <td>Null</td>
                                        </tr>
                                        <tr>
                                            <td>6/8/2022 - 10:20Am</td>
                                            <td>120$</td>
                                            <td>32.444$</td>
                                            <td>Null</td>
                                        </tr>
                                        <tr>
                                            <td>6/8/2022 - 10:20Am</td>
                                            <td>120$</td>
                                            <td>32.444$</td>
                                            <td>Null</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wallet