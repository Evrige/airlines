
import { query } from "@/app/api/db";

export async function GET() {
    const result = await query({
        query: `SELECT Departure_Days, COUNT(*) AS Count_of_Flights
                FROM flights
                GROUP BY Departure_Days
                ORDER BY Count_of_Flights DESC
                LIMIT 1;
                `,
        values: [],
    });

    return new Response(JSON.stringify(result), {
        status: 200,
    });
}
