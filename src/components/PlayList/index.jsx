import React, { useState } from "react";
import {v4 as uuid} from 'uuid';

const dataBase = [
    {
        id: "1",
        title: "titulo",
        isFavorite: true,

    },

    {
        id: "2",
        title: "titulo2",
        isFavorite: false,
    },

    {
        id: "3",
        title: "titulo3",
        isFavorite: false,
    },
];

export const PlayList = () => {
    const [data, setData] = useState(dataBase);
    const [input, setInput] = useState("");

    const deleteById = (idToDelete) => {
        console.log(idToDelete);
        const newData = data.filter((item) => item.id != idToDelete);
        setData(newData);
    };

    const createItem = () => {
        
        const newItem = {
            title: input,
            id:uuid(),
            isFavorite: false,
        };

        setData([...data, newItem]);
        setInput("");
        console.log(newItem);
    };

    const handlerChange = (value) => {
        setInput(value);
    };

    return (
        <div>
            <section>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => handlerChange(e.target.value)}
                />
                <button onClick= {createItem}>ADD</button>
            </section>
            {data.map((item) => (
                <article key={item.id} className={item.isFavorite ? "isFavorite" : "noFavorite"}>
                    {item.title} -<button onClick={() => deleteById(item.id)}>x</button>
                </article>
            ))}
        </div>
    );
};
