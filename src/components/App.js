import React, { useState } from "react";
import { Header } from './Header';
import { Player } from './Player';
import { AddPlayerForm } from './AddPlayerForm';

function App () {
  let [players, setPlayers] = useState(
    {
      contestants: [
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

  let lastPlayerId = players.contestants.length;

  let handleAddNewPlayer = (name) => {
    // console.log(...players.contestants);

    setPlayers({ 
      contestants: [
        ...players.contestants,
        {
          name,
          score: 0,
          id: lastPlayerId += 1,
        }
      ]
    });

  }

  let handleScoreChange = (index, change) => {
    setPlayers(prevState => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [...prevState.contestants];
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };
      // Update the target player's score
      updatedPlayer.score += change;
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      // Update the `players` state without mutating the original state
      return {
        contestants: updatedPlayers
      };
    })
  }

  function handleRemovePlayer (id) {
    setPlayers(prevState => {
      return {
        contestants: prevState.contestants.filter(p => p.id !== id),
      };
    });
  }

  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        players={players.contestants}
      />

      {/* Players list */}
      {players.contestants.map((player, index) =>
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

      <AddPlayerForm 
        addNewPlayer={handleAddNewPlayer}
      />

    </div>
  );
}

export { App };
