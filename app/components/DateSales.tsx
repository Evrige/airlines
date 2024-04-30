import React, {useState} from 'react';
import axios from "axios";

const DateSales = () => {
	const [list, setList] = useState<Sales[]>([]);
	async function getBoard() {
		const response = await axios.get<Sales[]>(`http://localhost:3000/api/requests/getSaleTicket`);
		setList(response.data);
	}

	return (
		<div className="mt-3">
			<button className="bg-emerald-500 px-2 py-1 ml-2 rounded-xl"
							onClick={() => getBoard()}>Відправити
			</button>
			<div className="flex gap-2 mt-5 flex-wrap">
				{list.length > 0 ? list.map(item => (
					<div key={item.Sales_id} className="bg-emerald-500 rounded-xl p-2 min-w-[250px]">
						<p>Номер рейсу: {item.Flight_Number}</p>
						<p>Дата продажу: {new Date(item.Sale_Date).toLocaleDateString()}</p>
						<p>Тип салону: {item.Cabin_Type}</p>
						<p>Вартисть квитків: {item.Ticket_Price}</p>
						<p>Кількість: {item.Ticket_Count}</p>
						<p>категорія пільги: {item.Discount_Category}</p>
						<p>Дата вильоту: {new Date(item.Departure_Date).toLocaleDateString()}</p>
						<p>Загальна вартість: {item.Total_Price}</p>
					</div>
				))  : ""}
			</div>
		</div>
	);
};

export default DateSales;