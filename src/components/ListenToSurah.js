import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Quran_suras } from "./Data";
import { Link } from "react-router-dom";
import { TheReciters } from "./Data";

export default function ListenToSurah() {
  const { surahNumber } = useParams();
  const server = useSelector((state) => {
    return state?.serverReducer?.server.payload;
  });

  const theAudio = useRef();
  const backwardBtn = useRef();
  const forwardBtn = useRef();
  const playBtn = useRef();

  const [counter, setCounter] = useState(+surahNumber);
  const surahName = Quran_suras.find((surah) => {
    return surah.id === counter;
  });

  const Reciter = TheReciters.find((rec) => {
    return rec.server === server;
  });

  const [audioDuration, setAudioDuration] = useState("00:00:00");
  const [audioProgress, setAudioProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00:00");


  // Function to convert seconds to hours, minutes, and seconds format
  const formatAudioDuration = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    const forward = forwardBtn.current;
    const play = playBtn.current;
    const backward = backwardBtn.current;
    const audio = theAudio.current;

    function handlePlayButtonClick() {
      if (audio.paused) {
        audio.play();
        play.className = "fa-solid fa-circle-pause fa-xl";
      } else {
        audio.pause();
        play.className = "fa-solid fa-circle-play fa-xl";
      }

      audio.addEventListener("timeupdate", () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        setAudioProgress(progress);
        const totalDuration = Math.floor(audio.currentTime);
        const formattedDuration = formatAudioDuration(totalDuration);
        setCurrentTime(formattedDuration);

      });
    }
    function handleForwardBtnClick() {
      if (counter < 114) {
        setCounter((prevCounter) => {
          return prevCounter + 1;
        });
      }
      play.className = "fa-solid fa-circle-play fa-xl";
    }

    function handleBackwardBtnClick() {
      if (counter > 0) {
        setCounter((prevCounter) => {
          return prevCounter - 1;
        });
      }
      play.className = "fa-solid fa-circle-play fa-xl";
    }

    function handleAudioEnded() {
      if (counter < 114) {
        setCounter((prevCounter) => {
          return prevCounter + 1;
        });
      }
      play.className = "fa-solid fa-circle-play fa-xl";
      audio.pause();

      setTimeout(() => {
        audio.play();
        play.className = "fa-solid fa-circle-pause fa-xl";
      }, 1000);
    }


    play?.addEventListener("click", handlePlayButtonClick);
    forward.addEventListener("click", handleForwardBtnClick);
    backward.addEventListener("click", handleBackwardBtnClick);
    audio.addEventListener("ended", handleAudioEnded);

    return () => {
      play?.removeEventListener("click", handlePlayButtonClick);
      forward.removeEventListener("click", handleForwardBtnClick);
      backward.removeEventListener("click", handleBackwardBtnClick);
      audio.removeEventListener("ended", handleAudioEnded);
    };
  }, [counter, server]);

  useEffect(() => {
    const audio = theAudio.current;
    audio.addEventListener("loadedmetadata", () => {
      const totalDuration = Math.floor(audio.duration);
      const formattedDuration = formatAudioDuration(totalDuration);
      setAudioDuration(formattedDuration);
    });
  }, []);

  useEffect(() => {
    const audio = theAudio.current;
    audio.src = `${server}${counter.toString().padStart(3, "0")}.mp3`;
  }, [counter, server]);

  // make sure the user will start scrolling from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="play-surah-box">
      <Link to=".." relative="path">
        <i className="bx bx-right-arrow-alt"></i> عودة لجميع السور{" "}
      </Link>

      <div>
        <p>سورة {surahName?.name} </p>
        <img
          src="https://freesvg.org/img/1617314731Bismillahi%20Rahmani%20Rahim%202.png"
          alt="basmala"
        />

        <audio
          ref={theAudio}
          onPlay={() => localStorage.setItem("favReciterId", Reciter?.id)}
        >
          Your device does not support audio playback.
        </audio>
      </div>

      <div className="videoPlay-box">
        <div className="video-progress">
          <span>{currentTime}</span>
          <p value="3" style={{ width: `${audioProgress}%` }}></p>
          <span className="audio-duration">{audioDuration}</span>

        </div>
        <p>
          <i className="fa-solid fa-forward fa-lg" ref={forwardBtn}></i>
        </p>
        {server ? (
          <p>
            <i className="fa-solid fa-circle-play fa-xl" ref={playBtn}></i>
          </p>
        ) : (
          <p>
            <Link to=".." relative="path">
              <i className="fa-solid fa-rotate-right fa-lg"></i>
            </Link>
          </p>
        )}

        <p>
          <i className="fa-solid fa-backward fa-lg" ref={backwardBtn}></i>
        </p>
      </div>
    </div>
  );
}
