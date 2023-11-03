import React, { useCallback, useState } from "react";
import Item from "./Item";
import Button from "./Button";

function App(props) {

    const [message, setMessage] = useState('Hello folks!!!');

    // Prevent the recreating the function again and again. It’s help to avoid the component re-rendering
    const handleUpdate = useCallback(() => {
        setMessage('Welcome to react...')
    }, [])

    console.log('App render');


    return <div>
        {message}
        <Button handleUpdate={handleUpdate} />
    </div>;
}

export default App;
