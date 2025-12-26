import { Github, Instagram, Mail } from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="inter-tight footer footer-horizontal footer-center text-primary-content p-6 sm:p-10">
            <aside className="flex flex-col items-center gap-2">
                <img className="w-12 sm:w-16" src="/Alva logo.png" alt="" />
                <h2 className="font-bold text-base sm:text-lg">Nextgen ALVA</h2>
                <p className="font-bold text-xs sm:text-base">
                    Turning Vision into Reality
                </p>
                <p className="text-xs sm:text-base">Copyright  {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-2 sm:gap-4">
                    <Link className="hover:text-red-600" to="https://www.youtube.com/@NextGenAlva">
                        <FaYoutube className="text-2xl" />
                    </Link>
                    {/* WhatsApp */}
                    <Link className="hover:text-green-400" to="https://wa.me/+8801873785288?text=Hello%20there!%20I%20would%20like%20to%20discuss%20about%20a%20Project.">
                        <FaWhatsapp className="text-2xl" />
                    </Link>
                    {/* Facebook */}
                    <Link className="hover:text-blue-500" to="https://www.facebook.com/profile.php?id=61584324897604">
                        <FaFacebookF className="text-xl" />
                    </Link>
                    {/* Twitter/X */}
                    <Link className="hover:text-gray-600" to="https://x.com/Next_Gen_Alva">
                        <FaXTwitter className="text-2xl" />
                    </Link>
                    {/* Instagram */}
                    <Link className="hover:text-pink-500" to="https://www.instagram.com/nextgen.alva/">
                        <Instagram />
                    </Link>
                    <Link className="hover:text-blue-400" to="mailto:nextgen.alva@gmail.com">
                        <Mail />
                    </Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;