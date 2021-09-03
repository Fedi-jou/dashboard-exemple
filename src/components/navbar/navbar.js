import "./navbar.css";
import avatar from "../../assets/avatar.png";

const navbar = ({ sidebaropen, opensidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => opensidebar()}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="navbar__left">
        <a className="active_link" href="Admin">
          Admin
        </a>
        <a href="Stock"> Stock </a>
        <a href="orders"> Orders</a>
      </div>
      <div className="navbar__right">
        <a href="#">
          <i className="fa fa-search"></i>
        </a>
        <a href="#">
          <i className="fa fa-clock-o"></i>
        </a>
        <a href="#">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};
export default navbar;
