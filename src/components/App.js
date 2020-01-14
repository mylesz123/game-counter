import React, { useState } from "react";
import { Header } from './Header';
import { Player } from './Player';

function App () {
  let [players, setPlayers] = useState(
    {
      players: [
        {
          name: "Guil",
          id: 1
        },
        {
          name: "Treasure",
          id: 2
        },
        {
          name: "Ashley",
          id: 3
        },
        {
          name: "James",
          id: 4
        }
      ]
    }
  );

  function handleRemovePlayer (id) {
    setPlayers(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    })
  }

  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={players.players.length}
      />

      {/* Players list */}
      {players.players.map(player =>
        <Player
          name={player.name}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
        />
      )} 
    </div>
  );
}

export { App };
