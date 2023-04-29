import Education from "../components/Education";
import Header from "../components/Header";
import Research from "../components/Research";
import Work from "../components/Work";

const AboutPage = () => {
    return (
        <>
            <Header title="Aaron Chen | About" currentPage="about" />
            <div className="mt-4 mb-16 flex flex-col flex-wrap items-center space-y-8 lg:space-y-12">
                <Education />
                <Work />
                <Research />
            </div>
        </>
    );
};

export default AboutPage;
