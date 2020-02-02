import React from 'react';
import PropTypes from 'prop-types';

export default function Stats(props) {
    let {players} = props;
    let totalPoints = players.reduce( (totalScore, player) => {
        return totalScore + player.score
    }, 0);

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{players.length}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{totalPoints}</td>
                </tr>
            </tbody>
        </table>
    );
}

Stats.propTypes = {
    className: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object),
};