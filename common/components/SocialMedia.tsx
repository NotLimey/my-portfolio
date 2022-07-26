/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="hidden xl:block fixed left-8 bottom-16">
            <div className="flex justify-center items-center flex-col gap-y-2">
                <a
                    href="https://instagram.com/mkmyhre"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="/svgs/instagram.svg" className="w-6 h-6" alt="" />
                </a>
                <a
                    href="https://www.linkedin.com/in/martin-kulvedr%C3%B8sten-myhre-3a5893211/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="/svgs/linkedin.svg" className="w-6 h-6" alt="" />
                </a>
                <a
                    href="https://github.com/NotLimey"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="/svgs/github.svg" className="w-6 h-6" alt="" />
                </a>
                <a
                    href="https://twitter.com/Martinkmyhre"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="/svgs/twitter.svg" className="w-6 h-6" alt="" />
                </a>
                <div className="w-0.5 bg-gradient-to-b from-white/80 to-white/50 h-24" />
            </div>
        </div>
    );
};

export default SocialMedia;
