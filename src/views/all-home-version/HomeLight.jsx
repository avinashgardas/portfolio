import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import cx from "classnames";

import Home from "../../components/Home";
import About from "../../components/About";
import Portfolio from "../../components/PortfolioCreative";
import News from "../../components/News";
import Contact from "../../components/Contact";

const HomeLight = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "light");
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "dark");
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("-light");
      setIsDark(true);
    }
  };

  const handleActiveLink = (option) => {
    setActiveLink(option);
  };

  return (
    <>
      {/* Start Dark & Light Mode Swicher  */}
      <label
        className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <i className="light-text" title="Switch to Dark">
            <FaMoon />
          </i>
          <i className="dark-text" title="Switch to Light">
            <FaSun />
          </i>
        </div>
      </label>
      {/* End Dark & Light Mode Swicher  */}
      <Tabs>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="logo">
                <Link className="navbar-brand" to="/">
                  <img src="/assets/img/logo/portfolio-dark.png" alt="brand" />
                </Link>
              </div>
              {/* END LOGO */}

              <div className="menu">
                <ul>
                  {/* <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/home-run.svg"
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Tab> */}
                  <li
                    className={cx("react-tabs__tab", {
                      "react-tabs__tab--selected": activeLink === "home",
                    })}
                  >
                    <img
                      className="svg"
                      src="/assets/img/svg/home-run.svg"
                      alt="homerun"
                    />
                    <ScrollLink
                      to="home"
                      smooth={true}
                      duration={0}
                      delay={0}
                      onClick={() => handleActiveLink("home")}
                    >
                      Home
                    </ScrollLink>
                  </li>
                  {/* <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/avatar.svg"
                      alt="avatar"
                    />
                    <span className="menu_content">About</span>
                    
                  </Tab> */}
                  <li
                    className={cx("react-tabs__tab", {
                      "react-tabs__tab--selected": activeLink === "about",
                    })}
                  >
                    <img
                      className="svg"
                      src="/assets/img/svg/avatar.svg"
                      alt="avatar"
                    />
                    <ScrollLink
                      to="about"
                      smooth={true}
                      duration={0}
                      delay={0}
                      onClick={() => handleActiveLink("about")}
                    >
                      About
                    </ScrollLink>
                  </li>
                  {/* <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab> */}
                  <li
                    className={cx("react-tabs__tab", {
                      "react-tabs__tab--selected": activeLink === "portfolio",
                    })}
                  >
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <ScrollLink
                      to="portfolio"
                      smooth={true}
                      duration={0}
                      delay={0}
                      onClick={() => handleActiveLink("portfolio")}
                    >
                      Work
                    </ScrollLink>
                  </li>
                  {/* <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/paper.svg"
                      alt="paper"
                    />
                    <span className="menu_content">News</span>
                  </Tab> */}
                  <li
                    className={cx("react-tabs__tab", {
                      "react-tabs__tab--selected": activeLink === "news",
                    })}
                  >
                    <img
                      className="svg"
                      src="/assets/img/svg/paper.svg"
                      alt="paper"
                    />
                    <ScrollLink
                      to="news"
                      smooth={true}
                      duration={0}
                      delay={0}
                      onClick={() => handleActiveLink("news")}
                    >
                      Skills
                    </ScrollLink>
                  </li>
                  {/* <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/mail.svg"
                      alt="mail"
                    />
                    <span className="menu_content"> Contact</span>
                  </Tab> */}
                  <li
                    className={cx("react-tabs__tab", {
                      "react-tabs__tab--selected": activeLink === "contact",
                    })}
                  >
                    <img
                      className="svg"
                      src="/assets/img/svg/mail.svg"
                      alt="mail"
                    />
                    <ScrollLink
                      to="contact"
                      smooth={true}
                      duration={0}
                      delay={0}
                      onClick={() => handleActiveLink("contact")}
                    >
                      Contact
                    </ScrollLink>
                  </li>
                </ul>
              </div>
              {/* END MENU */}

              <div className="copyright">
                <p>&copy; {new Date().getFullYear()}</p>
              </div>
              {/* END COPYRIGHT */}
            </div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <div className="container">
                <TabPanel>
                  <div data-aos="fade-right" data-aos-duration="1200">
                    <Home />
                    <About />
                    <Portfolio />
                    <News />
                    <Contact />
                  </div>
                </TabPanel>
                {/* END HOME MENU TAB CONTENT */}

                {/* <TabPanel>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <About />
                  </div>
                </TabPanel> */}
                {/* END ABOUT MENU TAB CONTENT */}

                {/* <TabPanel>
                  <Portfolio />
                </TabPanel> */}
                {/* END PORTFOLIO MENU TAB CONTENT */}

                {/* <TabPanel>
                  <News />
                </TabPanel> */}
                {/* END NEWS MENU TAB CONTENT */}

                {/* <TabPanel>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <Contact />
                  </div>
                </TabPanel> */}
                {/* END CONTACT MENU TAB CONTENT */}
              </div>
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  );
};

export default HomeLight;
