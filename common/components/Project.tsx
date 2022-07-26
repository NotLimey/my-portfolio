const Project = () => {
    return (
        <div className="">
            <div className=" h-48">
                <img
                    className="w-full h-full object-cover filter-image rounded-xl shadow-xl"
                    src="/images/martinkmyhre.png"
                    alt=""
                />
            </div>
            <div className="py-4">
                <h4 className="text-lg md:text-xl font-medium mb-1">
                    Portfolio website
                </h4>
                <p className="text-xs sm:text-sm text-secondary-normal mb-3">
                    REACT.JS
                </p>
                <p className="text-sm sm:text-base text-white/80">
                    Aliquam porta sed felis sed sodales. Ut scelerisque, lorem
                    at interdum pharetra, enim risus tempus mi, nec ultricies
                    ante felis ornare mauris...
                </p>
            </div>
        </div>
    );
};

export default Project;
