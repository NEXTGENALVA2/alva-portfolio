import React from 'react';
import {
    Check, Server, Layout, Database, Cloud, BookOpen
} from 'lucide-react';

const services = [
    {
        icon: Layout,
        title: "Frontend Web Development",
        bgColor: "bg-gradient-to-br from-red-900 to-red-800",
        iconColor: "text-red-400",
        details: [
            "Custom React, Vue, and Next.js applications",
            "Responsive and adaptive design",
            "State management with Redux/Context",
            "Performance optimization",
            "Cross-browser compatibility"
        ]
    },
    {
        icon: Server,
        title: "Backend & API Development",
        bgColor: "bg-gradient-to-br from-purple-900 to-purple-800",
        iconColor: "text-purple-400",
        details: [
            "Custom React, Vue, and Next.js applications",
            "Responsive and adaptive design",
            "State management with Redux/Context",
            "Performance optimization",
            "Cross-browser compatibility"
        ]
    },
    {
        icon: Database,
        title: "Database Architecture",
        bgColor: "bg-gradient-to-br from-purple-900 to-indigo-900",
        iconColor: "text-purple-400",
        details: [
            "Custom React, Vue, and Next.js applications",
            "Responsive and adaptive design",
            "State management with Redux/Context",
            "Performance optimization",
            "Cross-browser compatibility"
        ]
    },
    {
        icon: BookOpen,
        title: "Web Development Tutoring",
        bgColor: "bg-gradient-to-br from-purple-900 to-purple-700",
        iconColor: "text-orange-400",
        details: [
            "Custom React, Vue, and Next.js applications",
            "Responsive and adaptive design",
            "State management with Redux/Context",
            "Performance optimization",
            "Cross-browser compatibility"
        ]
    }
];

const ServiceCard = ({
    icon: Icon,
    title,
    details,
    bgColor,
    iconColor
}) => (
    <div className={`cursor-pointer inter-tight
    relative group overflow-hidden rounded-2xl p-6 
    ${bgColor}
    border border-gray-700 
    transition-all duration-500 
    transform hover:-translate-y-3 
    hover:shadow-2xl
    text-gray-200
  `}>
        <div className="flex items-center mb-4">
            <Icon className={`
        w-10 h-10 mr-4 
        ${iconColor}
        transition-colors duration-300
      `} />
            <h3 className="text-xl font-bold text-white">
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
                    <span>
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
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            details={service.details}
                            bgColor={service.bgColor}
                            iconColor={service.iconColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Services;
