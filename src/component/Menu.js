import React, { useEffect, useState } from "react";
import styles from "../style/Menü.module.css";
import standardWhite from "../imgChessGame/standard_white.png";
import standardBlack from "../imgChessGame/standard_black.png";
import gameWinWhite from "../imgChessGame/gameWin_white.png";
import gameLoseBlack from "../imgChessGame/gameLose_black.png";
import gameWinBlack from "../imgChessGame/gameWin_black.png";
import gameLoseWhite from "../imgChessGame/gameLose_white.png";
import winFigureWhite from "../imgChessGame/winFigure_white.png";
import loseFigureBlack from "../imgChessGame/loseFigure_black.png";
import winFigureBlack from "../imgChessGame/winFigure_black.png";
import loseFigureWhite from "../imgChessGame/loseFigure_white.png";


export default function Menu({ reset, undo, turn, checkmate, captured }) {
  const [profileImg, setProfileImg] = useState({
    imgWhite: standardWhite,
    imgBlack: standardBlack,
  });
  useEffect(() => {
    if (turn === "b" && checkmate) {
      setProfileImg({ imgWhite: gameWinWhite, imgBlack: gameLoseBlack });
    } else if (turn === "w" && checkmate) {
      setProfileImg({ imgWhite: gameLoseWhite, imgBlack: gameWinBlack });
    } else if (turn === "b" && typeof captured === "string") {
      setProfileImg({ imgWhite: winFigureWhite, imgBlack: loseFigureBlack });
      const interval = setInterval(() => {
      setProfileImg({ imgWhite: standardWhite, imgBlack: standardBlack });

      }, 1000);
      return () => clearInterval(interval);
    } else if (turn === "w" && typeof captured === "string") {
      setProfileImg({ imgWhite: loseFigureWhite, imgBlack: winFigureBlack });
      const interval = setInterval(() => {
      setProfileImg({ imgWhite: standardWhite, imgBlack: standardBlack });

      }, 1000);
      return () => clearInterval(interval);
    } else {
      setProfileImg({ imgWhite: standardWhite, imgBlack: standardBlack });
    }
  }, [turn, checkmate, captured]);
  return (
    <>
      <section className={styles.menü}>
        <section className={styles.profiles}>
          <div className={styles.cardImg}>
            <img
              className={styles.profileImg}
              src={profileImg.imgWhite}
              alt="ProfileImg"
            />
            <h2>Player White</h2>
          </div>
          <div className={styles.cardImg}>
            <img
              className={styles.profileImg}
              src={profileImg.imgBlack}
              alt="ProfileImg"
            />
            <h2>Player Black</h2>
          </div>
        </section>
        <button onClick={reset}>reset</button>
        <button onClick={undo}>undo</button>
      </section>
    </>
  );
}
