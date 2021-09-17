import React, {useEffect, useState} from "react";

export default function ListOfItems({generateItems}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(generateItems);
        // console.log('Render')
    }, [generateItems]);

    return (
        <ul>
            {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    )
}