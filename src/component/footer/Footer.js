import React from 'react'
import './style.scss'
import {
    AiFillLinkedin,
    AiFillFacebook,
    AiFillTwitterCircle,
    AiFillGoogleCircle,
    AiFillYoutube
} from 'react-icons/ai'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    {/* <div className="title">
                        <h2>busybuy.com</h2>
                    </div> */}
                    <div className="iconss">
                        <li><AiFillLinkedin /></li>
                        <li><AiFillFacebook /></li>
                        <li><AiFillTwitterCircle /></li>
                        <li><AiFillGoogleCircle /></li>
                        <li><AiFillYoutube /></li>
                    </div>
                    <div className="links">
                        <li>home</li>
                        <li>about</li>
                        <li>contect</li>
                        <li>blogs</li>

                    </div>
                </div>
                <div className="para">
                    <p>Copywrite © Desigined by pk</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
