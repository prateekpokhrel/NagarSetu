import React from "react";
import "./Navbar.css";
import {
  Bell,
  ShieldCheck,
} from "lucide-react";

const Navbar = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="navbar">

      <div className="navbar-left">

    <div className="date-card">
        <span>{today}</span>
    </div>

    <div className="network-card">
        <ShieldCheck size={16} />
        <span>Network Secure</span>
    </div>

</div>

      <div className="navbar-right">

        <div className="notification">

          <Bell size={21} />

          <span className="notification-dot"></span>

        </div>

        <div className="vertical-divider"></div>

        <div className="profile-card">

          <div className="profile-info">

            <h3>Pratik Pokhrel</h3>

            <p>KYC Verified Citizen</p>

          </div>

          <div className="profile-avatar">
            PP
          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;