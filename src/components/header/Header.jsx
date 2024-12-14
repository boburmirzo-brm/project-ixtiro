import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LuCircleUserRound, LuLogIn } from "react-icons/lu";

const Header = () => {
  return (
    <header id="header" className="bg-slate-200">
      <nav className="container h-20 flex items-center justify-between">
        <Link to={"/"} className="text-2xl font-bold">
          AUTH
        </Link>
        <ul className="flex gap-5">
          <li>
            <NavLink to={"/login"} className="flex items-center gap-2">
              <LuLogIn className="text-xl" />
              <span className="font-medium">Login</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
