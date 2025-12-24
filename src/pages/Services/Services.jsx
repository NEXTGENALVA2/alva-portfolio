import React from 'react';
import {
    Check, Server, Layout, Database, Cloud, BookOpen, PenTool
} from 'lucide-react';

const services = [
    {
        icon: Layout,
        title: "Frontend Web Development",
        bgColor: "bg-[#1A1A2E]",
        hoverBg: "hover:bg-gradient-to-r from-[#16213E] to-[#0F3460]",
        iconColor: "text-[#E94560]",
        hoverIconColor: "group-hover:text-[#00FFD1]"
    },
    {
        icon: Server,
        title: "Backend & API Development  ",
        bgColor: "bg-[#2C003E]",
        hoverBg: "hover:bg-gradient-to-r from-[#510A32] to-[#810034]",
        iconColor: "text-[#FF6B6B]",
        hoverIconColor: "group-hover:text-[#4ECDC4]"
    },
    {
        icon: Database,
        title: "Database Architecture",
        bgColor: "bg-[#1B1B3A]",
        hoverBg: "hover:bg-gradient-to-r from-[#4A4E69] to-[#22223B]",
        iconColor: "text-[#9D4EDD]",
        hoverIconColor: "group-hover:text-[#E0FF4F]"
    },
    {
        icon: BookOpen,
        title: "Web Development Tutoring",
        bgColor: "bg-[#2D1B69]",
        hoverBg: "hover:bg-gradient-to-r from-[#3D1078] to-[#6A0572]",
        iconColor: "text-[#FFA07A]",
        hoverIconColor: "group-hover:text-[#00FFFF]"
    },
    // ...existing code...
];

const ServiceCard = ({
    icon: Icon,
    title,
    details,
    bgColor,
    hoverBg,
    iconColor,
    hoverIconColor
}) => (
    <div className={`cursor-pointer inter-tight
    relative group overflow-hidden rounded-2xl p-6 
    ${bgColor} ${hoverBg}
    border border-gray-800 
    transition-all duration-500 
    transform hover:-translate-y-3 
    hover:shadow-2xl
    text-gray-200
  `}>
        <div className="flex items-center mb-4">
            <Icon className={`
        w-10 h-10 mr-4 
        ${iconColor} 
        ${hoverIconColor}
        transition-colors duration-300
      `} />
            <h3 className="text-xl font-bold text-white group-hover:text-gray-100">
                {title}
            </h3>
        </div>

        <ul className="space-y-2">
            {details.map((detail, index) => (
                <li
                    key={index}
                    className="flex items-center text-gray-300 text-sm"
                >
                    <Check
                        className="w-5 h-5 mr-2 text-green-400 flex-shrink-0"
                    />
                    <span className="group-hover:text-gray-50 transition-colors">
                        {detail}
                    </span>
                </li>
            ))}
        </ul>
    </div>
);

const Services = () => {
    return (
        <div className="text-white py-16 inter-tight">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white mb-4">
                        Comprehensive Digital Solutions
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Transform your digital vision into reality with our end-to-end web development
                        and technology services. We deliver innovative solutions tailored to your unique needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {services.map((service, index) => {
                        let details = [
                            "Custom React, Vue, and Next.js applications",
                            "Responsive and adaptive design",
                            "State management with Redux/Context",
                            "Performance optimization",
                            "Cross-browser compatibility"
                        ];
                        if (service.title === "Portfolio & Design Conversion" || service.title === "Cloud & Deployment Services") {
                            details = [];
                        }
                        return (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                details={details}
                                bgColor={service.bgColor}
                                hoverBg={service.hoverBg}
                                iconColor={service.iconColor}
                                hoverIconColor={service.hoverIconColor}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Services;