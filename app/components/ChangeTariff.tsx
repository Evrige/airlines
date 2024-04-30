import React, {useState} from 'react';
import axios from "axios";

const ChangeTariff = () => {
    const [list, setList] = useState<Avialiners[]>([]);

    async function getBoard() {
        const response = await axios.get<Avialiners[]>(`http://localhost:3000/api/requests/getTariff`);
        setList(response.data);
    }

    return (
        <div className="mt-3">
            <button className="bg-emerald-500 px-2 py-1 ml-2 rounded-xl"
                    onClick={() => getBoard()}>Відправити
            </button>
            <div className="flex gap-2 mt-5">
                {list.length > 0 ? list.map(item => (
                    <div key={item.Board_Number} className="bg-emerald-500 rounded-xl p-2">
                        <p>Номер борту: {item.Board_Number}</p>
                        <p>Тип самольота: {item.Aircraft_Type}</p>
                        <p>Нова ціна бізнес классу: {item.Business_Class_Price}</p>
                        <p>Нова ціна економ классу: {item.Economy_Class_Price}</p>
                        <p>Нова ціна першого классу: {item.First_Class_Price}</p>
                    </div>
                ))  : ""}
            </div>
        </div>
    );
};

export default ChangeTariff;