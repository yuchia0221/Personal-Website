import Education from "../components/Education";
import Header from "../components/Header";
import Work from "../components/Work";
import Research from "../components/Research";

export default function AboutPage() {
    return (
        <>
            <Header title="Aaron Chen | About" />
            <div className="space-y-8 lg:space-y-12">
                <Education />
                <Work />
                <Research />
            </div>
        </>
    );
}
