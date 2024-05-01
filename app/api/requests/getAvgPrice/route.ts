import { query } from "@/app/api/db";

export async function GET() {
    const result = await query({
        query: `SELECT
                f.Flight_Number,
                    s.Cabin_Type,
                    ROUND(AVG(s.Ticket_Count *
                        CASE
                WHEN s.Cabin_Type = 'Business' THEN a.Business_Class_Price
                WHEN s.Cabin_Type = 'First' THEN a.First_Class_Price
                WHEN s.Cabin_Type = 'Economy' THEN a.Economy_Class_Price
                END), 2) AS Avg_Price
                FROM
                sales s
                JOIN
                flights f ON s.Flight_Number = f.Flight_Number
                JOIN
                avialiners a ON f.Board_Number = a.Board_Number
                GROUP BY
                f.Flight_Number, s.Cabin_Type;
                `,
        values: [],
    });

    return new Response(JSON.stringify(result), {
        status: 200,
    });
}
