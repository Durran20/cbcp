import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  // const [toggle, setToggle] = useState(false);

  // const toggleDrawer = () => () => {
  //   setToggle((prevState) => !prevState);
  // };
  return (
    <div className="App">
      {/* <Navbar toggleDrawer={toggleDrawer} toggle={toggle} />
      <Sidebar toggleDrawer={toggleDrawer} toggle={toggle} /> */}
      <StudentDashboard />
    </div>
  );
}

export default App;
