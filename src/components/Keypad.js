import React from 'react'
// import { useState } from 'react/cjs/react.production.min';

const Keypad = () => {
    // const [password, setPassword] = useState("Password")


    function handleChange() {
        (console.log("Entering password..."))
    }

    return (
        <input
            type="password"
            onChange={handleChange}
        />
    );
}

export default Keypad;