import { useState, useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { fetchData } from "./fetchData";

export default function Tafsir() {
  const tafasir = useLoaderData().tafasir.soar;
  const [currentAudios, setCurrentAudios] = useState(null);
  const audiosBox = useRef();

  useEffect(() => {
    const allAudios = audiosBox.current.querySelectorAll("audio");

    allAudios.forEach((audio, index) => {
      function handlePlayAudios() {
        const box = audio.parentElement;
        box.style.opacity = 1;
        if (currentAudios && currentAudios !== audio) {
          currentAudios.pause();
        }
        setCurrentAudios(audio);
      }

      function handleEndedAudios() {
        const box = audio.parentElement;
        box.style.opacity = 0.5;
        if (allAudios.length - 1 !== index) {
          const nextAudiosIndex = allAudios[index + 1];
          nextAudiosIndex.play();
        } else {
          alert("this is the last vide");
        }
      }

      function handlePauseAudios() {
        const box = audio.parentElement;
        box.style.opacity = 0.5;
      }

      audio.addEventListener("play", handlePlayAudios);

      audio.addEventListener("ended", handleEndedAudios);

      audio.addEventListener("pause", handlePauseAudios);

      return () => {
        audio.removeEventListener("play", handlePlayAudios);

        audio.removeEventListener("ended", handleEndedAudios);

        audio.removeEventListener("pause", handlePauseAudios);
      };
    });
  }, [currentAudios]);

  // make sure the user will start scrolling from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="tafsir-section ">
      <h1>الخلاصة من تفسير الطبري</h1>
      <div className="tafasir" ref={audiosBox}>
        {tafasir.map((taf) => {
          return (
            <div key={taf.id}>
              <p>{taf.name}</p>
              <audio controls>
                <source src={taf.url} />
              </audio>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function loader() {
  return fetchData("https://mp3quran.net/api/v3/tafsir?tafsir=4&language=ar");
}
