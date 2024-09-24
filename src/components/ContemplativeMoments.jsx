import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { fetchData } from "./fetchData";

export default function ContemplativeMoments() {
  const videos = useLoaderData().videos;
  const videosBox = useRef();
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const allVideos = videosBox.current.querySelectorAll("video");

    allVideos.forEach((video, index) => {
      function handlePlayVideos() {
        const box = video.parentElement.parentElement;
        box.style.opacity = 1;
        if (currentVideo && currentVideo !== video) {
          currentVideo.pause();
        }
        setCurrentVideo(video);
      }

      function handleEndedVideo() {
        const box = video.parentElement.parentElement;
        box.style.opacity = 0.5;
        if (allVideos.length - 1 !== index) {
          const nextVideoIndex = allVideos[index + 1];
          nextVideoIndex.play();
        } else {
          alert("this is the last vide");
        }
      }

      function handlePauseVideo() {
        const box = video.parentElement.parentElement;
        box.style.opacity = 0.5;
      }

      video.addEventListener("play", handlePlayVideos);

      video.addEventListener("ended", handleEndedVideo);

      video.addEventListener("pause", handlePauseVideo);

      return () => {
        video.removeEventListener("play", handlePlayVideos);

        video.removeEventListener("ended", handleEndedVideo);

        video.removeEventListener("pause", handlePauseVideo);
      };
    });
  }, [currentVideo]);

  // make sure the user will start scrolling from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section style={{ marginTop: "120px", color: "#fff", textAlign: "center" }}>
      <h1>وقفات تدبریة</h1>
      <div className="videos-box" ref={videosBox}>
        {videos.map((video, index) => {
          return (
            <div key={video.id}>
              <div>
                <video
                  controls
                  preload="none"
                  poster={video.videos[0].video_thumb_url}
                >
                  <source src={video.videos[0].video_url} />
                  Your browser doesn't support video
                </video>
                <p className="video-number">{index + 1}</p>
              </div>
              <p>بصوت {video.reciter_name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function loader() {
  return fetchData("https://www.mp3quran.net/api/v3/videos");
}
