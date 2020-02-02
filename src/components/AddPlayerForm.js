import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * controlled component
 * init state for value
 * listens to change for input when value is updated
 * creates event handler to update value state
 */
export default function AddPlayerForm(props) {
    let { addNewPlayer } = props;

    let [value, setValue] = useState('');

    const handleValueChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewPlayer(value);
        setValue('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={handleValueChange}
                placeholder="Enter a players name" />

            <input
                type="submit"
                value="Add Player"/>
        </form>
    );
}

AddPlayerForm.propTypes = {
    addNewPlayer: PropTypes.func,
};