import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import youHaveSlainAnEnemy from "../sound/YOU HAVE SLAIN AN Enemy.mp3"
import victory from "../sound/VICTORY.mp3"
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
    info: { captured: "" },
  });
  const [slainAnEnemy] = useSound(youHaveSlainAnEnemy);
  const [win] = useSound(victory)
  useEffect(() => {
    if (turn === "b" && checkmate) {
      win()
      setPlayStatus({
        img: { imgWhite: gameWinWhite, imgBlack: gameLoseBlack },
        info: {
          captured: "Player White Wins!",
        },
      });
    } else if (turn === "w" && checkmate) {
      win()
      setPlayStatus({
        img: { imgWhite: gameLoseWhite, imgBlack: gameWinBlack },
        info: {
          captured: "Player Black Wins!",
        },
      });
    } else if (turn === "b" && typeof captured === "string") {
      slainAnEnemy()
      setPlayStatus({
        img: { imgWhite: winFigureWhite, imgBlack: loseFigureBlack },
        info: {
          captured: "You have slain an Enemy!",
        },
      });
      const interval = setInterval(() => {
        setPlayStatus({
          img: { imgWhite: standardWhite, imgBlack: standardBlack },  info: {
            captured: "Player Black make a Move",
          },
        });
      }, 3000);
      return () => clearInterval(interval);
    } else if (turn === "w" && typeof captured === "string") {
      slainAnEnemy()
      setPlayStatus({
        img: { imgWhite: loseFigureWhite, imgBlack: winFigureBlack },
        info: {
          captured: "You have slain an Enemy!",
        },
      });
      const interval = setInterval(() => {
        setPlayStatus({ img: {imgWhite: standardWhite, imgBlack: standardBlack}, info: {
          captured: "Player White make a Move",
        }, });
      }, 3000);
      return () => clearInterval(interval);
    } else if (turn === "b") {
      setPlayStatus({
        img: { imgWhite: standardWhite, imgBlack: standardBlack },
        info: {
          captured: "Player Black make a Move",
        },
      });
    }
    else if (turn === "w") {
      setPlayStatus({
        img: { imgWhite: standardWhite, imgBlack: standardBlack },
        info: {
          captured: "Player White make a Move",
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
