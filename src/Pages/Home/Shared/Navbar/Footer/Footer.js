import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-32 footer footer-center p-10 bg-slate-800 rounded text-slate-300">

            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover" href=" ">
                    About us
                </a>
                <a className="link link-hover" href=" ">
                    Contact
                </a>
                <a className="link link-hover" href=" ">
                    Jobs
                </a>
                <a className="link link-hover" href=" ">
                    Blogs
                </a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4 text-2xl ">
                    <a
                        href=" "
                    >
                        <FaYoutube />
                    </a>
                    <a
                        href=" "
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href=" "
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/MohammadRakib1e18"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
