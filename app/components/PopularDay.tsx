import React, {useState} from 'react';
import axios from "axios";

const PopularDay = () => {
    const [list, setList] = useState<Flight[]>([]);
    async function getDay() {
        const response = await axios.get<Flight[]>(`http://localhost:3000/api/requests/getPopularDay`);
        setList(response.data);
    }

    return (
        <div className="mt-3">
            <button className="bg-emerald-500 px-2 py-1 ml-2 rounded-xl"
                    onClick={() => getDay()}>Відправити
            </button>
            <div className="flex gap-2 mt-5 flex-wrap">
                {list.length > 0 ? list.map(item => (
                    <div key={item.Flight_Number} className="bg-emerald-500 rounded-xl p-2 min-w-[250px]">
                        <p>День: {item.Departure_Days}</p>
                        <p>Кількість вильотів: {item.Count_of_Flights}</p>
                    </div>
                ))  : ""}
            </div>
        </div>
    );
};

export default PopularDay;