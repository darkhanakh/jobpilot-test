import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Navigation />
    <div className="content">
      <Outlet />
    </div>
  </>
);

export default Layout;
