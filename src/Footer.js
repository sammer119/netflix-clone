import React from "react";
import "./Footer.css";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
    return (
        <div className="footer__main">
            <div className="footer__row">
                <IconContext.Provider value={{ color: "#808080" }}>
                    <a
                        href="https://www.facebook.com/NetflixUK"
                        target="_blank"
                    >
                        <FaFacebookSquare className="footer__icon" size={38} />
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "#808080" }}>
                    <a
                        href="https://www.instagram.com/NetflixUK/"
                        target="_blank"
                    >
                        <FaInstagramSquare size={38} className="footer__icon" />
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "#808080" }}>
                    <a
                        href="https://www.youtube.com/user/netflixuk"
                        target="_blank"
                    >
                        <FaYoutubeSquare size={38} className="footer__icon" />
                    </a>
                </IconContext.Provider>
            </div>
            <div className="footer">
                <div className="col">
                    <p>Audio and Subtitles</p>
                    <p>Media Centre</p>
                    <p>Privacy</p>
                    <p>Contact Us</p>
                </div>
                <div className="col">
                    <p>Audio Description</p>
                    <p>Investor Relations</p>
                    <p>Legal Notices</p>
                </div>
                <div className="col">
                    <p>Help Centre</p>
                    <p>Jobs</p>
                    <p>Cookie Preferences</p>
                </div>
                <div className="col">
                    <p>Gift Cards</p>
                    <p>Terms of Use</p>
                    <p>Corporate Information</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
