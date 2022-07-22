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

                </div>
            </div>
        </div>
    );
}

export default WelcomeSection;