"use client"
import React, {useState} from 'react';

const EndPoint = () => {
	const [city, setCity] = useState("")
	const [list, setList] = useState<Flight[]>([])
	async function getCity(location: string) {
		const response = await fetch(`http://localhost:3000/api/requests/getEndPointCity?location=${encodeURIComponent(location)}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			setList([{ Flight_Number: -1, Departure_Days: "", Departure_Location: "", Intermediate_Locations: "", Board_Number: "" }]);
			return;
		}

		const data: Flight[] = await response.json();
		setList(data);
	}

	return (
		<div>
			<input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="text-blue-400"/>
			<button onClick={() => getCity(city)}>Find</button>
			<div>
				{list.map(item => (
					<div key={item.Flight_Number}>
						<p>Номер рейсу: {item.Flight_Number}</p>
						<p>День відправки: {item.Departure_Days}</p>
						<p>Місто вильоту: {item.Departure_Location}</p>
						<p>Місто приземлення: {item.Intermediate_Locations}</p>
						<p>Бортовий номер самольоту: {item.Board_Number}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default EndPoint;