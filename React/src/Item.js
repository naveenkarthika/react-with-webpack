import React from "react";

function Item(props) {
    console.log('props', props?.label);

    return <div>{props?.label}</div>;
}

export default React.memo(Item);
