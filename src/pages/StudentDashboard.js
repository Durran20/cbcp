import React from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const StudentDashboard = () => {
  const [toggle, setToggle] = useState(false);

  const toggleDrawer = () => () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <div>
      <div className="App">
        <Navbar toggleDrawer={toggleDrawer} toggle={toggle} />
        <Sidebar toggleDrawer={toggleDrawer} toggle={toggle} />
      </div>
    </div>
  );
};

export default StudentDashboard;
