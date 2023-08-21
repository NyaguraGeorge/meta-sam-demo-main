import React from "react";
import "./DropDownMenu.css";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
// import {
//   showAbout,
//   showAccount,
//   showPassword,
//   showReport,
//   store,
// } from "../../store/store";
// import { useSelector } from 'react-redux';
// import { Text } from "@aws-amplify/ui-react";

export function DropDownMenu() {
  // let isReport = useSelector(state => state.reportActive);
  // const pageActive = useSelector(state => state.pagesActive);

  const displayReport = () => {
    console.log("clicked");
    // store.dispatch(showReport(true));
  };
  const displayPassword = () => {
    console.log("clicked");
    // store.dispatch(showPassword(true));
  };
  const displayAbout = () => {
    // store.dispatch(showAbout(true));
  };

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  // const handleAbout = () => {
  //     store.dispatch(showAccount())
  // };
  // const navigate = useNavigate();
  // const accountClick = (event, path) => {
  //     navigate(path);
  // }
  return (
    <div className="dropdown-container">
      <div id="account" onClick={() => displayAbout()}>
        <span className="dropdown-content">About</span>
      </div>
      <div id="change-password">
        <span className="dropdown-content" onClick={() => displayPassword()}>
          Change Password
        </span>
      </div>

      <div id="report-problem" onClick={() => displayReport()}>
        <span className="dropdown-content">Report Problem</span>
      </div>

      <div id="logout" onClick={() => signOut()}>
        <span className="dropdown-content">Logout</span>
      </div>
    </div>
  );
}
// onClick={event => accountClick(event, "/About")} onClick={setUp()}event => accountClick(event, "/Report")onClick={displayAbout()}
// onClick={event => accountClick(event, "/About")}
// onClick={event => accountClick(event, "/ChangePassword")}
