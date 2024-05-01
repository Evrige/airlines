import { query } from "@/app/api/db";

export async function GET() {
    const result = await query({
        query: `SELECT f.Flight_Number, COUNT(*) AS Total_Count
                FROM sales s
                JOIN flights f ON s.Flight_Number = f.Flight_Number
                GROUP BY f.Flight_Number
                HAVING COUNT(*) > (
                    SELECT AVG(Sale_Count) FROM (
                        SELECT COUNT(*) AS Sale_Count
                        FROM sales
                        GROUP BY Flight_Number
                    ) AS AvgSales
                );
                `,
        values: [],
    });

    return new Response(JSON.stringify(result), {
        status: 200,
    });
}
