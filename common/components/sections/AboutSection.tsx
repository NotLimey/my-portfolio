/* eslint-disable @next/next/no-img-element */
import Button from '../Button';
import LinkText from '../LinkText';

const AboutSection = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="max-w-5xl my-24">
                <div className="mb-32 relative" data-aos="fade-right">
                    <img
                        src="/svgs/Frame5.svg"
                        alt=""
                        className="absolute dots-left"
                    />
                    <h2 className="text-2xl font-semibold mb-2">
                        A quick introduction
                    </h2>
                    <p className="text-xl text-white/80">
                        My name is Martin and i am a seventeen year old
                        fullstack developer from Norway. My passion is coding,
                        everything from simple{' '}
                        <LinkText text="python" to="#projects" /> scripts to
                        full blown websites with{' '}
                        <LinkText text="react" to="#projects" /> and{' '}
                        <LinkText text="dotnet" to="#projects" />. I love
                        thinking new and solving problems.{' '}
                    </p>
                </div>
                <div
                    className="mb-10 relative flex flex-col items-end"
                    data-aos="fade-left"
                >
                    <img
                        src="/svgs/Frame5.svg"
                        alt=""
                        className="absolute dots-right"
                    />
                    <h2 className="text-2xl font-semibold mb-2 text-right">
                        Limeyfy
                    </h2>
                    <p className="text-xl text-white/80 text-right">
                        <LinkText
                            external
                            text="Limeyfy"
                            to="https://limeyfy.com"
                        />{' '}
                        is my sole proprietorship that i founded in may 2021. In{' '}
                        <LinkText
                            external
                            text="Limeyfy"
                            to="https://limeyfy.com"
                        />{' '}
                        i develop, design and operate websites. If you are in
                        need of a website please check out{' '}
                        <LinkText
                            external
                            text="Limeyfy.com"
                            to="https://limeyfy.com"
                        />{' '}
                        or contact me at{' '}
                        <LinkText
                            text="mkm@limeyfy.no"
                            to="mailto:mkm@limeyfy.no"
                        />
                        . I create websites for small and medium size companies,
                        and i can design a website that will fit you perfectly.
                        If you want to hear more you can send me a{' '}
                        <LinkText text="email" to="mailto:mkm@limeyfy.no" />{' '}
                        without any commitments.
                    </p>
                    <Button
                        text="Check it out"
                        className="mt-8"
                        onClick={() =>
                            window.open('https://limeyfy.com', '_blank')
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
