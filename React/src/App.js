import React, { useState } from "react";
import Item from "./Item";

function App(props) {

    const [data, setData] = useState([{
        id: 1,
        text: 'item1'
    },
    {
        id: 2,
        text: 'item2'
    },
    {
        id: 3,
        text: 'item3'
    },
    {
        id: 4,
        text: 'item4'
    }
    ]);

    const handleAddItem = () => {
        setData((preState) => [...preState, Object.assign({}, { id: preState?.length + 1, text: 'random' })])
    }
    return <div>
        {data?.map(e => {
            return <Item key={e.id} label={e.text} />
        })}
        <button onClick={handleAddItem}>Add new</button>
    </div>;
}

export default App;
