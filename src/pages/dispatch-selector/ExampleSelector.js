import React from "react";
import { useSelector } from 'react-redux';


function ExampleSelector() {
    const myData = useSelector(state => state);

    return (
        <div>
            <ul>
                {myData.map(
                    item => <li>{item}</li>
                )}
            </ul>
        </div>
    )
}

export default ExampleSelector;