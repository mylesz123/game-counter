import React, { useState } from "react";
import { Header } from './Header';
import { Player } from './Player';

function App () {
  let [players, setPlayers] = useState(
    {
      players: [
        {
          name: "Guil",
          score: 0,
          id: 1
        },
        {
          name: "Treasure",
          score: 0,
          id: 2
        },
        {
          name: "Ashley",
          score: 0,
          id: 3
        },
        {
          name: "James",
          score: 0,
          id: 4
        }
      ]
    }
  );

  let handleScoreChange = (index, change) => {
    setPlayers(prevState => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [...prevState.players];
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };

      console.log({...updatedPlayers[index]});
      // console.log(updatedPlayer);

      // Update the target player's score
      updatedPlayer.score += change;
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      // Update the `players` state without mutating the original state
      return {
        players: updatedPlayers
      };
    })
  }

  function handleRemovePlayer (id) {
    setPlayers(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id),
      };
    });
  }

  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={players.players.length}
      />

      {/* Players list */}
      {players.players.map((player, index) =>
        <Player
          name={player.name}
          score={player.score}
          changeScore={handleScoreChange}
          index={index}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
        />
      )} 
    </div>
  );
}

export { App };
