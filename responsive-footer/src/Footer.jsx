import { icon, logo } from './assets';
import { FaInstagram,FaDribbble,FaXTwitter,FaYoutube } from "react-icons/fa6";

const Footer = () => {
    const links = [
        [
            {label : 'Company' , key: 'header-1'},
            {label : 'About us' , key: 'item-1-1'},
            {label : 'blog' , key: 'item-1-2'},
            {label : 'Contact us' , key: 'item-1-3'},
            {label : 'Pricing' , key: 'item-1-4'},
            {label : 'Testimonials' , key: 'item-1-5'},
        ],
        [
            {label : 'Support' , key: 'header-2'},
            {label : 'Help center' , key: 'item-2-1'},
            {label : 'Terms of service' , key: 'item-2-2'},
            {label : 'Legal' , key: 'item-2-3'},
            {label : 'Privacy policy' , key: 'item-2-4'},
            {label : 'Status' , key: 'item-2-5'},
        ]
    ]
    return (
        <div className='footer'>
            <div className="footer-company-info">
                <div className="footer-img">
                    <img src={icon} alt="" />
                    <span>
                        Nexcent
                    </span>
                </div>
                
                <div className='infos'>             
                    <span>
                        Copyright © 2020 Nexcent ltd.
                    </span>
                    <span>
                        All rights reserved
                    </span>
                </div>
                <div className="footer-icons">
                    <FaInstagram/>
                    <FaDribbble/>
                    <FaXTwitter/>
                    <FaYoutube/>
                </div>
            </div>
            <div className="footer-links">
                    {links.map((col,index) => (
                        <ul className={`col col-${index+1}`} key={`col-${index}`}>
                            {col.map((link,index) => (
                                <li key={`link-${col}-${index}`}>
                                    {link.label}
                                </li>
                            ))}
                        </ul>
                    ))}
            </div>
            <div className="footer-form">
                <label htmlFor="">
                    Stay up to date
                </label>
                <input type="email" name="" id="" />
            </div>
        </div>
    )
}

export default Footer