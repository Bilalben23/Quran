import { useEffect, useRef } from "react";
import { TheReciters } from "./Data";
import { Link } from "react-router-dom";

export default function HomePage() {

  const leftButton = useRef();
  const rightButton = useRef();
  const recitersBox = useRef();

  useEffect(() => {
    const leftBtn = leftButton.current;
    const rightBtn = rightButton.current;
    const theReciterBox = recitersBox.current;

    rightBtn.style.opacity = .4;

    function handleOpacityBtns() {
      const myPosition = Math.abs(theReciterBox.scrollLeft)
      if (myPosition < 60) {
        rightBtn.style.opacity = .4;
      }
      else {
        rightBtn.style.opacity = 1;
      }

      if (myPosition > 4120) {
        leftBtn.style.opacity = .4;
      }
      else {
        leftBtn.style.opacity = 1;
      }
    }

    function handleLeftBtnClick() {
      theReciterBox.scrollTo(-(theReciterBox.scrollWidth - theReciterBox.clientWidth), 0)
    }
    function handleRightBtnClick() {
      theReciterBox.scrollTo(0, 0)
    }

    theReciterBox.addEventListener("scroll", handleOpacityBtns)
    leftBtn.addEventListener("click", handleLeftBtnClick)
    rightBtn.addEventListener("click", handleRightBtnClick)

    return () => {
      leftBtn.removeEventListener("click", handleLeftBtnClick)
      rightBtn.removeEventListener("click", handleRightBtnClick)
      theReciterBox.removeEventListener("scroll", handleOpacityBtns)
    }
  })

  const favReciterId = localStorage.getItem("favReciterId");
  const favReciter = TheReciters.find((rec) => {
    return rec.id === +favReciterId
  })


  return (
    <section className="home-page">
      <h1>
        <i className="fa-solid fa-book-quran fa-sm" ></i> القرأن الکریم
      </h1>
      <div className="quran--definition-box">
        <p>
          القرآن هو كلام الله الذي نزل على النبي محمد صلى الله عليه وسلم بواسطة
          الملك جبريل، وهو يحتوي على توجيهات الله الحكيمة وأوامره ونواهيه
          العادلة في جميع جوانب الحياة. يتميز القرآن بجمال أسلوبه اللغوي وعمق
          معانيه، ويُعَتَبَر معجزة لغوية وأدبية تتحدى البشرية. يعمل القرآن كدليل
          للمسلمين في الأخلاق والعبادة والتربية والعدل والسلوك الإنساني،
          ويُعَتَبَر مصدرًا للإلهام والتعزيز الروحي. بالإضافة إلى ذلك، يعتبر
          القرآن مصدرًا للراحة والسكينة والأمل في الحياة الدنيا والآخرة.
        </p>
        <img
          src="https://w0.peakpx.com/wallpaper/246/663/HD-wallpaper-al-quran-beautiful-al-quran-blue-al-quran-holy-quran-islam-islamic.jpg"
          alt="quran"
        />
      </div>
      {
        favReciterId && (
          <>
            <h2>لقد استمعت مؤخرا ل</h2>
            <Link key={favReciter.id} to={`${favReciter.id}`} className="favReciter">
              <img src={favReciter.img} alt={favReciter.name} />
              <p className="reciter-name">{favReciter.name}</p>
            </Link>
          </>

        )
      }

      <h3>إختر قارئک المفضل</h3>
      <div className="reciters-box">
        <i className="bx bxs-chevron-right-circle" ref={rightButton}></i>
        <div className="reciters" ref={recitersBox}>
          {
            TheReciters.map((reciter) => {
              return (
                <Link key={reciter.id} to={`${reciter.id}`}>
                  <img src={reciter.img} alt={reciter.name} />
                  <p className="reciter-name">{reciter.name}</p>
                </Link>
              )
            })
          }
        </div>
        <i className="bx bxs-chevron-left-circle" ref={leftButton}></i>
      </div>
    </section>
  );
}
