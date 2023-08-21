import React from "react";
import './Navbar.css'
import { MdClose } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import profilePicture from "./pro-pic.jpg"
import cyberLogo from "./axai-transparent-w.png";
import leftArrow from "./left-arrow.svg";
// import React from "react";
import './DropDownMenu.css'
// import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { DropDownMenu } from "./DropDownMenu";
interface NavBarProps {
  resetState: () => void;
}

const NavBar = (
  // { resetState }: NavBarProps
) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const location = useLocation();
  const desktopClasses = "mr-10 font-medium text-base";
  const mobileClasses = "mx-8 text-xl font-semibold";
  function setCloseProfile(value: boolean) {
    setIsMenuOpen(value)
  }
  return (
    // <div className="sticky top-0 z-50 flex items-center justify-center w-full bg-white md:border-b-gray-200 md:border-b-[1px] pt-3 pb-3">
    <div className="navigation-bar">
      <div className="dashboard">
        <img className={"cyber-x-x"} src={cyberLogo} alt=""></img>

        {/* <Text
          className="nav-text-dashboard-1"
          onClick={() => setActiveDashboard("DASHBOARD_1")}
        >
          Dashboard 1
        </Text> */}

        {/* <Text
          className={
            activeDashbaord === "DASHBOARD_3" // Highlights the text that is active
              ? "nav-text-dashboard-3"
              : "nav-text"
          }
          onClick={() => setActiveDashboard("DASHBOARD_3")}
        >
          Dashboard 2
        </Text> */}
      </div>
      <div className="right">
        <div className="profile-container">
          <img
            className="profile-picture"
            src={profilePicture}
            // onClick={() => setOpenProfile()}
            alt=""
          ></img>
        </div>
        <div>
          <div className="welcome-container"></div>
          <div
            className="welcome-text" //  Container for the welcome text
          >
            {/* <Text className="welcome-text-welcome">Welcome</Text>
            <Text className="welcome-text-name">{userAttributes.name}</Text> */}
          </div>
        </div>
        <div className="drop-menu">
          <img className='drop-arrow' src={leftArrow} onClick={() => setIsMenuOpen(true)} ></img>
          {
            isMenuOpen && <div onMouseLeave={() => setCloseProfile(false)}><DropDownMenu /></div>
          }
        </div>
      </div>
    </div>
    // </div>
  );
};

export default NavBar;
