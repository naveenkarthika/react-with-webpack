import React from "react";

function Button(props) {
    const { handleUpdate } = props;
    console.log('render btn');

    return <div>
        <button onClick={handleUpdate}>Click</button>
    </div>;
}

export default React.memo(Button);
