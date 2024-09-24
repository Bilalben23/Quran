import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const backTopBtn = useRef();

  useEffect(() => {
    const backBtn = backTopBtn.current;
    function handleBtnOnScroll() {
      const myPosition = window.scrollY;
      if (myPosition > window.innerHeight / 2) {
        backBtn.style.display = "block";
      } else {
        backBtn.style.display = "none";
      }
    }


    backBtn.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });

    document.addEventListener("scroll", handleBtnOnScroll);

    return () => {
      document.removeEventListener("scroll", handleBtnOnScroll);
      backBtn.removeEventListener("click", () => {
        window.scrollTo(0, 0);
      });
    };
  });
  return (
    <>
      <footer>
        <div>
          <p>
            اقرأ ودرس وتعلم القرآن الكريم. موقع القرآن هو صدقة جارية. نأمل أن
            نجعله سهلاً للجميع لقراءة ودراسة وتعلم القرآن الكريم. القرآن الكريم
            له العديد من الأسماء بما في ذلك القرآن الكريم، الكتاب، الفرقان،
            الموعظة، الذكر والنور.
          </p>
        </div>
        <div>
          <h3>تصفح</h3>
          <nav>
            <ul>
              <li>
                <NavLink
                  end
                  to="."
                  style={({ isActive }) => {
                    return { textDecoration: isActive ? "underline" : "none" };
                  }}
                >
                  الرئیسیة
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="tafsir"
                  style={({ isActive }) => {
                    return { textDecoration: isActive ? "underline" : "none" };
                  }}
                >
                  التفسیر
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contemplativeMoments"
                  style={({ isActive }) => {
                    return { textDecoration: isActive ? "underline" : "none" };
                  }}
                >
                  وقفات تدبریة
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  style={({ isActive }) => {
                    return { textDecoration: isActive ? "underline" : "none" };
                  }}
                >
                  حول
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="settings"
                  style={({ isActive }) => {
                    return { textDecoration: isActive ? "underline" : "none" };
                  }}
                >
                  الإعدادات
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p>
            <span>{new Date().getFullYear()}</span> &copy; جميع الحقوق محفوظة{" "}
          </p>
          <p>
            بواسطة
            <a href=""> بلال بن یوسف </a>
          </p>
          <div>
            <a href="#" title="Facebook">
              <i className="bx bxl-facebook-circle"></i>
            </a>
            <a href="#" title="Instagram">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="#" title="Whatsapp">
              <i className="bx bxl-whatsapp-square"></i>
            </a>
            <a href="#" title="Youtube">
              <i className="bx bxl-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
      <button className="backTopBtn" title="back to the top" ref={backTopBtn}>
        <i className="bx bx-up-arrow-alt"></i>
      </button>
    </>
  );
}
