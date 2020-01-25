import React, { useState } from 'react';

/**
 * controlled component
 * init state for value
 * listens to change for input when value is updated
 * creates event handler to update value state
 */
const AddPlayerForm = (props) => {
    let { addNewPlayer } = props;

    let [value, setValue] = useState('');

    const handleValueChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewPlayer(value);
        console.log(value);
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
                onClick={addNewPlayer}
                value="Add Player"/>
        </form>
    );
}

export { AddPlayerForm };