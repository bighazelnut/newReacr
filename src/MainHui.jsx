import { useState } from "react";

export const MainHui = (props) => {

    const {
        id,
        name
    } = props;

    const [valueForInput, setValueForInput] = useState('');
    const [viewData, setViewData] = useState('');

    return (
        <div>
            <input 
                placeholder="Введи что-то"
                value={valueForInput}
                onChange={(e) => setValueForInput(e.target.value)}
            />
            <p>{viewData}</p>
            <button
                onClick={() => setViewData("Заебись!")}
            >
                Показать что ввел
            </button>
            <button
                onClick={() => setViewData("")}
            >
                Стереть данные
            </button>
            <h1>Name: {name}</h1>
            <p>ID: {id}</p>
        </div>
    )
}