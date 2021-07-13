import React, { useState } from 'react';

export const FizzBuzz = () => {
    let title;
    const [result, setResult] = useState([]);
    const [fizzbuzz, setFizzbuzz] = useState("");
    const changeHandler = (event) => {
        if (Number(event.target.value) != 0 && (Number(event.target.value) % 5 === 0 || Number(event.target.value) % 3 === 0)) {
            setFizzbuzz(event.target.value);
            setResult(arr => [...arr, event.target.value])
        }
    }
    return <>

        <input type="text" onChange={changeHandler} />
        {
            result.map((data, index) => {
                if (Number(data) % 15 === 0) {
                    title = "fizzbuzz"
                } else if (Number(data) % 5 === 0) {
                    title = "buzz"
                } else {
                    title = "fizz"
                };
                return (
                    <li key={index}>
                        {index + 1} {data} {title}
                    </li>
                )
            })
        }
    </>;

}