
import { query } from "@/app/api/db";

export async function GET() {
    const result = await query({
        query: `SELECT f.Flight_Number
                FROM flights f
                LEFT JOIN sales s ON f.Flight_Number = s.Flight_Number
                GROUP BY f.Flight_Number
                HAVING MAX(s.Sale_Date) IS NULL OR MAX(f.Departure_Days) - INTERVAL 3 DAY >= MAX(s.Sale_Date);
                `,
        values: [],
    });

    return new Response(JSON.stringify(result), {
        status: 200,
    });
}
