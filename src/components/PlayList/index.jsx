import React, { useState } from 'react'

const dataBase = [
    {
        id: "1",

        title: "titulo",
        isFavorite: false,
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
    const [input, setInput]=useState("");

    const deleteById = (idToDelete) => {
        console.log(idToDelete);
        const newData = data.filter((item) => item.id != idToDelete);
        setData(newData);
    };

    const handlerChange = (value) =>{
        console.log(value);
        setInput(value);
        console.log(input);

    };

    return (
        <div>
            <section>
                <input type="text"
                value={input}  
                onChange={(e) => handlerChange(e.target.value) }/>
                <button>ADD</button>
            </section>
            {data.map((item) => (
                <article key={item.id}>
                    {item.title} -<button onClick={() => deleteById(item.id)}>x</button>
                </article>
            ))}
        </div>
    )
}