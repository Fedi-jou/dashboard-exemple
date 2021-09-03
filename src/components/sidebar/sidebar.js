import "./sidebar.css";
import logo from "../../assets/image-1.jpg";

const Sidebar = ({ sidebaropen, closesidebar }) => {
  return (
    <div className={sidebaropen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1> Company name</h1>
        </div>
        <i
          onClick={() => closesidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>Management</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="#">Admin Management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#">Company Management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="#">Employee Management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Warehouse</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="#">Suppliers Contracts</a>
        </div>

        <h2>PAYROLL</h2>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <a href="#">Payroll</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <a href="#">Paygrade</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
