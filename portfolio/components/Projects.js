import ProjectItem from "./ProjectItem";

function Projects() {
    const projects = [
        {
            name: "Data Structure Visualizer",
            image: "/images/visualizer.png",
            image_alt: "",
            technologies: "Node.js, React.js, MongoDB, Azure Cloud Services",
            introduction: "Developed visualized tools for 10 sorting algorithms and 8 data structures",
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

    const projectItems = projects.map((item, index) => (
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

    return <div className="my-12 flex flex-col flex-wrap items-center space-y-8">{projectItems}</div>;
}

export default Projects;
