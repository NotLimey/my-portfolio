/* eslint-disable @next/next/no-img-element */
import Container from '../layout/Container';
import LinkText from '../LinkText';

const Footer = () => {
    return (
        <Container>
            <div className="text-center pt-12 pb-16">
                <p>
                    Need a website? check out{' '}
                    <LinkText text="limeyfy.com" to="https://limeyfy.com" /> or
                    contact me at{' '}
                    <LinkText
                        text="mkm@limeyfy.no"
                        to="mailto:mkm@limeyfy.no"
                    />
                </p>

                <p className="text-white/80">
                    Designed & built by Martin Kulvedrøsten Myhre
                </p>

                <div className="flex justify-center items-center gap-x-2 mt-5 xl:hidden">
                    <a
                        href="https://instagram.com/mkmyhre"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="/svgs/instagram.svg"
                            className="w-6 h-6"
                            alt=""
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/martin-kulvedr%C3%B8sten-myhre-3a5893211/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="/svgs/linkedin.svg"
                            className="w-6 h-6"
                            alt=""
                        />
                    </a>
                    <a
                        href="https://github.com/NotLimey"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="/svgs/github.svg"
                            className="w-6 h-6"
                            alt=""
                        />
                    </a>
                    <a
                        href="https://twitter.com/Martinkmyhre"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="/svgs/twitter.svg"
                            className="w-6 h-6"
                            alt=""
                        />
                    </a>
                </div>
            </div>
        </Container>
    );
};

export default Footer;
