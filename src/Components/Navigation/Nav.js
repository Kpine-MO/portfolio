import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Nav.css";
import { AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

// Each link scrolls to a section id on the landing page.
const NAV_LINKS = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Featured projects", target: "projects" },
  { label: "Employer story", target: "references" },
];

const SOCIALS = [
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/chrispine-ochieng-2421ab244/", label: "LinkedIn" },
  { icon: <FaXTwitter />, href: "https://x.com", label: "X" },
  { icon: <FaInstagram />, href: "https://www.instagram.com", label: "Instagram" },
  { icon: <FaGithub />, href: "https://github.com/c4928315", label: "GitHub" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((v) => !v);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavClick = (e, target) => {
    e.preventDefault();
    closeMenu();
    if (location.pathname !== "/") {
      // Not on the landing page — go home first, then scroll once it renders.
      navigate("/");
      setTimeout(() => scrollToSection(target), 80);
    } else {
      scrollToSection(target);
    }
  };

  // Close on Escape + lock body scroll while open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="navContainer">
      <div className="flexContainer">
        <Link
          to="/"
          className="logo"
          onClick={(e) => handleNavClick(e, "home")}
        >
          <span className="logoMark">CO</span>
          <span className="logoWord">Chrispine Ochieng</span>
        </Link>

        <button
          type="button"
          className={`navToggle ${open ? "isOpen" : ""}`}
          onClick={toggleMenu}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="navToggleLine" />
          <span className="navToggleLine" />
        </button>

        <a
          className="navCta btn"
          href="https://mail.google.com/mail/u/0/?to=cpine0223@gmail.com&fs=1&tf=cm"
          target="_blank"
          rel="noreferrer"
        >
          Get in touch
        </a>
      </div>

      {/* Backdrop */}
      <div
        className={`navBackdrop ${open ? "show" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Popover card */}
      <div className={`navPopover ${open ? "show" : ""}`} role="dialog" aria-modal="true">
        <div className="navCard">
          <button
            type="button"
            className="navClose"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <AiOutlineClose size={16} />
          </button>

          <nav className="navLinks">
            <ol>
              {NAV_LINKS.map((link, i) => (
                <li key={link.label} style={{ "--i": i }}>
                  <a
                    href={`#${link.target}`}
                    onClick={(e) => handleNavClick(e, link.target)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="navDivider" />

          <div className="navSocials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="navSocial"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
