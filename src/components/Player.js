import React from "react";
import { Counter } from './Counter';

function Player(props) {
    return (
        <div className="player">
            <span className="player-name">
                {/* here I am using a callback function to pass data back to the parent > App */}
                <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
                {props.name}
            </span>

            <Counter score={props.score}
                    changeScore={props.changeScore}
                    index={props.index}
            />
        </div>
    );
}

export { Player }