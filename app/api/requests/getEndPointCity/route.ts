import { query } from "@/app/api/db";
import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
	const location = request.nextUrl.searchParams.get('location');
	if (!location) {
		return new Response("Location parameter is missing", { status: 400 });
	}

	const flights = await query({
		query: `
            SELECT *
            FROM flights
            WHERE Intermediate_Locations LIKE '%${location}%';`,
		values: [],
	});

	let data = JSON.stringify(flights);
	return new Response(data, {
		status: 200,
	});
}
