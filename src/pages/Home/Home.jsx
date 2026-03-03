import Banner from "./Banner";
import GapAnimation from "./GapAnimation";
import Services from "../Services/Services";
import Clients from "./Clients";
import Team from "./Team";
import Tuition from "./Tuition";

const Home = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950">
                <Banner />
                {/* gap animation inserted here */}
                <GapAnimation />
                <Services />
                <Tuition />
                <Clients />
                <Team />
        </div>
    );
};

export default Home;