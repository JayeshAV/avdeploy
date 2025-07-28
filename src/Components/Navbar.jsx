import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/favicon.ico";
import headerbg from "../assets/images/header-bg.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const location = useLocation();
  const currentPath = location.pathname;
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      if (!mobile && mobileMenuOpen) {
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
  }, [mobileMenuOpen]);

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

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    if (companyDropdownOpen) {
      setCompanyDropdownOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setTimeout(() => {
      setMobileMenuOpen(false);
      setCompanyDropdownOpen(false);
    }, 100);
  };

  const getLinkClass = (path) => {
    const isActive = currentPath === path;
    return `nav-link px-2 px-sm-3 px-lg-4 py-2 text-white text-decoration-none ${isActive ? "text-warning border-bottom border-warning" : ""}`;
  };

  return (
    <header
      className="header fixed-top"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        paddingTop: scrolled ? "5px" : "10px",
        paddingBottom: scrolled ? "5px" : "10px",
        background: `linear-gradient(to right, rgba(0,0,0,0.4), rgba(61, 36, 13, 0.82)), url(${headerbg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        width: "100%",
        minHeight: scrolled ? "50px" : "60px"
      }}
    >
      <nav className="navbar navbar-expand-lg px-0" ref={navRef}>
        <div className="container-fluid" style={{ padding: "0 8px" , width: "95%",margin: "0 auto" }}>
          <div className="d-flex justify-content-between align-items-center w-100" style={{ minHeight: "40px"}}>
            <Link 
              to="/" 
              className="navbar-brand d-flex align-items-center text-decoration-none flex-shrink-0" 
              style={{ 
                minWidth: "fit-content",
                maxWidth: "calc(100vw - 80px)" 
              }}
            >
              <img 
                src={logo} 
                alt="Avatara Technobiz" 
                style={{ 
                  height: "clamp(24px, 4vw, 30px)", 
                  width: "clamp(24px, 4vw, 30px)", 
                  objectFit: "contain",
                  flexShrink: 0
                }} 
              />
              <span 
                className="ms-2 fw-bold text-white d-inline-block" 
                style={{ 
                  fontSize: "clamp(12px, 3.5vw, 20px)", 
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "calc(100vw - 120px)"
                }}
              >
                Avatara Technobiz
              </span>
            </Link>

            <button
              className="navbar-toggler border-0 bg-transparent p-1 d-lg-none flex-shrink-0"
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation"
              style={{ 
                zIndex: 999, 
                width: "40px", 
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <i 
                className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"} text-white`} 
                style={{ fontSize: "clamp(16px, 4vw, 20px)" }}
              ></i>
            </button>

            <div className="d-none d-lg-flex align-items-center flex-shrink-0">
              <ul className="navbar-nav d-flex flex-row align-items-center mb-0">
                {[
                  { to: "/", label: "Home" },
                  { to: "/why-us", label: "What We Do" },
                  { to: "/portfolio", label: "Portfolio" },
                  { to: "/blog", label: "Blog" },
                ].map(({ to, label }) => (
                  <li className="nav-item" key={to}>
                    <Link 
                      to={to} 
                      className={getLinkClass(to)} 
                      style={{ 
                        fontFamily: "Bricolage Grotesque", 
                        fontSize: "clamp(14px, 1.2vw, 17px)", 
                        fontWeight: "500",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}

                <li
                  className="nav-item dropdown position-relative"
                  onMouseEnter={() => setCompanyDropdownOpen(true)}
                  onMouseLeave={() => setCompanyDropdownOpen(false)}
                >
                  <span
                    className={`nav-link dropdown-toggle px-3 py-2 text-white ${["/about", "/career"].includes(currentPath) ? "text-warning border-bottom border-warning" : ""}`}
                    role="button"
                    style={{ 
                      cursor: "pointer", 
                      fontFamily: "Bricolage Grotesque", 
                      fontSize: "clamp(14px, 1.2vw, 17px)", 
                      fontWeight: "500",
                      whiteSpace: "nowrap"
                    }}
                  >
                    Company
                  </span>
                  <ul
                    className={`dropdown-menu bg-dark border-0 ${companyDropdownOpen ? "show" : ""}`}
                    style={{ 
                      minWidth: "120px", 
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)", 
                      marginTop: "0px" 
                    }}
                  >
                    <li>
                      <Link 
                        to="/about" 
                        className="dropdown-item text-white py-2" 
                        style={{ fontSize: "16px", fontWeight: "500" }}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/career" 
                        className="dropdown-item text-white py-2" 
                        style={{ fontSize: "16px", fontWeight: "500" }}
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item ms-2">
                  <Link
                    to="/contact"
                    className="btn text-decoration-none"
                    style={{
                      fontWeight: "700",
                      fontFamily: "Bricolage Grotesque",
                      padding: "8px 16px",
                      borderRadius: "30px",
                      color: "white",
                      backgroundColor: "#e0a63b",
                      fontSize: "clamp(12px, 1vw, 16px)",
                      border: "none",
                      whiteSpace: "nowrap"
                    }}
                  >
                    SCHEDULE A CALL
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`mobile-nav-collapse d-lg-none ${mobileMenuOpen ? "open" : ""}`}
            id="navbarNav"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              maxHeight: mobileMenuOpen ? "100vh" : "0",
              overflowY: mobileMenuOpen ? "auto" : "hidden",
              transition: "all 0.4s ease",
              opacity: mobileMenuOpen ? 1 : 0,
              zIndex: 998
            }}
          >
            <ul className="navbar-nav text-center py-3" style={{ padding: "12px 0" }}>
              {[
                { to: "/", label: "Home" },
                { to: "/why-us", label: "What We Do" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/blog", label: "Blog" },
              ].map(({ to, label }) => (
                <li className="nav-item py-1" key={to}>
                  <Link
                    to={to}
                    className={`nav-link text-white text-decoration-none ${currentPath === to ? "text-warning" : ""}`}
                    onClick={closeMobileMenu}
                    style={{ 
                      fontFamily: "Bricolage Grotesque", 
                      fontSize: "clamp(16px, 4vw, 20px)", 
                      fontWeight: "500", 
                      padding: "12px 20px" 
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              <li className="nav-item py-1">
                <span
                  className={`nav-link text-white ${["/about", "/career"].includes(currentPath) ? "text-warning" : ""}`}
                  role="button"
                  onClick={() => setCompanyDropdownOpen((prev) => !prev)}
                  style={{ 
                    cursor: "pointer", 
                    fontFamily: "Bricolage Grotesque", 
                    fontSize: "clamp(16px, 4vw, 18px)", 
                    fontWeight: "500", 
                    padding: "12px 20px" 
                  }}
                >
                  Company <i className={`fa-solid fa-chevron-${companyDropdownOpen ? "up" : "down"} ms-1`}></i>
                </span>
                <div 
                  className={`${companyDropdownOpen ? "d-block" : "d-none"}`} 
                  style={{ paddingLeft: "20px" }}
                >
                  <Link 
                    to="/about" 
                    className="nav-link text-white text-decoration-none d-block" 
                    onClick={closeMobileMenu} 
                    style={{ 
                      fontSize: "clamp(14px, 3.5vw, 16px)", 
                      fontWeight: "500", 
                      padding: "8px 20px" 
                    }}
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/career" 
                    className="nav-link text-white text-decoration-none d-block" 
                    onClick={closeMobileMenu} 
                    style={{ 
                      fontSize: "clamp(14px, 3.5vw, 16px)", 
                      fontWeight: "500", 
                      padding: "8px 20px" 
                    }}
                  >
                    Careers
                  </Link>
                </div>
              </li>

              <li className="nav-item py-2">
                <Link
                  to="/contact"
                  className="btn text-decoration-none"
                  onClick={closeMobileMenu}
                  style={{
                    fontWeight: "600",
                    fontFamily: "Bricolage Grotesque",
                    borderRadius: "30px",
                    color: "white",
                    backgroundColor: "#e0a63b",
                    fontSize: "clamp(12px, 3.5vw, 16px)",
                    border: "none",
                    padding: "10px 20px",
                    minWidth: "140px"
                  }}
                >
                  SCHEDULE A CALL
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;