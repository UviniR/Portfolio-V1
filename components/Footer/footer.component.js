"use client";
import Image from "next/image";
import React, { useState } from "react";
import box from "@public/assets/box.gif";
import styles from "@styles/footer.module.css";
import { Button, Modal, ModalTitle } from "react-bootstrap";
import { BsFillSuitHeartFill } from "react-icons/bs"
import Link from "next/link";

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={`d-flex pt-3 pb-3 justify-content-end px-4 align-items-center`}>
        <div className="row justify-content-center text-start pt-3">
          <p className={`m-0 pe-5 ${styles.footerText}`}>Homemade by yours truly <BsFillSuitHeartFill /> <br /><span className={styles.footerTag}>Inspired by <Link className={`text-decoration-none ${styles.Link}`} target="_" href={"https://uvini.me"}>Uvini.</Link> </span></p>
        </div>
        <div onClick={handleShow} className={`${styles.btn}`}>
          <Image src={box} width={80} height={85} alt="box" />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg" className={`${styles.background}`}>

        <Modal.Body className={`modal-body ${styles.card} px-5 py-5`}>
          <h3 className={`text-start pb-3 ${styles.titles} ${styles.largeText} rounded`}>RANDOM FACTS 🎁 </h3>
          <p style={{ fontSize: "18px" }} className={styles.smallText}>
            {" "}
            <b>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..
            </b>
          </p>
          <ol className={`${styles.list} py-2`}>
            <li>
              text
            </li>
            <li>text</li>
          </ol>
          <div className="row justify-content-end">
            <div className="col-2 pe-5 pe-md-0">
              <button onClick={handleClose} className={`fs-2 py-0 pe-3 px-lg-1 ${styles.close}`}>
                👉🏻
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Footer;
