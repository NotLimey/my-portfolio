/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Button from "../Button";

const WelcomeSection = () => {
    return (
        <>
            <div className="fixed top-0 left-0 -z-30 w-full h-screen justify-center flex">
                <div className="relative h-full max-w-7xl w-full">
                    <img src="/svgs/Vector1.svg" alt="" className="top-32 left-4 absolute" />
                    <img src="/svgs/Vector2.svg" alt="" className="bottom-32 -right-32 absolute" />
                    <img src="/svgs/Polygon1.svg" alt="" className="top-44 left-2/4 absolute" />
                    <img src="/svgs/Ellipse1.svg" alt="" className="top-24 right-32 absolute" />
                    <img src="/svgs/Rectangle3.svg" alt="" className="bottom-48 right-64 absolute" />
                </div>
            </div>
            <div className="flex justify-center max-w-full">
                <div className="max-w-7xl w-full flex flex-col min-h-screen justify-center relative">
                    <div className=" flex items-center w-full justify-between h-full">
                        <div>
                            <p className="flex text-secondary-normal">Hi<Image width={20} height={20} src="/emojies/wave.svg" alt="" /> <span className="ml-2">My name is</span></p>
                            <h1 className="text-4xl">Martin Kulvedrøsten Myhre</h1>
                            <p className="font-light text-secondary-normal text-lg">FULLSTACK DEVELOPER</p>
                            <Button onClick={() => { }} text="Get to know me" className="mt-32" />
                        </div>
                        <div className="relative">
                            <div className="absolute -left-5 -bottom-5 border-secondary-normal w-96 h-96 -z-10 border-2" />
                            <img src="/images/martinkmyhre.png" alt="" className="w-96 h-96" />
                        </div>
                    </div>
                    <p className="mb-8 text-center uppercase tracking-widest font-light text-sm">Scroll</p>
                </div>
            </div>
        </>
    );
}

export default WelcomeSection;