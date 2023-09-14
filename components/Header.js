import Link from "next/link";
import React from "react";
import MainIcon from "./SVGs/MainIcon";

const Header = () => {
  return (
    <header>
      <div className="mainHeader">
        <div style={{ margin: "8px" }}></div>
        <div className="innerHeaderContainer">
          <Link href={"/"}>
            <MainIcon />
          </Link>
          <nav>
            <ul className="ulList navItemsGap">
              <li>
                <Link href="/" className="navItemText">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="navItemText">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/" className="navItemText">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/about" className="navItemText">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/" className="navItemText">
                  Support
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="ulList loginSignupItemsGap">
            <li>
              <Link href="/login" className="loginButton loginSignupText">
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup" className="buttonStyle loginSignupText">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
