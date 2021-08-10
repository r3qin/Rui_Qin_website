import React from 'react'
import '../MyHeader.css'
import my_photo from '../images/photo.jpg'
import { AiFillPhone } from 'react-icons/ai'
import { AiFillMail } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillWechat } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

const MyHeader = () => {
    return (
        <div style={{display: 'flex',  justifyContent:'center'}}>
            
            <div style={{ display: "grid",  gridTemplateColumns: "1fr 1fr" }}> 

                <div className="left_intro">
                    <div style={{display: 'flex',  justifyContent:'center'}}><img src={my_photo} className="my_photo"></img></div>
                    <div style={{display: 'flex',  justifyContent:'center'}}><h1>Rui Qin</h1></div>
                </div>

                <div className="right_intro">
                    <ul className="introContacts">
                    <li className="contacts"> <AiFillPhone size="20"></AiFillPhone> <b>Phone:</b> +1 (949) 566-1981</li>
                    <li className="contacts"> <AiFillMail size="20"></AiFillMail> <b>Email:</b> rq2167@columbia.edu</li>
                    <li className="contacts"> <AiFillWechat size="20"></AiFillWechat> <b>WeChat:</b> qr949533603</li>
                    <li className="contacts"> <AiFillLinkedin size="20"></AiFillLinkedin> <b>LinkedIn:</b> https://www.linkedin.com/in/rui-qin/</li>
                    <li className="contacts"> <AiFillGithub size="20"></AiFillGithub> <b>Github:</b> https://github.com/r3qin/Portfolio</li>
                    </ul>
                </div>
            
            </div> 

        </div>
    )
}

export default MyHeader
