import Image from "next/image";
import Button from "../Button";

const WelcomeSection = () => {
    return (
        <div className="flex justify-center">
            <div className="max-w-7xl w-full min-h-screen flex items-center justify-between">
                <div>
                    <p className="flex text-secondary-normal">Hi<Image width={20} height={20} src="/emojies/wave.svg" alt="" /> <span className="ml-2">My name is</span></p>
                    <h1 className="text-4xl">Martin Kulvedrøsten Myhre</h1>
                    <p className="font-light text-secondary-normal text-lg">FULLSTACK DEVELOPER</p>
                    <Button onClick={() => { }} text="Get to know me" className="mt-32" />
                </div>
                <div>
                    <div className="relative">
                        <div className="absolute border -left-5 -bottom-5 border-secondary-normal w-96 h-96 -z-10 border-2">

                        </div>
                        <img src="/images/martinkmyhre.png" alt="" className="w-96 h-96" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeSection;