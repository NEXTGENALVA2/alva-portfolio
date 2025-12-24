import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import banner from "../../../public/banner.json";
import Lottie from "lottie-react";

const Banner = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="w-full text-white min-h-screen">
            <div className="inter-tight max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col items-center space-y-12">
                    {/* Text Content */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                            Build Your Digital Future
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                            At ALVA, we create reliable web and software solutions tailored to your needs.
                            From frontend to full-stack, we bring your ideas to life.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            {/* Get Started button added */}
                            <a
                                href="https://www.fiverr.com/nextgen_alva?public_mode=true"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success btn-outline px-4 flex items-center gap-2"
                            >
                                Get Started
                            </a>
                            <button
                                onClick={() => setIsOpen(true)}
                                className="btn btn-accent btn-outline px-4 flex items-center gap-2"
                            >
                                <FaPlayCircle />
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Animation Container */}
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                        <Lottie className="w-[300px] md:w-[600px]" animationData={banner} loop={true} />
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-40 backdrop-blur-md">
                    <div className="relative bg-transparent w-[90%] md:w-[80%] lg:w-[70%] max-w-4xl">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-[-40px] right-0 text-white text-3xl font-bold cursor-pointer"
                        >
                            ✕
                        </button>

                        {/* Embedded YouTube Video */}
                        <div className="relative w-full aspect-[16/9]">
                            <iframe
                                className="w-full h-full rounded-lg border-3 border-white/30 shadow-lg"
                                src="https://www.youtube.com/embed/84wpM5a3EK4?autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Banner;
