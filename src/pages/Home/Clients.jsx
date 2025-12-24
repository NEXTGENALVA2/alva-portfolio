import WorldMap from "react-svg-worldmap";

const Clients = () => {
    const clientData = [
        { country: "us", value: 120 },
        { country: "gb", value: 80 },
        { country: "in", value: 95 },
        { country: "au", value: 75 },
        { country: "br", value: 85 },
        { country: "ca", value: 70 },
        { country: "de", value: 75 },
    ];

    const mapStyle = {
        width: "100%",
        height: "auto"
    };

    return (
        <section className="inter-tight text-white py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Mobile/Tablet Title */}
                    <div className="lg:hidden space-y-4 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            We Work For Client Around The World
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg">
                            Our global footprint is a testament to our unwavering dedication to providing exceptional services and innovative solutions to businesses, irrespective of geographical boundaries.
                        </p>
                    </div>

                    {/* World Map Side */}
                    <div className="relative order-2 lg:order-1">
                        <div className="w-full aspect-[4/3] sm:aspect-[16/9] flex items-center justify-center">
                            <WorldMap
                                backgroundColor="transparent"
                                color="#64748b"
                                tooltipBgColor="#0f172a"
                                tooltipTextColor="white"
                                valueSuffix="clients"
                                size="sm"
                                data={clientData}
                                style={mapStyle}
                            />

                            {/* Client Avatars - Hidden on smallest screens */}
                            <div className="hidden sm:block absolute top-[25%] left-[10%] z-10">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Client" className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-emerald-400 animate-pulse" />
                            </div>
                            <div className="hidden sm:block absolute top-[25%] left-[40%] z-10">
                                <img src="https://images.unsplash.com/photo-1500428596937-31f16f2210fe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Client" className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-emerald-400 animate-pulse delay-75" />
                            </div>
                            <div className="hidden sm:block absolute top-[60%] left-[30%] z-10">
                                <img src="https://images.unsplash.com/photo-1549473448-b0acc73629dc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Client" className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-emerald-400 animate-pulse delay-100" />
                            </div>
                            <div className="hidden sm:block absolute top-[45%] left-[75%] z-10">
                                <img src="https://images.unsplash.com/photo-1549473448-b0acc73629dc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Client" className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-emerald-400 animate-pulse delay-150" />
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                        {/* Desktop Title - Hidden on mobile/tablet */}
                        <div className="hidden lg:block space-y-4">
                            <h2 className="text-4xl sm:text-5xl font-bold">
                                We Work For Client<br />Around The World
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Our global footprint is a testament to our unwavering dedication to providing exceptional services and innovative solutions to businesses, irrespective of geographical boundaries.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-4 sm:gap-8">
                            <div className="text-center sm:text-left">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">600</div>
                                <div className="text-gray-400 mt-2 text-sm sm:text-base">International client</div>
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">40</div>
                                <div className="text-gray-400 mt-2 text-sm sm:text-base">Office around the world</div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        {/* Get Started button removed */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;