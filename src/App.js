import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/main";

function App() {
  const [sidebaropen, setSidebaropen] = useState(false);
  const opensidebar = () => {
    setSidebaropen(true);
  };
  const closesidebar = () => {
    setSidebaropen(false);
  };
  return (
    <div className="container">
      <h1>React Dashboard</h1>
      <Navbar sidebaropen={sidebaropen} opensidebar={opensidebar} />
      <Main />
      <Sidebar sidebaropen={sidebaropen} closesidebar={closesidebar} />
    </div>
  );
}

export default App;
