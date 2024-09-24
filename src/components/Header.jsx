import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const menuInput = useRef();
  const menuIcon = useRef();
  const navigation = useRef();

  useEffect(() => {
    const input = menuInput.current;
    const icon = menuIcon.current;
    const nav = navigation.current;
    const links = nav.querySelectorAll("a");
    function handlePhoneMenu() {
      if (input.checked) {
        nav.classList.add("showNav");
        icon.querySelector("i").className = "bx bx-x";
      } else {
        nav.classList.remove("showNav");
        icon.querySelector("i").className = "bx bx-menu";
      }
    }

    icon.addEventListener("click", handlePhoneMenu);

    links.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("showNav");
        icon.querySelector("i").className = "bx bx-menu";
      });

      return () => {
        link.removeEventListener("click", () => {
          nav.classList.remove("showNav");
          icon.querySelector("i").className = "bx bx-menu";
        });
      };
    });

    return () => {
      icon.removeEventListener("click", handlePhoneMenu);
    };
  }, []);
  return (
    <header>
      <img
        src="https://freesvg.org/img/1617845797quran%20logo%204.png"
        alt=""
      />

      <nav ref={navigation}>
        <ul>
          <li>
            <NavLink
              end
              to="."
              className={({ isActive }) => {
                return isActive ? "activeLink" : null;
              }}
            >
              الرئیسیة
            </NavLink>
          </li>
          <li>
            <NavLink
              to="tafsir"
              className={({ isActive }) => {
                return isActive ? "activeLink" : null;
              }}
            >
              التفسیر
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contemplativeMoments"
              className={({ isActive }) => {
                return isActive ? "activeLink" : null;
              }}
            >
              وقفات تدبریة
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => {
                return isActive ? "activeLink" : null;
              }}
            >
              حول
            </NavLink>
          </li>
        </ul>
        <NavLink
          to="settings"
          className={({ isActive }) => {
            return isActive ? "activeLink" : null;
          }}
        >
          <i className="bx bxs-cog"></i>
        </NavLink>
      </nav>

      <div className="menu-icon" title="Menu">
        <label htmlFor="ch" ref={menuIcon}>
          <i className="bx bx-menu"></i>
        </label>
        <input type="checkbox" id="ch" ref={menuInput} />
      </div>
    </header>
  );
}
