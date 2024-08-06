import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-top">
            <div className="footer-container">
                <div className="row">
                    <div className="col-lg-3">
                        <section className="widget widget_finoptissocialiconwi_widget">
                            <h3 className="footer-title">About Us</h3>
                            <p>The Kenya Engineering Technology Registration Board (KETRB) was established in accordance with the Engineering Technology Act No 23 of 2016 Part II Section 3. (1) to set standards for engineering technologists and technicians, register and issue licenses to qualified persons as per the provision of the Act. The Board is also mandated to verify that engineering professional services and works are undertaken by persons registered under the Act as well as ensure that standards and professional ethics for health and safety of the public are observed. The members of the Board were appointed to office on 24th October, 2016 by the CS Ministry of Education.</p>
                        </section>
                        <section className="widget widget_finoptissocialiconwi_widget">
                            <br />
                            <h3 className="footer-title">Follow Us</h3>
                            <ul className="footer_social">
                                <li><Link to="#" target="_blank" className="text-2xl"><FaFacebook /></Link></li>
                                <li><Link to="#" target="_blank" className="text-2xl"><FaTwitter /></Link></li>
                                <li><Link to="#" target="_blank" className="text-2xl"><FaLinkedin /></Link></li>
                                <li><Link to="#" target="_blank" className="text-2xl"><FaYoutube /></Link></li>
                            </ul>
                        </section>
                    </div>
                    <div className="col-lg-3">
                        <section className="widget widget_nav_menu quick-links">
                            <h3 className="footer-title">Quick Links</h3>
                            <ul>
                                <li><Link to="/" className="footer-link">Home</Link></li>
                                <li><Link to="/about" className="footer-link">About Us</Link></li>
                                <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                            </ul>
                        </section>
                    </div>
                    <div className="col-lg-3">
                        <div className="recent-widget">
                            <h3 className="footer-title">Recent Posts</h3>
                            <div className="recent-post-widget widget clearfix">
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <section className="widget widget_contact_widget">
                            <h3 className="footer-title">Contact Us</h3>
                            <ul className="fa-ul">
                                <li className="flex items-center">
                                    <i className="fa fa-globe mr-2 text-lg"></i>
                                    Lower Kabete, Kiplombe Eldoret
                                </li>
                                <li className="flex items-center">
                                    <i className="fa fa-phone mr-2 text-lg"></i>
                                    <Link to="tel:+254724027435" className="text-m"> +254 7240274351</Link>
                                </li>
                                <li className="flex items-center">
                                    <i className="fa fa-envelope mr-2 text-lg"></i>
                                    <Link to="mailto:kipkogeit@gmail.com" className="text-m">kipkogeit@gmail.com</Link>
                                </li>
                                <li className="flex items-center">
                                    <i className="mr-2 text-lg"><FaWhatsapp /></i>
                                    <Link to="https://wa.me/2547240274351" className="text-m">+254724027435</Link>
                                </li>
                                <li className="flex items-center">
                                    <i className="fa fa-clock mr-2 text-m"></i>
                                    08:00 - 16:00
                                </li>
                            </ul>

                        </section>
                    </div>
                </div>
            </div>
            <hr className="border-t-2 border-gray-600 my-4 px-6" />
            <div className="text-center text-sm text-white">© 2024 Kenya Engineering Technology Registration Board (KETRB). All Rights Reserved</div>
        </div>
    );
};

export default Footer;