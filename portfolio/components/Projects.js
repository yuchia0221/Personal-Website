import ProjectItem from "./ProjectItem";

const Projects = () => {
    const webAppProjects = [
        {
            name: "RiceBook",
            image: "/images/ricebook.png",
            image_alt: "",
            technologies: "Node.js, Express.js, React.js, Tailwind CSS, MongoDB, OAuth 2.0, Heroku, Cloudinary",
            introduction: "A social media web app just like FaceBook",
            tags: ["Web", "Cloud"],
            github: "https://github.com/yuchia0221/RiceBook",
            link: "https://ricebook-client.surge.sh",
        },
        {
            name: "Data Structure Visualizer",
            image: "/images/visualizer.png",
            image_alt: "",
            technologies: "Node.js, React.js, MongoDB, Azure Cloud Services",
            introduction: "Visualization tools for 10 sorting algorithms and 8 data structures",
            tags: ["Web", "Cloud"],
            github: "https://github.com/yuchia0221/Data-Structure-Visualizer",
            link: null,
        },
        {
            name: "Ecommerce Website",
            image: "/images/ecommerce.png",
            image_alt: "",
            technologies: "Node.js, Nginx, AWS Cloud Services, GitHub Actions",
            introduction: "Ecommerce Website for saling shoes",
            tags: ["Web", "Cloud"],
            github: null,
            link: "https://www.familletw.com/",
        },
    ];
    const highPerformanceProjects = [
        {
            name: "Parallel Exploratory Search in Othello",
            image: "/images/cpu.png",
            image_alt: "",
            technologies: "C++, Cilk Plus",
            introduction: "A parallel program using Cilk Plus to find the best next move in Othello game",
            tags: ["High-Performance"],
            github: null,
            link: null,
        },
        {
            name: "Parallel LU Decomposition",
            image: "/images/cpu.png",
            image_alt: "",
            technologies: "C++, OpenMP",
            introduction: "A multithreaded algorithm using OpenMP to expedite LU Decomposition",
            tags: ["High-Performance"],
            github: null,
            link: null,
        },
        {
            name: "2.5D Matrix Multiplication",
            image: "/images/cpu.png",
            image_alt: "",
            technologies: "C++, OpenMPI",
            introduction: "A message-passing algorithm with OpenMPI to accelerate matrix multiplication",
            tags: ["High-Performance"],
            github: null,
            link: null,
        },
        {
            name: "Data-parallel Hole Compaction",
            image: "/images/gpu.png",
            image_alt: "",
            technologies: "C++, CUDA",
            introduction: "A data-parallel algorithm for hole compaction using CUDA",
            tags: ["High-Performance"],
            github: null,
            link: null,
        },
    ];
    const aiProjects = [
        {
            name: "AI Pacman Projects",
            image: "/images/pacman.png",
            image_alt: "",
            technologies: "Pathfinding algorithms, Pruning algorithms, and Reinforcement Learning",
            introduction:
                "Implement AI concepts, such as informed state-space search, probabilistic inference, and reinforcement learning in Pacman game",
            tags: ["AI"],
            github: "https://github.com/yuchia0221/UC-Berkeley-AI-Pacman-Projects",
            link: "http://ai.berkeley.edu/project_overview.html",
        },
        {
            name: "Music Recommendation System",
            image: "/images/music.png",
            image_alt: "",
            technologies: "Python (Scikit-learn, Xgboost, Flask)",
            introduction: "Classify music mood with Spotify data",
            tags: ["ML"],
            github: "https://github.com/yuchia0221/Spotify",
            link: null,
        },
    ];
    const generateProjectItems = (projects) => {
        return projects.map((item, index) => (
            <ProjectItem
                key={index}
                image={item.image}
                name={item.name}
                technologies={item.technologies}
                intro={item.introduction}
                tags={item.tags}
                github={item.github}
                link={item.link}
            />
        ));
    };

    return (
        <div className="my-4 flex flex-col space-y-4 md:my-12 lg:space-y-8">
            <div className="flex flex-col space-y-4 lg:space-y-8">
                <div className="block text-center text-xl font-semibold text-lightBlue dark:text-lightYellow lg:pl-5 lg:text-3xl">
                    Web Development
                </div>
                <div className="flex flex-col flex-wrap items-center space-y-4 lg:space-y-8">
                    {generateProjectItems(webAppProjects)}
                </div>
            </div>
            <div className="flex flex-col space-y-4 lg:space-y-8">
                <div className="block text-center text-xl font-semibold text-lightBlue dark:text-lightYellow lg:pl-5 lg:text-3xl">
                    High-Performance Computing
                </div>
                <div className="flex flex-col flex-wrap items-center space-y-4 lg:space-y-8">
                    {generateProjectItems(highPerformanceProjects)}
                </div>
            </div>
            <div className="flex flex-col space-y-4 lg:space-y-8">
                <div className="block text-center text-xl font-semibold text-lightBlue dark:text-lightYellow lg:pl-5 lg:text-3xl">
                    Artificial Intelligence
                </div>
                <div className="flex flex-col flex-wrap items-center space-y-4 lg:space-y-8">
                    {generateProjectItems(aiProjects)}
                </div>
            </div>
        </div>
    );
};

export default Projects;
