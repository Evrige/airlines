
import { query } from "@/app/api/db";

export async function GET() {
	const result = await query({
					query: `SELECT s.Flight_Number, s.Sale_Date, s.Cabin_Type,
									CASE
									WHEN s.Cabin_Type = 'Business' THEN a.Business_Class_Price
									WHEN s.Cabin_Type = 'First' THEN a.First_Class_Price
									WHEN s.Cabin_Type = 'Economy' THEN a.Economy_Class_Price
									END AS Ticket_Price,
											s.Ticket_Count, s.Discount_Category, s.Departure_Date,
											ROUND((CASE
									WHEN s.Cabin_Type = 'Business' THEN a.Business_Class_Price
									WHEN s.Cabin_Type = 'First' THEN a.First_Class_Price
									WHEN s.Cabin_Type = 'Economy' THEN a.Economy_Class_Price
									END * s.Ticket_Count * 1.20), 2) AS Total_Price
									FROM sales s
									JOIN flights f ON s.Flight_Number = f.Flight_Number
									JOIN avialiners a ON f.Board_Number = a.Board_Number;`,
					values: [],
	});

	return new Response(JSON.stringify(result), {
		status: 200,
	});
}
