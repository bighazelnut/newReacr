import { useState } from "react";

export const MainHui = (props) => {

    const {
        id,
        name
    } = props;

    const [valueForInput, setValueForInput] = useState('');
    const [viewData, setViewData] = useState('');

    const showTextFromClickButton = () => {
        // if (valueForInput?.length < 1) {
        //     setViewData("Введи символ долбоеб!")
        // } else {
        //     setViewData("Заебись!")
        // }
        setViewData(valueForInput?.length < 1 ? "Введи символ долбоеб!" : "Заебись!");
    }

    // {valueForInput?.length > 0 ?
    //     <p>{viewData}</p>
    //     :
    //     <p>Введи символ долбоеб</p>
    // }

    return (
        <div>
            <input 
                placeholder="Введи что-то"
                value={valueForInput}
                onChange={(e) => setValueForInput(e.target.value)}
            />
            <p>{viewData}</p>
            <button
                onClick={showTextFromClickButton}
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