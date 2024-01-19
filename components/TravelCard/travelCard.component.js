"use client";
import React, { useState } from "react";
import styles from "@styles/TravelCard.module.css";
import travelData from "@data/travel";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const TravelCard = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [nexttIdx, setNexttIdx] = useState(currentIdx + 1);
  const [prevIdx, setPrevIdx] = useState(travelData.length - 1);

  const onIdxChange = (isAdd) => {
    if (isAdd) {
      if (currentIdx === travelData.length - 1) {
        setCurrentIdx(0);
        setNexttIdx(nexttIdx + 1);
        setPrevIdx(prevIdx + 1);
        return;
      }

      if (nexttIdx === travelData.length - 1) {
        setNexttIdx(0);
        setPrevIdx(prevIdx + 1);
        setCurrentIdx(currentIdx + 1);
        return;
      }

      if (prevIdx === travelData.length - 1) {
        setPrevIdx(0);
        setCurrentIdx(currentIdx + 1);
        setNexttIdx(nexttIdx + 1);
        return;
      }
      setCurrentIdx(currentIdx + 1);
      setNexttIdx(nexttIdx + 1);
      setPrevIdx(prevIdx + 1);
    } else {
      if (currentIdx === 0) {
        setCurrentIdx(travelData.length - 1);
        setNexttIdx(nexttIdx - 1);
        setPrevIdx(prevIdx - 1);
        return;
      }

      if (nexttIdx === 0) {
        setNexttIdx(travelData.length - 1);
        setCurrentIdx(currentIdx - 1);
        setPrevIdx(prevIdx - 1);
        return;
      }

      if (prevIdx === 0) {
        setPrevIdx(travelData.length - 1);
        setNexttIdx(nexttIdx - 1);
        setCurrentIdx(currentIdx - 1);
        return;
      }

      setCurrentIdx(currentIdx - 1);
      setPrevIdx(prevIdx - 1);
      setNexttIdx(nexttIdx - 1);
    }
  };

  return (
    <div className="d-flex w-100 align-items-center overflow-scroll justify-content-start">
      {travelData.map((e, idx) => (
        <div className={`${styles.card} col-6 mx-2 card p-0`} style={{ backgroundImage: `url(${e.img.src})` }} key={idx}>
          <div className={styles.overlay}>
            <div className={`row px-3 justify-content-start align-items-end pb-4 ${styles.text}`}>
              <div>
                <p className={`m-0 text-start ${styles.textContent}`}>{e.place}</p>
                <p className="m-0 fs-6 text-start fw-light">{e.country}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelCard;
