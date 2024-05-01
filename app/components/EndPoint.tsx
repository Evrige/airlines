import React, {useState} from 'react';
import axios from "axios";

const EndPoint = () => {
    const [city, setCity] = useState("");
    const [list, setList] = useState<Flight[]>([{Flight_Number: -1}]);

    async function getCity(location: string) {
        const response = await axios.get<Flight[]>(`http://localhost:3000/api/requests/getEndPointCity?location=${encodeURIComponent(location)}`);
		setList(response.data);
    }
    return (
        <div className="mt-3">
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)}
                   className="outline-0 bg-transparent border-b-emerald-500 border-b"/>
            <button className="bg-emerald-500 px-2 py-1 ml-2 rounded-xl"
                    onClick={() => {if(city) getCity(city)}}>Знайти
            </button>
            <div className="flex gap-2 mt-5">
                {list.length > 0 && list[0].Flight_Number !== -1 ? list.map(item => (
                    <div key={item.Flight_Number} className="bg-emerald-500 rounded-xl p-2">
                        <p>Номер рейсу: {item.Flight_Number}</p>
                        <p>День вильоту: {item.Departure_Days}</p>
                        <p>Місто вильоту: {item.Departure_Location}</p>
                        <p>Місто приземлення: {item.Intermediate_Locations}</p>
                        <p>Бортовий номер самольоту: {item.Board_Number}</p>
                    </div>
                )) : list[0]?.Flight_Number === -1 ? "" : "Не коректний запит"}
            </div>
        </div>
    );
};

export default EndPoint;