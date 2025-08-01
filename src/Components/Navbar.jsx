import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/favicon.ico";
import headerbg from "../assets/images/header-bg.jpg";
import CommonButton from "./CommonButton";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
   const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const location = useLocation();
  const currentPath = location.pathname;
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      if (!mobile) {
        setMobileMenuOpen(false);
        setCompanyDropdownOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (mobileMenuOpen || companyDropdownOpen) &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
        setCompanyDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen, companyDropdownOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/why-us", label: "What We Do" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <header
      className={`custom-navbar`}
    >
      <nav className="nav-wrapper" ref={navRef}>
        <div className="nav-inner">
          <Link to="/" className="logo-wrap">
            <img src={logo} alt="logo" />
            <span>Avatara Technobiz</span>
          </Link>

          <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>

          <div className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
            <ul>
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={currentPath === to ? "active" : ""}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            <li
  className={`dropdown ${companyDropdownOpen ? "open" : ""}`}
  onClick={() => {
    if (isMobile) {
      setCompanyDropdownOpen(!companyDropdownOpen);
    }
  }}
  onMouseEnter={() => {
    if (!isMobile) {
      setCompanyDropdownOpen(true);
    }
  }}
  onMouseLeave={() => {
    if (!isMobile) {
      setCompanyDropdownOpen(false);
    }
  }}
>
  <span className={["/about", "/career","/faq"].includes(currentPath) ? "active" : ""}>
    Company <i className="fa-solid fa-chevron-down"></i>
  </span>
  <div className="dropdown-content">
    <Link
      to="/about"
      onClick={() => {
        setMobileMenuOpen(false);
        setCompanyDropdownOpen(false);
      }}
    >
      About Us
    </Link>
    <Link
      to="/career"
      onClick={() => {
        setMobileMenuOpen(false);
        setCompanyDropdownOpen(false);
      }}
    >
      Careers
    </Link>
    <Link
      to="/faq"
      onClick={() => {
        setMobileMenuOpen(false);
        setCompanyDropdownOpen(false);
      }}
    >
      Faq
    </Link>
  </div>
</li>
 <Link
      to="/contact"
      onClick={() => {
        setMobileMenuOpen(false);
        setCompanyDropdownOpen(false);
      }}
      style={{ textDecoration: 'none', fontSize: '18px' }}
    >
      <li
        style={{
          listStyle: 'none',
          padding: '12px 15px',
          borderRadius: '5px',
          backgroundColor: isHovered ? '#E0A63B' : 'transparent',
          color: isHovered ? 'white' : '#2265AB',
          transition: 'all 0.3s ease',
          display: 'inline-block',
          border:"1px solid #E0A63B",
          cursor: 'pointer',
          fontWeight:'800'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        SCHEDULE A CALL
      </li>
    </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
