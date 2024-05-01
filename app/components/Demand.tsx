import React, {useState} from 'react';
import axios from "axios";

const Demand = () => {
    const [list, setList] = useState<Sales[]>([]);
    async function getDemand() {
        const response = await axios.get<Sales[]>(`http://localhost:3000/api/requests/getDemand`);
        setList(response.data);
    }

    return (
        <div className="mt-3">
            <button className="bg-emerald-500 px-2 py-1 ml-2 rounded-xl"
                    onClick={() => getDemand()}>Відправити
            </button>
            <div className="flex gap-2 mt-5 flex-wrap">
                {list.length > 0 ? list.map(item => (
                    <div key={item.Sales_id} className="bg-emerald-500 rounded-xl p-2 min-w-[250px]">
                        <p>Номер рейсу: {item.Flight_Number}</p>
                    </div>
                ))  : ""}
            </div>
        </div>
    );
};

export default Demand;