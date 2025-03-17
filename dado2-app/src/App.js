"use client"

import React, { useState } from 'react';
//import Image from 'public/image';

function DiceGame() {
  const [playerScore, setPlayerScore] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [playerRoll, setPlayerRoll] = useState(null);
  const [player2Roll, setPlayer2Roll] = useState(null);
  const [myTurn, setMyTurn] = useState(true);
  const [nextRound, setNextRound] = useState(false);

  const rollDice = () => {

    if (gameOver) return;

    const diceRoll = Math.floor(Math.random() * 6) + 1;

    if (myTurn) {
      setPlayerRoll(diceRoll);
      setMyTurn(false);
    } else {
      setPlayer2Roll(diceRoll);
      setMyTurn(true);

      if (playerRoll !== null) {
        if (playerRoll > diceRoll) {
          setPlayerScore(prevScore => prevScore + 1);
        } else {
          setPlayer2Score(prevScore => prevScore + 1);
        }

        setNextRound(true)
      }
    }
  };

  const throwNextRound = () => {
    setPlayerRoll(null);
    setPlayer2Roll(null);
    setNextRound(false);

    if (currentRound < 5) {
      setCurrentRound(prevRound => prevRound + 1);
    } else {
      setGameOver(true);
    }
  }

  const resetGame = () => {
    setPlayerScore(0);
    setPlayer2Score(0);
    setCurrentRound(1);
    setGameOver(false);
    setPlayerRoll(null);
    setPlayer2Roll(null);
    setMyTurn(true);
    setNextRound(false)
  };

  return (
    <div>
      <h1>Jogo de Dados</h1>
      {!gameOver ? (
        <>
          <p>Rodada: {currentRound}</p>

          <div id='table'>
            <div id='screen-player-1'>
              {
                playerRoll !== null && (
                  <div>
                    <p className='nome'>Jogador 1</p>
                    <img
                      src={`/image/dado${playerRoll}.png`}
                      width={100}
                      height={100}
                      alt='Face do dado'
                    />
                  </div>
                )
              }

              <button
                onClick={rollDice}
                disabled={!myTurn || playerRoll !== null}
              >
                Rolar Dados
              </button>
            </div>
            <div id='screen-player-2'>
              {player2Roll !== null && (
                <div>
                  <p>Jogador 2</p>
                  <img
                    src={`/image/dado${player2Roll}.png`}
                    width={100}
                    height={100}
                    alt='Face do dado'
                  />
                </div>
              )}

              <button
                onClick={rollDice}
                disabled={myTurn || player2Roll !== null}
              >
                Rolar Dados
              </button>
            </div>
          </div>
          <div>
            {nextRound && (<button onClick={throwNextRound}>Próxima rodada</button>)}
          </div>

          {playerRoll !== null && player2Roll !== null && (
            <div>
              <p>Resultado da Rodada:</p>
              <p>Jogador 1: {playerRoll} | Jogador 2: {player2Roll}</p>
            </div>
          )}
        </>

      ) : (
        <div>
          <h2>Fim de Jogo!</h2>
          <p>Placar: {playerScore} X {player2Score}</p>
          {playerScore > player2Score ? (
            <p>Você venceu o jogo!</p>
          ) : playerScore < player2Score ? (
            <p>Você perdeu!</p>
          ) : (
            <p>Empate!</p>
          )}
          <button onClick={resetGame}>Jogar Novamente</button>
        </div>
      )}
      <p>Placar: {playerScore} | {player2Score}</p>
    </div>
  );
}

export default DiceGame;