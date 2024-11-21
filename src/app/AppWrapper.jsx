"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Home/Navbar";

const Layout = ({ children }) => {
  const pathname = usePathname();

  // Static and dynamic paths to hide Navbar and Footer
  const hideNavbarFooterPaths = [
    "/auth/register",
    "/auth/login",
    "/auth/forget",
    "/auth/otpVerification",
    "/auth/newpassword",
    "/recruiter",
    "/recruiter/post",
    "/recruiter/hiring",
    "/recruiter/settings",
    "/recruiter/registerCompany",
    "/candidate",
    "/candidate/settings",
    "/candidate/offers",
    "/candidate/jobs",
    "/candidate/activities",
    "/admin",
  ];

  // Check if current path matches static or dynamic paths
  const shouldHideNavbarAndFooter =
    hideNavbarFooterPaths.includes(pathname) || /^\/jobs\/\d+$/.test(pathname);

  return (
    <div className="flex flex-col gap-5">
      {/* {!shouldHideNavbarAndFooter && <Navbar />} */}
      <main>{children}</main>
      {!shouldHideNavbarAndFooter && (
        <footer className="flex justify-center py-4">
          <p className="text-center text-[14px]">© 2023 QuizApp. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
};

export default Layout;
