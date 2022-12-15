import { Outlet, Route, Routes } from "react-router-dom";
import Loading from "./components/loading/Loading";
import { WebDevelopment } from "./pages/WebDevelopment";
import { Writing } from "./pages/Writing";
import AdminTemplate from "./templates/admin/AdminTemplate";
import AuthTemplate from "./templates/admin/AuthTemplate";
import NotFound from "./pages/NotFound";
import { WritingDetail } from "./pages/WritingDetail";
import { ProjectDetail } from "./pages/ProjectDetail";
import { HomeTemplate } from "./templates/client/HomeTemplate";
import { Homepage } from "./pages/Homepage";
import { SayHi } from "./pages/SayHi";
import { ContactDashboard } from "./components/partials/dashboard/ContactDashboard";
import { SkillDashboard } from "./components/partials/dashboard/SkillDashboard";
import { CategoryDashboard } from "./components/partials/dashboard/CategoryDashboard";
import { SubCategoryDashboard } from "./components/partials/dashboard/SubCategoryDashboard";
import { OrganizationDashboard } from "./components/partials/dashboard/OrganizationDashboard";
import { MediaDashboard } from "./components/partials/dashboard/MediaDashboard";
import { ProjectDashboard } from "./components/partials/dashboard/ProjectDashboard";
import { BlogDashboard } from "./components/partials/dashboard/BlogDashboard";
import { AuthDashboard } from "./components/partials/dashboard/AuthDashboard";
import DrawerNav from "./components/drawer/DrawerNav";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ResetPassword } from "./pages/ResetPassword";

function App() {
  return (
    <>
      <Loading />
      <DrawerNav />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<HomeTemplate />}>
            <Route
              path="/"
              element={<Homepage />}
            />
            <Route
              path="/sayhi"
              element={<SayHi />}
            />
            <Route
              path="/writing"
              element={<Writing />}
            />
            <Route
              path="/writing/:id"
              element={<WritingDetail />}
            />
            <Route
              path="/development"
              element={<WebDevelopment />}
            />
            <Route
              path="/development/project/:id"
              element={<ProjectDetail />}
            />
          </Route>
          <Route path="admin" element={<AdminTemplate />}>
            <Route path="user" element={<AuthDashboard />} />
            <Route path="contact" element={<ContactDashboard />} />
            <Route path="skill" element={<SkillDashboard />} />
            <Route path="project" element={<ProjectDashboard />} />
            <Route path="blog" element={<BlogDashboard />} />
            <Route path="dashboard" element={<Outlet />}>
              <Route path="category" element={<CategoryDashboard />} />
              <Route path="sub-category" element={<SubCategoryDashboard />} />
              <Route path="organization" element={<OrganizationDashboard />} />
              <Route path="media" element={<MediaDashboard />} />
            </Route>
          </Route>
          <Route path="authentication" element={<AuthTemplate />}>
            <Route path="signin" element={<Login />} />
            <Route path="signup" element={<Register />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="settings" element={<AuthTemplate />}>
            <Route path="account" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
