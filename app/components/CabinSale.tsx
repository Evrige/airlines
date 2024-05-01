import React, {useState} from 'react';
import axios from "axios";

const CabinSale = () => {
    const [day1, setDay1] = useState("");
    const [day2, setDay2] = useState("");
    const [list, setList] = useState<Sales[]>([{Sales_id: -1}]);

    async function getDays(day1: string, day2: string) {
        const response = await axios.get<Sales[]>(`http://localhost:3000/api/requests/getCabinSale?day1=${encodeURIComponent(day1)}&day2=${encodeURIComponent(day2)}`);
        setList(response.data);
    }
    return (
        <div className="mt-3">
            <input type="date" value={day1} onChange={(e) => setDay1(e.target.value)}
                   className="outline-0 bg-transparent border-b-emerald-500 border-b mr-5"/>
            <input type="date" value={day2} onChange={(e) => setDay2(e.target.value)}
                   className="outline-0 bg-transparent border-b-emerald-500 border-b"/>
            <button className="bg-emerald-500 px-2 py-1 ml-2 rounded-xl"
                    onClick={() => {if(day1) getDays(day1, day2)}}>Знайти
            </button>
            <div className="flex gap-2 mt-5 flex-wrap">
                {list.length > 0 && list[0].Sales_id !== -1 ? list.map(item => (
                    <div key={item.Sales_id} className="bg-emerald-500 rounded-xl p-2 min-w-[250px]">
                        <p>Номер рейсу: {item.Flight_Number}</p>
                        <p>День вильоту: {item.Cabin_Type}</p>
                        <p>Місто вильоту: {item.Total_Count}</p>
                    </div>
                )) : list[0]?.Sales_id === -1 ? "" : "Не коректний запит"}
            </div>
        </div>
    );
};

export default CabinSale;