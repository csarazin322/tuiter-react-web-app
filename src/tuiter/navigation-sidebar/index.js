import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateActivePath } from "../reducers/nav-reducer";

const NavigationSidebar = () => {
    const activeNav = useSelector(state => state.activeNav.active);
    const dispatch = useDispatch();
    const changeActiveNav = (newActive) => { dispatch(updateActivePath(newActive)) };
    return (
        <div className="list-group">
            <button className="list-group-item">Tuiter</button>
            <button className={`list-group-item
                    ${activeNav === 'home' ? 'active' : ''}`} onClick={() => changeActiveNav('home')}>
                Home
            </button>
            <button className={`list-group-item
                    ${activeNav === 'explore' ? 'active' : ''}`}
                onClick={() => changeActiveNav('explore')}>
                Explore
            </button>
            <button className={`list-group-item
                    ${activeNav === 'notifications' ? 'active' : ''}`}>
                Notifications
            </button>
            <button className={`list-group-item
                    ${activeNav === 'messages' ? 'active' : ''}`}>
                Messages
            </button>
            <button className={`list-group-item
                    ${activeNav === 'bookmarks' ? 'active' : ''}`}>
                Bookmarks
            </button>
            <button className={`list-group-item
                    ${activeNav === 'lists' ? 'active' : ''}`}>
                Lists
            </button>
            <button className={`list-group-item
                    ${activeNav === 'profile' ? 'active' : ''}`}>
                Profile
            </button>
            <button className={`list-group-item
                    ${activeNav === 'more' ? 'active' : ''}`}>
                More
            </button>
        </div>
    );
};

export default NavigationSidebar;