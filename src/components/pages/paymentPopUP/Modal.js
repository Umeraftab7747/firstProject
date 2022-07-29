import React from 'react'
import "./PaymentPopUp.scss";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ open }) => {
  if (!open) return null;
  return (
    <>
      <div className='overlayThirteen'>
        <div className='modalContainer'>
          <div className='container-fluid'>
            <div className='wallet'>
              <div className='wallet_content'>
                <h2> Payment </h2>
                <div className='wallet_head'>
                  <div className='head_content_right'>
                    <p> Amount withdraw: <span> 450$ </span> </p>
                    <p> Amount left: <span> 200$ </span> </p>
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

export default Modal