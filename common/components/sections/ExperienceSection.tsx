import Experience from '../Experience';
import Container from '../layout/Container';

const ExperienceSection = () => {
    return (
        <Container className="pt-8 pb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                Experience
            </h2>
            <div className="flex flex-col py-6">
                <Experience
                    companyName="Inmeta consulting AS"
                    position="APPRENTICE AS JUNIOR COUNSULTANT"
                    description="Aliquam porta sed felis sed sodales. Ut scelerisque, lorem at interdum pharetra, enim risus tempus mi, nec ultricies ante felis ornare mauris. Morbi convallis eget diam eu malesuada. Cras ac turpis in velit scelerisque vestibulum placerat at libero. In et libero mollis, lobortis arcu sit amet, faucibus nunc. Curabitur ut nisi imperdiet, placerat diam in, dictum sapien. Phasellus eu dolor at erat condimentum viverra at ut elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                />
                <Experience
                    companyName="Inmeta consulting AS"
                    position="APPRENTICE AS JUNIOR COUNSULTANT"
                    description="Aliquam porta sed felis sed sodales. Ut scelerisque, lorem at interdum pharetra, enim risus tempus mi, nec ultricies ante felis ornare mauris. Morbi convallis eget diam eu malesuada. Cras ac turpis in velit scelerisque vestibulum placerat at libero. In et libero mollis, lobortis arcu sit amet, faucibus nunc. Curabitur ut nisi imperdiet, placerat diam in, dictum sapien. Phasellus eu dolor at erat condimentum viverra at ut elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                />
                <Experience
                    companyName="Inmeta consulting AS"
                    position="APPRENTICE AS JUNIOR COUNSULTANT"
                    description="Aliquam porta sed felis sed sodales. Ut scelerisque, lorem at interdum pharetra, enim risus tempus mi, nec ultricies ante felis ornare mauris. Morbi convallis eget diam eu malesuada. Cras ac turpis in velit scelerisque vestibulum placerat at libero. In et libero mollis, lobortis arcu sit amet, faucibus nunc. Curabitur ut nisi imperdiet, placerat diam in, dictum sapien. Phasellus eu dolor at erat condimentum viverra at ut elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                />
            </div>
        </Container>
    );
};

export default ExperienceSection;
