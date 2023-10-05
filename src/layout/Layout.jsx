import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="max-w-6xl mx-auto font-display">
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;