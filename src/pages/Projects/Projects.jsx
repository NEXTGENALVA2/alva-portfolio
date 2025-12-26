import { Github, ExternalLink, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const ProjectCard = ({ title, description, image, tags, liveLink, githubLink }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative bg-white rounded-xl overflow-hidden shadow-lg min-h-[260px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] transition-all duration-300 hover:shadow-xl w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Top Section - Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Bottom Section - Title, Description, Links */}
                <div className="transform transition-all duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2">
                        {title}
                    </h3>
                    <p className={`text-gray-200 text-sm mb-4 line-clamp-2 transition-all duration-500 ${isHovered ? 'line-clamp-none' : ''}`}>
                        {description}
                    </p>

                    {/* Links */}
                    <div className="flex gap-4 mt-4">
                        {liveLink && (
                            <a
                                href={liveLink}
                                className="flex items-center gap-2 px-4 py-2 bg-white text-black font-medium rounded-lg transition-all hover:bg-amber-50"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Live Site
                            </a>
                        )}
                        {githubLink && (
                            <a
                                href={githubLink}
                                className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm text-white font-medium rounded-lg transition-all hover:bg-black/70"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-4 h-4" />
                                Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


import { useEffect } from 'react';


const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://alva-portfolio.onrender.com/api/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data.map(p => ({
                    title: p.title,
                    description: p.description,
                    image: p.imageUrl,
                    tags: [],
                    liveLink: p.liveSite,
                    githubLink: p.code
                })));
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="inter-tight w-full bg-gradient-to-b from-white to-amber-50/30 min-h-[60vh]">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-10 sm:py-16 lg:py-20">
                <div className="flex flex-col items-center space-y-8 sm:space-y-12">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                            Our Projects
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-gray-600 mx-auto">
                            A collection of my recent work showcasing my skills and experience in web development.
                        </p>
                    </div>

                    {/* Loading Spinner */}
                    {loading ? (
                        <div className="flex flex-col items-center justify-center min-h-[200px]">
                            <Loader2 className="animate-spin w-12 h-12 text-amber-500 mb-4" />
                            <span className="text-lg text-amber-600 font-medium">Loading projects...</span>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
                            {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;