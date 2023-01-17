import React, { useEffect, useState } from "react";
import styles from "../style/Menü.module.css";
import standardWhite from "../img/standard_white.png";
import standardBlack from "../img/standard_black.png";
import gameWinWhite from "../img/gameWin_white.png";
import gameLoseBlack from "../img/gameLose_black.png";
import gameWinBlack from "../img/gameWin_black.png";
import gameLoseWhite from "../img/gameLose_white.png";
import winFigureWhite from "../img/winFigure_white.png";
import loseFigureBlack from "../img/loseFigure_black.png";
import winFigureBlack from "../img/winFigure_black.png";
import loseFigureWhite from "../img/loseFigure_white.png";

export default function Menu({ reset, undo, turn, checkmate, captured }) {
  const [playStatus, setPlayStatus] = useState({
    img: {
      imgWhite: standardWhite,
      imgBlack: standardBlack,
    },
    info: { turn: "", captured: "" },
  });
  console.log(playStatus)
  useEffect(() => {
    if (turn === "b" && checkmate) {
      setPlayStatus({
        img: { imgWhite: gameWinWhite, imgBlack: gameLoseBlack },
        info: {
          turn: "",
          captured: "Player White Wins!",
        },
      });
    } else if (turn === "w" && checkmate) {
      setPlayStatus({
        img: { imgWhite: gameLoseWhite, imgBlack: gameWinBlack },
        info: {
          turn: "",
          captured: "Player Black Wins!",
        },
      });
    } else if (turn === "b" && typeof captured === "string") {
      setPlayStatus({
        img: { imgWhite: winFigureWhite, imgBlack: loseFigureBlack },
        info: {
          turn: "Player Black make a Move",
          captured: "You have been slain!",
        },
      });
      const interval = setInterval(() => {
        setPlayStatus({
          img: { imgWhite: standardWhite, imgBlack: standardBlack },  info: {
            turn: "Player Black make a Move",
            captured: "",
          },
        });
      }, 2000);
      return () => clearInterval(interval);
    } else if (turn === "w" && typeof captured === "string") {
      setPlayStatus({
        img: { imgWhite: loseFigureWhite, imgBlack: winFigureBlack },
        info: {
          turn: "Player White make a Move",
          captured: "You have been slain!!!",
        },
      });
      const interval = setInterval(() => {
        setPlayStatus({ img: {imgWhite: standardWhite, imgBlack: standardBlack}, info: {
          turn: "Player White make a Move",
          captured: "",
        }, });
      }, 2000);
      return () => clearInterval(interval);
    } else if (turn === "b") {
      setPlayStatus({
        img: { imgWhite: standardWhite, imgBlack: standardBlack },
        info: {
          turn: "Player Black make a Move",
          captured: "",
        },
      });
    }
    else if (turn === "w") {
      setPlayStatus({
        img: { imgWhite: standardWhite, imgBlack: standardBlack },
        info: {
          turn: "Player White make a Move",
          captured: "",
        },
      });
    }
  }, [turn, checkmate, captured,]);
  return (
    <>
      <section className={styles.menü}>
        <section className={styles.profiles}>
          <div className={styles.cardImg}>
            <img
              className={styles.profileImg}
              src={playStatus.img.imgWhite}
              alt="ProfileImg"
            />
            <h2 className={styles.profileName}>Player White</h2>
          </div>
          <div className={styles.cardImg}>
            <img
              className={styles.profileImg}
              src={playStatus.img.imgBlack}
              alt="ProfileImg"
            />
            <h2 className={styles.profileName}>Player Black</h2>
          </div>
        </section>
        <article className={styles.status}>
          <h2>{playStatus.info.turn}</h2>
          <p className={styles.info}>{playStatus.info.captured}</p>
        </article>
        <button onClick={undo}>
          <p>undo</p>
        </button>
        <button onClick={reset}>
          <p>reset</p>
        </button>
      </section>
    </>
  );
}
