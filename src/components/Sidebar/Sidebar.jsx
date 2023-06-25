import React, { useState } from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PaidIcon from "@mui/icons-material/Paid";
import PollIcon from "@mui/icons-material/Poll";
import MailIcon from "@mui/icons-material/Mail";
import MessageIcon from "@mui/icons-material/Message";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import CallMissedIcon from "@mui/icons-material/CallMissed";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const [toggle, setToggel] = useState(false);

  let toggelSidebarHandler = () => {
    setToggel((prev) => !prev);
  };

  return (
    <>
      <div className={toggle ? "sidebar displayNone " : "sidebar "}>
        <div className="wrapperSidebar">
          {/* ///////dashboard/////// */}
          <div className="TitleSidebar">داشبورد</div>
          <ul className="ListgroupSidebar">
            <NavLink
              to={"/"}
              className={(link) =>
                link.isActive ? "active ListSidebar link" : "ListSidebar link"
              }
            >
              {" "}
              <HomeIcon />
              <span>خانه</span>
            </NavLink>
            <NavLink to={"/analytics"} className="ListSidebar link">
              <TimelineIcon />
              <span>آنالیز</span>
            </NavLink>
            <NavLink to={"/sales"} className="ListSidebar link">
              <TrendingUpIcon />
              <span>فروش</span>
            </NavLink>
          </ul>

          {/* /////////Quick Menu/////// */}
          <div className="TitleSidebar">دسترسی سریع</div>
          <ul className="ListgroupSidebar">
            <NavLink to={"/users"} className="ListSidebar link">
              <PersonIcon />
              <span>کاربر</span>
            </NavLink>
            <NavLink to={"/newuser"} className="ListSidebar link">
              <PersonIcon />
              <span>کاربر جدید</span>
            </NavLink>
            <NavLink to={"/products"} className="ListSidebar link">
              <StorefrontIcon />
              <span>محصولات</span>
            </NavLink>
            <NavLink to={"/transactions"} className="ListSidebar link">
              <PaidIcon />
              <span>معاملات</span>
            </NavLink>
            <NavLink to={"/reports"} className="ListSidebar link">
              {" "}
              <PollIcon />
              <span>گزارشات</span>
            </NavLink>
          </ul>

          {/* //////////Notifications/////////// */}
          <div className="TitleSidebar">اطلاعیه</div>
          <ul className="ListgroupSidebar">
            <NavLink to={"/emails"} className="ListSidebar link">
              {" "}
              <MailIcon />
              <span>ایمیل</span>
            </NavLink>
            <NavLink to={"/feedback"} className="ListSidebar link">
              <CallMissedIcon />
              <span>بازخورد</span>
            </NavLink>
            <NavLink to={"/messages"} className="ListSidebar link">
              <MessageIcon />
              <span>پیام ها</span>
            </NavLink>
          </ul>

          {/* ////////////////Staff///////////////// */}
          <div className="TitleSidebar">کارکنان</div>
          <ul className="ListgroupSidebar">
            <NavLink to={"/manage"} className="ListSidebar link">
              {" "}
              <HomeRepairServiceIcon />
              <span>مدیریت</span>
            </NavLink>
            <NavLink to={"/staffanalytics"} className="ListSidebar link">
              <TimelineIcon />
              <span>آنالیز</span>
            </NavLink>
            <NavLink to={"/staffreports"} className="ListSidebar link">
              <PollIcon />
              <span>گزارشات </span>
            </NavLink>
          </ul>
        </div>
      </div>
      <div onClick={() => toggelSidebarHandler()} className="closeSidbar">
        <div className="Icons">
          <div
            className={
              !toggle ? "arrowclosOropen displayNone" : "arrowclosOropen"
            }
          >
            <KeyboardDoubleArrowLeftIcon />
          </div>
          <div
            className={
              toggle ? "arrowclosOropen displayNone" : "arrowclosOropen"
            }
          >
            <KeyboardDoubleArrowRightIcon />
          </div>
        </div>
      </div>
    </>
  );
}
