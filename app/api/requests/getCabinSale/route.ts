
import { query } from "@/app/api/db";
import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
    const day1 = request.nextUrl.searchParams.get('day1');
    const day2 = request.nextUrl.searchParams.get('day2');
    if (!day1 || !day2 ) {
        return new Response("day parameter is missing", { status: 400 });
    }
    const result = await query({
        query: `SELECT f.Flight_Number, s.Cabin_Type, SUM(s.Ticket_Count) AS Total_Count
                FROM sales s
                JOIN flights f ON s.Flight_Number = f.Flight_Number
                WHERE s.Sale_Date BETWEEN ? AND ? 
                GROUP BY f.Flight_Number, s.Cabin_Type;
                `,
        values: [day1, day2],
    });

    return new Response(JSON.stringify(result), {
        status: 200,
    });
}
