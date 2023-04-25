import React, { useState } from "react";
import "./SideNav.css";

const SideNav = () => {
  const [open, setOpen] = useState(true);
  
  const menuItems = [
    {
        text: "Analytics",
        icon: "icons/analytics-svgrepo-com.svg"
    },
    {
        text: "Contacts",
        icon: "icons/contacts-svgrepo-com.svg"
    },
    {
        text: "Tasks",
        icon: "icons/tasks-list-svgrepo-com.svg"
    },
    {
        text: "Bookings",
        icon: "icons/book-svgrepo-com.svg"
    },
    {
        text: "Projects",
        icon: "icons/buildings-svgrepo-com.svg"
    },
    {
        text: "Resources",
        icon: "icons/earth-svgrepo-com.svg"
    },
    {
        text: "Subscription",
        icon: "icons/credit-card-svgrepo-com.svg"
    },
    {
        text: "Call Logs",
        icon: "icons/call-svgrepo-com.svg"
    },
    {
        text: "FAQ",
        icon: "icons/about-faq-help-question-svgrepo-com.svg"
    },
    {
        text: "API",
        icon: "icons/cloud-upload-svgrepo-com.svg"
    },
    {
        text: "Lead Distribution",
        icon: "icons/people-svgrepo-com.svg"
    },
  ];

  return (
    <div
      className={open ? "side-container" : "side-container side-container-NX"}
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {open && (<div className="nav-brand">
            <img src="icons/crm_photo.png" alt="" />
          </div>
          )}
          <button
            className={
              !open ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
            {menuItems.map(({text, icon}) => 
                <a href="" className={open ? "menu-item" : "menu-item menu-item-NX"}>
                    <img src={icon} alt="" />
                    {open && <p>{text}</p>}
                    {!open && <div className="tooltip">{text}</div>}
                </a>
                )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
