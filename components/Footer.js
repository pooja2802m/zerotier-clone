import Link from "next/link";
import React, { useState } from "react";
import MainIcon from "./SVGs/MainIcon";
import GitHub from "./SVGs/GitHub";
import LinkedIn from "./SVGs/LinkedIn";
import Facebook from "./SVGs/Facebook";
import Youtube from "./SVGs/Youtube";
import Twitter from "./SVGs/Twitter";
import Mastodon from "./SVGs/Mastodon";

const Footer = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (name) => {
    setHoveredItem(name);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const footerSections = [
    {
      heading: "Get started",
      links: [
        { text: "Download", href: "/" },
        { text: "GitHub", href: "/" },
        { text: "SDK", href: "/" },
        { text: "Partners", href: "/" },
      ],
    },
    {
      heading: "Support",
      links: [
        { text: "Documentation", href: "/" },
        { text: "Knowledge base", href: "/" },
        { text: "Community", href: "/" },
        { text: "Getting Started", href: "/" },
      ],
    },
    {
      heading: "Company",
      links: [
        { text: "Contact", href: "/" },
        { text: "About Us", href: "/" },
        { text: "Careers", href: "/" },
        { text: "Blog", href: "/" },
        { text: "Media Kit", href: "/" },
      ],
    },
  ];

  const socialMediaPlatforms = [
    { name: "GitHub", component: GitHub, link: "https://github.com" },
    { name: "LinkedIn", component: LinkedIn, link: "https://www.linkedin.com" },
    { name: "Facebook", component: Facebook, link: "https://www.facebook.com" },
    { name: "Youtube", component: Youtube, link: "https://www.youtube.com" },
    { name: "Twitter", component: Twitter, link: "https://twitter.com" },
    { name: "Mastodon", component: Mastodon, link: "https://mastodon.social" },
  ];
  return (
    <footer className="footerMainContainer">
      <div className="footerInnerContainer">
        <div className="footerContentContainer">
          <div className="footerContentInnerContainer1">
            <Link href="/">
              <MainIcon />
            </Link>
            <div className="text-1">
              {`Securely Connecting The World's Devices.`}
            </div>
          </div>
          <div style={{ margin: "auto" }}></div>
          <ul className="ulList align-item-start flex-row footerUlItemGap">
            {footerSections.map((section, index) => (
              <li key={index} style={{ paddingBottom: "20px" }}>
                <div className="footerOptions">
                  <div className="footerOptionsHeading">
                    <div className="footerOptionsHeadingText">
                      {section.heading}
                    </div>
                  </div>
                  <div className="flex-column align-item-start gap-16">
                    <ul className="ulList flex-column align-item-start gap-8">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link href={link.href} className="navItemText">
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <ul className="ulList gap-16 flex-center-align-item">
          {socialMediaPlatforms.map((platform, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(platform.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={platform.link} className="mg-r-16">
                <platform.component isHovered={hoveredItem} />
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ margin: "32px" }}></div>
        <div className="flex-row gap-16 align-item-start">
          <div className="text-1 ">
            &copy; {new Date().getFullYear()} ZeroTier, Inc. All rights
            reserved.
          </div>
          <div style={{ margin: "auto" }}></div>
          <ul className="ulList gap-16 flex-center-align-item">
            <li>
              <Link href="/" className="navItemText">
                <div className="text-1">Terms</div>
              </Link>
            </li>
            <li>
              <Link href="/" className="navItemText">
                <div className="text-1">Privacy Policy</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mg-16"></div>
    </footer>
  );
};

export default Footer;
