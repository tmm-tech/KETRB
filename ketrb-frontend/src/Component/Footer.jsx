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
                            <h3 className="footer-title">Location</h3>

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
                                <li><Link to="/news&events" className="footer-link">News & Events</Link></li>
                                <li><Link to="/partner" className="footer-link">Partners</Link></li>
                                <li><Link to="/faq" className="footer-link">FAQ</Link></li>
                            </ul>
                        </section>
                    </div>
                    <div className="col-lg-3">
                        <div className="recent-widget">
                            <h3 className="footer-title">News & Events</h3>
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
                                    National Bank Building, 11th floor,Harambee Avenue, Nairobi
                                </li>
                                <li className="flex items-center">
                                    <i className="fa fa-envelope mr-2 text-lg"></i>
                                    <Link to="#" className="text-m">P. O. Box 37046-0200</Link>
                                </li>
                                <li className="flex items-center">
                                    <i className="fa fa-phone mr-2 text-lg"></i>
                                    <Link to="tel:+254740137877" className="text-m"> +254 740137877</Link>
                                </li>
                                <li className="flex items-center">
                                    <i className="fa fa-envelope mr-2 text-lg"></i>
                                    <Link to="mailto:info@ketrb.go.ke" className="text-m">info@ketrb.go.ke</Link>
                                </li>
                                <li className="flex items-center">
                                    <i className="mr-2 text-lg"><FaWhatsapp /></i>
                                    <Link to="https://wa.me/254724027435" className="text-m">+254724027435</Link>
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