interface ExperienceProps {
    companyName: string;
    position: string;
    description: string;
}

const Experience = ({
    companyName,
    position,
    description,
}: ExperienceProps) => {
    return (
        <div className="flex justify-start">
            <div className="min-h-max flex flex-col items-center mr-6">
                <div>
                    <div className="w-6 h-6 border-2 border-secondary-normal rounded-full" />
                </div>
                <div className="h-full w-0.5 bg-gradient-to-b from-secondary-normal/80 to-secondary-light/10" />
            </div>
            <div>
                <h3 className="text-base sm:text-xl sm:font-medium">
                    {companyName}
                </h3>
                <p className="text-xs md:text-sm text-secondary-normal">
                    {position}
                </p>
                <br />
                <p className=" text-white/80 pb-8">{description}</p>
                <br />
            </div>
        </div>
    );
};

export default Experience;
