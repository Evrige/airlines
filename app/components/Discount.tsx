import React, {useState} from 'react';
import axios from "axios";

const Discount = () => {
    const [list, setList] = useState<Sales[]>([]);
    async function getDiscount() {
        const response = await axios.get<Sales[]>(`http://localhost:3000/api/requests/getDiscount`);
        setList(response.data);
    }

    return (
        <div className="mt-3">
            <button className="bg-emerald-500 px-2 py-1 ml-2 rounded-xl"
                    onClick={() => getDiscount()}>Відправити
            </button>
            <div className="flex gap-2 mt-5 flex-wrap">
                {list.length > 0 ? list.map(item => (
                    <div key={item.Sales_id} className="bg-emerald-500 rounded-xl p-2 min-w-[250px]">
                        <p>Назва знижки: {item.Discount_Category ? item.Discount_Category : "Без знижки"}</p>
                        <p>Кількість квитків: {item.Total_Count}</p>
                        <p>Загальна вартість: {item.Total_Price}</p>
                    </div>
                ))  : ""}
            </div>
        </div>
    );
};

export default Discount;