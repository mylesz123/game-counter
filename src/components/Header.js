import React from "react";
import PropTypes from 'prop-types';
import Stats from './Stats';
import StopWatch from './StopWatch';

export default function Header (props) {
    let { players } = props;

    return (
        <header>
            <Stats 
                className="stats"
                players={players}
            />
            <h1>{props.title}</h1>

            <StopWatch />
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object),
};
