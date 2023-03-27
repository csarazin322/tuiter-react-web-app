import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore";
import WhoToFollowList from "./who-to-follow/who-to-follow";
import HomeComponent from "./home/home-component";
import { useSelector } from "react-redux";

function Tuiter() {
    const activeNav = useSelector(state => state.activeNav);
    const switchActiveNav = () => {
        switch (activeNav.active) {
            case "home":
                return <HomeComponent />;
            case "explore":
                return <ExploreComponent />;
            default:
                return <HomeComponent />;
        }
    }
    return (
        <div>
            <Nav />
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar />
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{ "position": "relative" }}>
                    {switchActiveNav()}
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList />
                </div>
            </div>
        </div>
    );
}

export default Tuiter