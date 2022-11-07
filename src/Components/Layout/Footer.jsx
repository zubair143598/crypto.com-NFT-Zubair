import React from 'react'
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsDiscord} from "react-icons/bs"
import {BsTelegram} from "react-icons/bs"
const Footer = () => {
  return (
    <div className="Footer-section">
      <div className="container-fluid text-white">
        <div className="row">
          <div className="col-md-4">
            <BsInstagram className='ms-2 mt-3' size={30} />
            <BsTwitter className='ms-2 mt-3' size={30} />
            <BsDiscord className='ms-2 mt-3' size={30} />
            <BsTelegram className='ms-2 mt-3' size={30} />
            <p className='mt-3'>Copyright © 2022 Crypto.com. All rights reserved.</p>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <ul className='list-unstyled d-flex'>
              <li className='ms-3 mt-5'>Help Center</li>
              <li className='ms-3 mt-5'>Blog</li>
              <li className='ms-3 mt-5'>T&C</li>
              <li className='ms-3 mt-5'>Privacy Notice</li>
              <li className='ms-3 mt-5'>Cookies Preference</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer