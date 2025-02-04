import logoDH from "../assets/images/baner-ova.jpg";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to={"/"}
      >
        <div className="sidebar-brand-icon">
          <img className="w-25" src={logoDH} alt="Digital House" />
        </div>
      </Link>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to={"/"}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - Ova Flowers</span>
        </Link>
      </li>


    </ul>
  );
}

export default Sidebar;
