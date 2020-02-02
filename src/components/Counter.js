import React from "react";
import PropTypes from 'prop-types';

export default function Counter(props) {
    let {index, changeScore, score} = props;
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
            <span className="counter-score">{score}</span>
            <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
        </div>
    );
}

Counter.propTypes = {
    index: PropTypes.number, 
    changeScore: PropTypes.func, 
    score: PropTypes.number,
};