import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Loader2 } from 'lucide-react';

const MainLayout = () => {
    const navigation = useNavigation();

    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950">
            <Navbar />
            {/* global spinner when route is loading */}
            {navigation.state === 'loading' && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <Loader2 className="animate-spin w-16 h-16 text-white" />
                </div>
            )}
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;