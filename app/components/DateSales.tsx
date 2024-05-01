import React, {useState} from 'react';
import axios from "axios";

const DateSales = () => {
	const [date, setDate] = useState("");
	const [list, setList] = useState<Sales[]>([{Sales_id: -1}]);

	async function getDate(date: string) {
		const response = await axios.get<Sales[]>(`http://localhost:3000/api/requests/getDateSale?date=${encodeURIComponent(date)}`);
		setList(response.data);
	}
	return (
		<div className="mt-3">
			<input type="date" value={date} onChange={(e) => setDate(e.target.value)}
				   className="outline-0 bg-transparent border-b-emerald-500 border-b"/>
			<button className="bg-emerald-500 px-2 py-1 ml-2 rounded-xl"
					onClick={() => {if(date) getDate(date)}}>Знайти
			</button>
			<div className="flex gap-2 mt-5">
				{list.length > 0 && list[0].Sales_id !== -1 ? list.map(item => (
					<div key={item.Sales_id} className="bg-emerald-500 rounded-xl p-2">
						<p>Тип кабіни: {item.Cabin_Type}</p>
						<p>Кількість квитків: {item.Tickets_Sold}</p>
						<p>Загальна вартість: {item.Total_Price}</p>
					</div>
				)) : list[0]?.Sales_id === -1 ? "" : "Не коректний запит"}
			</div>
		</div>
	);
};

export default DateSales;