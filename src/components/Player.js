import React from "react";
import Counter from './Counter';
import PropTypes from 'prop-types';
import CrownLogo from './icons/CrownLogo';
export default function Player(props) {
    let { removePlayer, id, score, index, changeScore, name, highScore } = props;
    
    function applyHighScore (number) {
        return (score < number || score === 0) ? false : true;
    }
    const highlight = applyHighScore(highScore) ? "is-high-score" : "";

    return (
        <div className="player">
            <span className="player-name">
                {/* here I am using a callback function to pass data back to the parent > App */}
                <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                <CrownLogo highlight={highlight} />
                {name}
            </span>

            <Counter score={score}
                    changeScore={changeScore}
                    index={index}
            />
        </div>
    );
}

Player.propTypes = {
    name: PropTypes.string,
    score: PropTypes.number,
    changeScore: PropTypes.func, 
    index: PropTypes.number,
    id: PropTypes.number,
    removePlayer: PropTypes.func,
};