import { Chess } from "chess.js";
import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import Menu from "./Menu";

export default function Board() {
  const [game, setGame] = useState(new Chess());
  const turn = game.turn()
  const checkmate = game.isCheckmate();
  let captured = null

  if(game._history.length > 0) {
    captured = game._history[game._history.length-1].move.captured
  }
  const makeMove = (move) => {
    const gameCopy = new Chess();
    gameCopy.loadPgn(game.pgn());
    gameCopy.move(move);
    
    setGame(gameCopy);
  };
  const undo = () => {
    const gameCopy = new Chess();
    gameCopy.loadPgn(game.pgn());
    gameCopy.undo();
    setGame(gameCopy);
  };
  const reset = () => {
    const gameCopy = new Chess();
    gameCopy.loadPgn(game.pgn());
    gameCopy.reset();
    setGame(gameCopy);
  };

  const onDrop = (startSquare, endSquare) => {
    makeMove({
      from: startSquare,
      to: endSquare,
    });
  };
 console.log(game)
  return (
    <>
      <div className="bord">
        <Chessboard position={game.fen()} onPieceDrop={onDrop}/>
      </div>
    <Menu reset={reset} undo={undo} checkmate={checkmate} turn={turn} captured={captured}/>
    </>
  );
}
