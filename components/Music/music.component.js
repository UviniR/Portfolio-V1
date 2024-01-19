"use client";
import React, { useEffect, useState } from "react";
import styles from "@styles/music.module.css";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";

const Music = () => {
  const [aud, setAud] = useState(null);

  useEffect(() => {
    setAud(document.getElementById("sound"))
  },[])

  const play = () => {
    aud.play();
    document.getElementById("play").style.display = "none";
    console.log(document.getElementsByName("stop"))
    document.getElementsByName("stop").forEach(e => {
        e.style.display = "inline";
    })
    // document.getElementById("stop").style.display = "block";
  };

  const stop = () => {
    aud.pause();
    aud.currentTime = 0;
    document.getElementById("play").style.display = "inline";
    document.getElementsByName("stop").forEach(e => {
        e.style.display = "none";
    })
  };
  return (
    <>
      {/* <div className="row justify-content-center"> */}
        {/* <div className={`text-center fs-4 pt-3 ${styles.musicTxt}`}>Hit-up to add some beats to the feast!    
          <button onClick={(_) => play()} id="play" className={styles.playBtn}>
            <HiMiniSpeakerWave size={20} color="#ccd6f6" />
          </button>
          <button onClick={(_) => stop()} id="stop" className={styles.stopBtn} name="stop">
            <HiMiniSpeakerXMark size={20} color="#ccd6f6" />
          </button>
        </div> */}
        <div className={`text-center fs-4 pt-3 ${styles.musicTxt}`}>
          <span style={{ marginRight: '20px' }}>Hit-up to add some beats to the feast!</span>
          <button onClick={(_) => play()} id="play" className={`${styles.playBtn}`}>
            <HiMiniSpeakerWave size={25} color="#ccd6f6" />
          </button>
          <button onClick={(_) => stop()} id="stop" className={`${styles.stopBtn}`} name="stop">
           <HiMiniSpeakerXMark size={25} color="#ccd6f6" />
          </button>
        </div>
      {/* </div> */}
      <audio src="/background-music.mp3" id="sound">
        Your browser does not support the audio element.
      </audio>
      {/* <div className={`text-center fs-4 pt-3 ${styles.musicTxt}`}>Hit-up to add some beats to the feast! 🔊</div> */}
    </>
  );
};

export default Music;