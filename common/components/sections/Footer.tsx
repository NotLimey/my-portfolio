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
            </div>
        </Container>
    );
};

export default Footer;
