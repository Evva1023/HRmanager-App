import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {BsFillSunFill} from "react-icons/bs";
import {HomePageView} from "./views/HomePageView";
import {RegisterView} from "./views/RegisterView";
import {EmployeeListView} from "./views/EmployeeListView";
import {EmployeeView} from "./views/EmployeeView";
import {AddEmployeeView} from "./views/AddEmployeeView";
import {TaskListView} from "./views/TaskListView";
import {PageNotFoundView} from "./views/PageNotFoundView";
import {Footer} from "./components/Footer/Footer";
import {ThemeToggler} from "./components/ThemeToggler/ThemeToggler";
import "./index.css";

export const App = () => {  
  const [theme, setTheme] = useState("theme-light");

  return (
    <div id="app" className={theme}>
      <ThemeToggler changeTheme={() => setTheme("theme-light")} icon={<BsFillSunFill />}/>
      <ThemeToggler changeTheme={() => setTheme("theme-dark")} icon={<BsFillMoonStarsFill />}/>
      <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/employeeList" element={<EmployeeListView />} />
        <Route path="/singleEmployee/:id" element={<EmployeeView />} />
        <Route path="/add" element={<AddEmployeeView />} />
        <Route path="/taskList" element={<TaskListView />} />
        <Route path="*" element={<PageNotFoundView />} />
      </Routes>
      <Footer />
    </div>
  );
};