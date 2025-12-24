import React, { useState } from 'react';
import { Book, Code, Zap, Clock, Monitor, Video, Users, CheckCircle, ArrowRight } from 'lucide-react';

const Tuition = () => {
    const [activeTab, setActiveTab] = useState('accelerated');

    const programs = {
        accelerated: {
            title: 'Accelerated Path',
            subtitle: 'Fast-track to web development',
            icon: <Zap className="w-6 h-6 text-amber-400" />,
            duration: '8 Weeks',
            intensity: '20 hrs/week',
            price: '$299',
            originalPrice: '$499',
            features: [
                'Web Development Fundamentals',
                'HTML5, CSS3, JavaScript ES6+',
                'Tailwind CSS & Responsive Design',
                '40+ Video Lessons',
                'Weekly Live Q&A Sessions',
                '2 Portfolio Projects'
            ],
            cta: 'Start Coding in Days'
        },
        mastery: {
            title: 'Mastery Program',
            subtitle: 'Become a professional developer',
            icon: <Code className="w-6 h-6 text-purple-400" />,
            duration: '16 Weeks',
            intensity: '25 hrs/week',
            price: '$599',
            originalPrice: '$999',
            features: [
                'Advanced Frontend Engineering',
                'React.js & Next.js Deep Dive',
                'State Management (Redux, Context)',
                'Firebase & API Integrations',
                'Professional Project Reviews',
                '5+ Portfolio Projects',
                'Career Preparation'
            ],
            cta: 'Become Job-Ready'
        }
    };

    const currentProgram = programs[activeTab];

    return (
        <div className="min-h-screen text-gray-100 py-16 px-4 sm:px-6 inter-tight">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full mb-6 border border-gray-700">
                        <span className="text-sm font-medium text-purple-400">🚀 Now Enrolling</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-amber-400 text-transparent bg-clip-text mb-4">
                        NextGenAlva
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Transform from beginner to professional developer through our immersive, project-based programs.<br/>
                        <span className="block mt-2 text-base text-gray-300">
                        <b>Our agency provides:</b> Google Ads, Meta Ads (Instagram, Facebook), Google Ads services, full-stack e-commerce websites, education websites, and custom company software solutions.
                        </span>
                    </p>
                </div>
                {/* 4 Service Grid (restored, only this section remains) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {/* Tuition Service */}
                    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 shadow-lg flex flex-col justify-between">
                        <h2 className="text-xl font-bold mb-2 text-purple-400">Tuition Service</h2>
                        <ul className="text-gray-300 mb-4 list-disc list-inside space-y-1">
                            <li>Web development (frontend & backend)</li>
                            <li>Expert mentorship</li>
                            <li>Project-based learning</li>
                            <li>Live Q&A sessions</li>
                            <li>Beginner to advanced roadmap</li>
                        </ul>
                        <a href="https://www.fiverr.com/nextgen_alva/teach-you-html-tailwindcss-javascript-react-from-scratch?context_referrer=seller_page&ref_ctx_id=bee96d39da8a4aa19e925ec3a4c677e2&pckg_id=1&pos=1&imp_id=58366c8e-9aba-4a0d-92a7-9d9962dd43ef" target="_blank" rel="noopener noreferrer" className="mt-auto btn btn-accent w-full">Get Tuition</a>
                    </div>
                    {/* Portfolio Making */}
                    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 shadow-lg flex flex-col justify-between">
                        <h2 className="text-xl font-bold mb-2 text-amber-400">Portfolio Making</h2>
                        <ul className="text-gray-300 mb-4 list-disc list-inside space-y-1">
                            <li>Professional portfolio design</li>
                            <li>Development for students & freelancers</li>
                            <li>Modern, responsive layouts</li>
                            <li>SEO optimized</li>
                            <li>Showcase your skills online</li>
                        </ul>
                        <a href="https://www.fiverr.com/nextgen_alva/create-professional-portfolio-website?context_referrer=seller_page&ref_ctx_id=bee96d39da8a4aa19e925ec3a4c677e2&pckg_id=1&pos=2&imp_id=665b6eec-b8f0-4b93-ae48-ee8042c4f746" target="_blank" rel="noopener noreferrer" className="mt-auto btn btn-accent w-full">Get Portfolio</a>
                    </div>
                    {/* Ads Service */}
                    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 shadow-lg flex flex-col justify-between">
                        <h2 className="text-xl font-bold mb-2 text-green-400">Ads Service</h2>
                        <ul className="text-gray-300 mb-4 list-disc list-inside space-y-1">
                            <li>Google Ads campaign setup</li>
                            <li>Meta Ads (Facebook, Instagram)</li>
                            <li>TikTok Ads</li>
                            <li>Campaign management</li>
                            <li>Business growth optimization</li>
                        </ul>
                        <a href="https://www.fiverr.com/nextgen_alva/meta-ads-instagram-ads-tiktok-ads-and-google-ads-expert?context_referrer=seller_page&ref_ctx_id=bee96d39da8a4aa19e925ec3a4c677e2&pckg_id=1&pos=3&imp_id=a2505ee7-ef52-4f43-80a2-1fe1940d1866" target="_blank" rel="noopener noreferrer" className="mt-auto btn btn-accent w-full">Get Ads Service</a>
                    </div>
                    {/* Full Stack Website/Software */}
                    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 shadow-lg flex flex-col justify-between">
                        <h2 className="text-xl font-bold mb-2 text-blue-400">Full Stack Website/Software</h2>
                        <ul className="text-gray-300 mb-4 list-disc list-inside space-y-1">
                            <li>E-commerce solutions</li>
                            <li>Education websites</li>
                            <li>Custom company software</li>
                            <li>Modern tech stack</li>
                            <li>Scalable & secure delivery</li>
                        </ul>
                        <a href="https://www.fiverr.com/nextgen_alva?public_mode=true" target="_blank" rel="noopener noreferrer" className="mt-auto btn btn-accent w-full">Get Website/Software</a>
                    </div>
                </div>

                {/* Program Tabs & Details (existing) */}
                <div className="flex justify-center mb-16">
                    <div className="flex space-x-2 bg-gray-800 p-1 rounded-xl border border-gray-700">
                        {Object.keys(programs).map((tab) => (
                            <button
                                key={tab}
                                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === tab ? 'bg-gray-700 shadow-md text-white' : 'text-gray-400 hover:text-white'}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                <div className="flex items-center gap-2">
                                    {programs[tab].icon}
                                    {programs[tab].title}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content (existing) */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Program Features */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            {currentProgram.icon}
                            {currentProgram.title} Features
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="bg-purple-500/10 p-1.5 rounded-lg mt-0.5">
                                    <Monitor className="w-4 h-4 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Interactive Lessons</h4>
                                    <p className="text-sm text-gray-400">Engaging video tutorials with hands-on coding exercises</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-amber-500/10 p-1.5 rounded-lg mt-0.5">
                                    <Users className="w-4 h-4 text-amber-400" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Live Sessions</h4>
                                    <p className="text-sm text-gray-400">Weekly live coding sessions with instructor support</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-blue-500/10 p-1.5 rounded-lg mt-0.5">
                                    <Code className="w-4 h-4 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Real Projects</h4>
                                    <p className="text-sm text-gray-400">Build portfolio-worthy projects with code reviews</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-green-500/10 p-1.5 rounded-lg mt-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium">1:1 Mentorship</h4>
                                    <p className="text-sm text-gray-400">Personalized guidance and career advice from industry experts</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Community & Support */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-400" />
                            Community & Support
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="bg-green-500/10 p-1.5 rounded-lg mt-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium">Dedicated Discord</h4>
                                    <p className="text-sm text-gray-400">24/7 access to our developer community</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-pink-500/10 p-1.5 rounded-lg mt-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium">Mentor Support</h4>
                                    <p className="text-sm text-gray-400">Get answers to your questions within hours</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-yellow-500/10 p-1.5 rounded-lg mt-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium">Peer Learning</h4>
                                    <p className="text-sm text-gray-400">Collaborate with fellow students on projects</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-indigo-500/10 p-1.5 rounded-lg mt-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium">Code Review Sessions</h4>
                                    <p className="text-sm text-gray-400">Get detailed feedback on your projects from instructors</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Guarantee Section */}
                <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span className="text-sm font-medium">Risk-Free Enrollment</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">14-Day Money-Back Guarantee</h3>
                        <p className="text-gray-400">
                            We're confident you'll love our program. If you're not satisfied within the first 14 days,
                            we'll give you a full refund, no questions asked.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tuition;