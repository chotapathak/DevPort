import React from "react";
import { BsTwitter, BsInstagram} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className="social-media">
            <a href="https://twitter.com/">
                <BsTwitter/>
            </a>
            <a href="https://www.facebook.com/">
                <FaFacebookF/>
            </a>
            <a href="https://www.instagram.com/">
                <BsInstagram/>
            </a>
        </div>
    );
}

export default SocialMedia;