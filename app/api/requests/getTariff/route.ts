import { query } from "@/app/api/db";
import { NextRequest } from "next/server";

export async function GET() {
    await query({
        query: `UPDATE avialiners
                SET Business_class_Price = Business_class_Price * 1.1,
                    First_Class_Price = First_Class_Price * 1.1,
                    Economy_Class_Price = Economy_class_Price * 1.1
                WHERE Aircraft_Type = 'Boeing 747';`,
        values: [],
    });

    const result = await query({
        query: `SELECT * FROM avialiners 
                WHERE Aircraft_Type = 'Boeing 747';`,
        values: [],
    });

    return new Response(JSON.stringify(result), {
        status: 200,
    });
}
