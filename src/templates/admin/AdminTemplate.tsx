import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Banner from "../../components/partials/Banner";
import WelcomeBanner from "../../components/partials/dashboard/WelcomeBanner";
import Header from "../../components/partials/Header";
import Sidebar from "../../components/partials/Sidebar";
import { AuthState } from "../../redux/reducers/root.reducer";
import { history } from "../../utils/history/history";

export default function AdminTemplate(props: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { authLogin } = useSelector((state: AuthState) => state.auth);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  if (authLogin) {
    const auth = JSON.parse(JSON.parse(authLogin));
    const isSuperAdmin = auth.statusObj.name.toLowerCase().includes("approve");
    const isRejectAdmin = auth.statusObj.name.toLowerCase().includes("ignore");
  const name = auth.email?.split("@")[0];
    return (
      <div className="admin flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} isSuperAdmin={isSuperAdmin} isRejectAdmin={isRejectAdmin} setSidebarOpen={setSidebarOpen} />
        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-yellow-100">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} isRejectAdmin={isRejectAdmin} email={auth.email} avatar={auth.avatarObj} />
          <main className='border bg-yellow-50 rounded-3xl border-white'>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Welcome banner */}
              <WelcomeBanner isRejectAdmin={isRejectAdmin} name={name} />
              {/* Cards */}
              <Outlet />
            </div>
          </main>
          <Banner />
        </div>
      </div>
    );
  } else {
    history.push("/authentication/signin");
    window.location.reload();
    return <></>;
  }

}
