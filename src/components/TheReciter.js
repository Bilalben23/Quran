import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { TheReciters, Quran_suras } from "./Data";
import { useDispatch } from "react-redux"
import { setServer } from "../store/theServer/serverSlice";

export default function TheReciter() {

  const spanElement = useRef()
  const searchBox = useRef()
  const dispatch = useDispatch()
  const [searchSurah, setSearchSurah] = useState(null);

  const { id } = useParams();

  const [reciter, setReciter] = useState({});
  const [orderBy, setOrderBy] = useState("ascending");
  const [surahs, setSurahs] = useState(() => {
    return Quran_suras
  })


  const filterSurah = surahs.filter((surah) => {
    return searchSurah ? surah.name.includes(searchSurah) : surahs
  })


  // set the order of the surahs:
  useEffect(() => {

    const span = spanElement.current;
    const box = searchBox.current;
    const input = box.querySelector("input");
    const clearIcon = box.querySelector("p")

    input.addEventListener("focus", () => {
      box.style.filter = "drop-shadow(1px 1px 5px #fff)"
    })
    box.addEventListener("dragend", () => {
      box.style.position = "static"
    })

    input.addEventListener("focusout", () => {
      box.style.filter = "none"
    })

    clearIcon.addEventListener("click", () => {
      setSearchSurah("")
    })

    function handleOrderChange() {
      if (span.innerText === "تصاعدي") {
        span.innerText = "تنازلي"
        setOrderBy("descending")
        setSurahs(surahs.reverse())
      } else {
        setSurahs(surahs.reverse())
        span.innerText = "تصاعدي"
        setOrderBy("ascending")
      }
    }

    span.addEventListener('click', handleOrderChange)

    return () => {
      span.removeEventListener('click', handleOrderChange)
      input.removeEventListener("focus", () => {
        box.style.filter = "drop-shadow(1px 1px 5px #fff)"
      })
      input.removeEventListener("focusout", () => {
        box.style.filter = "none"
      })

      clearIcon.removeEventListener("click", () => {
        setSearchSurah("")
      })
      box.removeEventListener("dragend", () => {
        box.style.position = "static"
      })
    }

  })

  useEffect(() => {
    const theChosenReciter = TheReciters.find((rec) => {
      return rec.id === +id;
    })
    setReciter(theChosenReciter);
  }, [id])

  // make sure the user will start scrolling from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <section className="chosen-reciter-box">
      <Link to=".."  ><i className="bx bx-right-arrow-alt"></i> عودة للرئیسیة </Link>
      <div className="chosen-reciter">
        <img src={reciter?.img || "https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg"} alt={reciter?.name} />
        <div>
          <p>القارئ : {reciter?.name || "تحمیل..."}</p>
          <p> الروایة : {reciter?.riwaya || "تحمیل..."}</p>
        </div>
      </div>

      <div className="sortBy-box">
        <p> ترتيب حسب : <span ref={spanElement}> تصاعدي </span> <i className='bx bx-chevron-up' style={{ transform: orderBy === "descending" ? "rotate(180deg)" : "none" }}></i></p>
      </div>

      <div className="search-input-box" ref={searchBox} draggable>
        <div>
          <input
            type="text"
            value={searchSurah}
            onChange={(e) => setSearchSurah(e.target.value.trimStart())}
            placeholder="ابحث عن سورة"
          />
          <p>
            <i className="fa-solid fa-circle-xmark"></i>
          </p>
        </div>
      </div>

      <div className="surahs-box">
        {filterSurah.length !== 0 ? filterSurah.map((surah) => {
          return (
            <Link key={surah.id} to={`${surah.id}`} onClick={() => {
              return dispatch(setServer(reciter?.server || ""))
            }}>
              <div>
                <p>{surah.name}</p>
                <p>{surah.ayahs} أیات</p>
              </div>
              <p className="surah-number">{surah.id}</p>
            </Link>
          )
        }) : (<div className="notFound-search">
          <p>
            <i class="fa-regular fa-face-sad-tear fa-xl"></i>
          </p>
          <p> لا توجد نتائج !</p>
        </div>)}
      </div>
    </section >
  );
}
