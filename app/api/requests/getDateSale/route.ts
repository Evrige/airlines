
import { query } from "@/app/api/db";
import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
	const date = request.nextUrl.searchParams.get('date');
	if (!date) {
		return new Response("Date parameter is missing", { status: 400 });
	}

	const flights = await query({
		query: `
            SELECT Cabin_Type, COUNT(*) AS Tickets_Sold,
						SUM(CASE
						WHEN s.Cabin_Type = 'Business' THEN a.Business_Class_Price
						WHEN s.Cabin_Type = 'First' THEN a.First_Class_Price
						WHEN s.Cabin_Type = 'Economy' THEN a.Economy_Class_Price
						END * s.Ticket_Count) AS Total_Price
						FROM sales s
						JOIN flights f ON s.Flight_Number = f.Flight_Number
						JOIN avialiners a ON f.Board_Number = a.Board_Number
						WHERE f.Flight_Number = 1
						AND s.Departure_Date = ?
						GROUP BY Cabin_Type;`,
		values: [date],
	});

	let data = JSON.stringify(flights);
	return new Response(data, {
		status: 200,
	});
}

