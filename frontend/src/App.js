import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import AdminUser from "./pages/AdminUser";
import AuditLogs from "./pages/Auditlogs";
import Contest from "./pages/Contest";
import AppSetting from "./pages/AppSetting";
import Contestrules from "./pages/Contestrules";
import Coupons from "./pages/Coupons";
import Course from "./pages/Course";
import Createcoupons from "./pages/Createcoupons";
import Dashboard from "./pages/Dashboard";
import Daycategory from "./pages/Daycategory";
import Exercise from "./pages/Exercise";
import FAQ from "./pages/FAQ";
import Feedback from "./pages/Feedback";
import FAQlist from "./pages/FAQlist";
import Gxcourse from "./pages/Gxcourse";
import Managecomments from "./pages/Managecomments";
import Manageextension from "./pages/Manageextension";
import Managemarathon from "./pages/Managemarathon";
import Manageusers from "./pages/Manageusers";
import Modules from "./pages/Modules";
import Multierror from "./pages/Multierror";
import Multilanguage from "./pages/Multilanguage";
import Notifications from "./pages/Notifications";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import Revenue from "./pages/Revenue";
import Usersessionlogs from "./pages/Usersessionlogs";
import Logout from "./pages/Logout";

import Createuser from "./components/Createuser";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    
    <div className="main">
      <div className="navbar">
        <FontAwesomeIcon className="icons" icon={faBell} />
        <FontAwesomeIcon className="icons" icon={faBars} />
      </div>

      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/adminuser" element={<AdminUser />} />
          <Route path="/app_setting" element={<AppSetting />} />
          <Route path="/audit_logs" element={<AuditLogs />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/contestrules" element={<Contestrules />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/course" element={<Course />} />
          <Route path="/createcoupons" element={<Createcoupons />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/daycategory" element={<Daycategory />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/faqlist" element={<FAQlist />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/gxcourse" element={<Gxcourse />} />
          <Route path="/managecomments" element={<Managecomments />} />
          <Route path="/manageextension" element={<Manageextension />} />
          <Route path="/managemarathon" element={<Managemarathon />} />
          <Route path="/manageusers" element={<Manageusers />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/multierror" element={<Multierror />} />
          <Route path="/multilanguage" element={<Multilanguage />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/order" element={<Order />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/usersessionlogs" element={<Usersessionlogs />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/createuser" element={<Createuser/>}/>

        </Routes>
      </BrowserRouter>

      <div className="footer1">
        <div className="footer2">
          <footer>
            <p>&copy; 2023 My Website. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;






