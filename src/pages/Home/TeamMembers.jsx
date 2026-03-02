/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const MemberCard = ({ name, role, bio, socials, image, details }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <>
            {/* Card */}
            <div
                className="relative group hover:cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg h-[400px] transition-all duration-300 hover:shadow-xl"
                onClick={() => setIsModalOpen(true)}
            >
                {/* Image Container */}
                <div className="absolute inset-0">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-0 transition-all duration-500" />
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20 opacity-0 group-hover:opacity-90 transition-all duration-500" />
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col">
                    <div className="flex flex-col justify-end h-full transition-all duration-500 transform group-hover:translate-y-[-5%] p-6">
                        {/* Name and Role */}
                        <h3 className="text-xl font-semibold text-white mb-1 transition-all duration-500">
                            {name}
                        </h3>
                        <p className="text-gray-200 font-medium text-sm transition-all duration-500">
                            {role}
                        </p>

                        {/* Bio - appears on hover */}
                        <div className="max-h-0 group-hover:max-h-24 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden mt-4">
                            <p className="text-gray-300 text-sm">
                                {bio}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div
                        ref={modalRef}
                        className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl"
                    >
                        {/* Glass overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl pointer-events-none" />
                        
                        <div className="relative flex flex-col md:flex-row gap-8 p-8">
                            {/* Image Section */}
                            <div className="w-full md:w-1/3 flex flex-col items-center">
                                <div className="relative">
                                    <img
                                        src={image}
                                        alt={name}
                                        className="w-64 h-64 rounded-full object-cover border-4 border-white/20 shadow-xl"
                                    />
                                    <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-br from-primary/30 to-secondary/30 mix-blend-overlay pointer-events-none" />
                                </div>
                                <h3 className="text-2xl font-bold mt-6 text-white">{name}</h3>
                                <p className="text-primary-300 font-medium mt-1">{role}</p>

                                {/* Social Links */}
                                <div className="flex gap-4 mt-6">
                                    {socials.linkedin && (
                                        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" 
                                           className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white hover:text-primary-200">
                                            <FaLinkedin className='text-xl' />
                                        </a>
                                    )}
                                    {socials.github && (
                                        <a href={socials.github} target="_blank" rel="noopener noreferrer" 
                                           className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white hover:text-primary-200">
                                            <FaGithub className='text-xl' />
                                        </a>
                                    )}
                                    {socials.email && (
                                        <a href={`mailto:${socials.email}`} 
                                           className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white hover:text-primary-200">
                                            <MdEmail className='text-xl' />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="w-full md:w-2/3">
                                <h4 className="text-xl font-bold mb-4 text-primary-300">About</h4>
                                <p className="mb-6 text-gray-100 font-medium">{details.about}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Education */}
                                    <div>
                                        <h4 className="text-lg font-semibold mb-3 text-primary-300">Education</h4>
                                        <ul className="space-y-3">
                                            {details.education.map((edu, index) => (
                                                <li key={index} className="text-gray-100">
                                                    <p className="font-bold text-white">{edu.degree}</p>
                                                    <p className="text-sm text-gray-300 mt-1">{edu.institution} ({edu.year})</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Skills */}
                                    <div>
                                        <h4 className="text-lg font-semibold mb-3 text-primary-300">Skills</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {details.skills.map((skill, index) => (
                                                <span key={index} 
                                                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 transition-all">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Projects */}
                                    {details.projects && (
                                        <div className="md:col-span-2">
                                            <h4 className="text-lg font-semibold mb-3 text-primary-300">Notable Projects</h4>
                                            <div className="space-y-4">
                                                {details.projects.map((project, index) => (
                                                    <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all">
                                                        <h5 className="font-bold text-white">{project.name}</h5>
                                                        <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                                                        {/* project.link && (
                                                            <a
                                                                href={project.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-block mt-3 text-sm font-medium text-primary-300 hover:text-primary-200 transition-all"
                                                            >
                                                                View Project →
                                                            </a>
                                                        ) */} 
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Modal Action */}
                        <div className="flex justify-end p-6 bg-white/5 border-t border-white/10 rounded-b-xl">
                            <button
                                className="btn  hover:opacity-90 shadow-lg transition-all duration-300 mr-3"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Close
                            </button>
                            {/* socials.portfolio && (
                                <a
                                    href={socials.portfolio}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-accent  hover:opacity-90 transition-all duration-300 shadow-lg"
                                >
                                    View Portfolio
                                </a>
                            ) */}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const TeamMembers = () => {
    const members = [
        {
            name: "Md. Emon",
            role: "Machine Learning Engineer",
            bio: "Building intelligent systems that learn and adapt to solve complex problems.",
            image: "https://avatars.githubusercontent.com/u/146655229?v=4",
            socials: {
                linkedin: "https://linkedin.com/",
                github: "https://github.com/mdemon201287",
                email: "mdemon@gmail.com",
                portfolio: "https://mdemon-portfolio.com"
            },
            details: {
                about: "Passionate ML engineer with expertise in deep learning and computer vision. Specializes in creating end-to-end machine learning pipelines and deploying models in production environments.",
                education: [
                    {
                        degree: "BSc in Computer Science & Engineering",
                        institution: "United International University (UIU)",
                        year: "2025"
                    }
                ],
                skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP", "AWS"],
                projects: [
                    {
                        name: "Autonomous Vehicle Perception System",
                        description: "Developed a real-time object detection system for autonomous vehicles using YOLOv5.",
                        link: "https://github.com/mdemon201287/autonomous-vehicle"
                    },
                    {
                        name: "Medical Image Segmentation",
                        description: "Created a deep learning model for segmenting tumors in MRI scans with 98% accuracy."
                    }
                ]
            }
        },
        {
            name: "Ornob Aadi",
            role: "UI/UX & Frontend Developer",
            bio: "Crafting beautiful and intuitive user interfaces that engage and delight users.",
            image: "https://i.ibb.co.com/HNkhYGc/00000-PORTRAIT-00000-BURST20190124113738260-2.jpg",
            socials: {
                linkedin: "https://linkedin.com/in/ornobaadi",
                github: "https://github.com/ornobaadi",
                email: "aadi4789@gmail.com",
                portfolio: "https://ornobaadi-1.web.app/"
            },
            details: {
                about: "Creative frontend developer with a strong focus on user experience. Combines technical skills with design sensibility to build interfaces that are both functional and aesthetically pleasing.",
                education: [
                    {
                        degree: "BSc in Computer Science & Engineering",
                        institution: "North South University (NSU)",
                        year: "2024"
                    },
                ],
                skills: ["React", "Figma", "Tailwind CSS", "Firebase", "Prototyping", "Responsiveness", "User Research",],
                projects: [
                    {
                        name: "Tech Hunt - Trending Tech Everyday",
                        description: "An online platform for discovering and purchasing the latest tech products.",
                        link: "https://tech-hunt-39126.web.app/"
                    },
                    {
                        name: "Lingo Bingo - Language Learning",
                        description: "Lingo Bingo enhanced vocabulary retention with interactive lessons and tutorials.",
                        link: "https://lingo-bingo-6af61.web.app/"
                    }
                ]
            }
        },
        {
            name: "Mashayeakh Islam",
            role: "Database & Backend Developer",
            bio: "Building robust and scalable backend systems that power our applications.",
            image: "https://avatars.githubusercontent.com/u/59131868?v=4",
            socials: {
                linkedin: "https://linkedin.com/",
                github: "https://github.com/mashayeakh",
                email: "mashayeakh@example.com",
                portfolio: "https://mashayekh.com"
            },
            details: {
                about: "Backend specialist with extensive experience in database design and API development. Focuses on creating efficient, secure, and maintainable server-side architectures.",
                education: [
                    {
                        degree: "BSc in Computer Science & Engineering",
                        institution: "American International University - Bangladesh (AIUB)",
                        year: "2023"
                    }
                ],
                skills: ["Node.js", "Expresss.js", "PostgreSQL", "MongoDB", "GraphQL", "Docker", "AWS", "Java", "Springboot"],
                projects: [
                    {
                        name: "Real-time Analytics Platform",
                        description: "Built a distributed system for processing and analyzing 1M+ events per second.",
                        link: "https://github.com/mashayeakh/analytics-platform"
                    },
                    {
                        name: "Database Migration Tool",
                        description: "Created a tool for seamless migration between different database systems."
                    }
                ]
            }
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {members.map((member, index) => (
                <MemberCard key={index} {...member} />
            ))}
        </div>
    );
};

export default TeamMembers;