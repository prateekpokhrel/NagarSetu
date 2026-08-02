import React from "react";
import "./Sidebar.css";

import {
  LayoutDashboard,
  MapPinned,
  ChartColumn,
  LogOut,
  Building2,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/citizen",
  },
  {
    title: "Live Map",
    icon: MapPinned,
    path: "/live-map",
  },
  {
    title: "Analytics",
    icon: ChartColumn,
    path: "/analytics",
  },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <div className="logo-section">

        <div className="logo-icon">
          <Building2 size={22} />
        </div>

        <div className="logo-text">
          <h1 className="logo-title">
            Nagar<span>Setu</span>
          </h1>

          <p className="logo-subtitle">
            Smart Civic Platform
          </p>
        </div>

      </div>

      <div className="sidebar-nav">

        

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <div className="nav-icon">
                <Icon size={20} />
              </div>

              <span className="nav-title">
                {item.title}
              </span>
            </NavLink>
          );
        })}

      </div>

      <div className="sidebar-footer">

        <button className="logout-btn">

          <div className="logout-icon">
            <LogOut size={20} />
          </div>

          <span className="nav-title">
            Secure Logout
          </span>

        </button>

      </div>

    </aside>
  );
};

export default Sidebar;