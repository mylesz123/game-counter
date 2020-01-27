import React from "react";
import Counter from './Counter';

export default function Player(props) {
    let { removePlayer, id, score, index, changeScore, name } = props;
    return (
        <div className="player">
            <span className="player-name">
                {/* here I am using a callback function to pass data back to the parent > App */}
                <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                {name}
            </span>

            <Counter score={score}
                    changeScore={changeScore}
                    index={index}
            />
        </div>
    );
}