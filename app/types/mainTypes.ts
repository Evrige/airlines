interface Flight {
	Flight_Number: number,
	Departure_Days: string,
	Departure_Location: string,
	Intermediate_Locations: string,
	Board_Number: string
	Count_of_Flights: number
	Total_Count: number
}
interface Avialiners {
	Board_Number: string
	Aircraft_Type: string
	Business_Class_Price: number
	First_Class_Price: number
	Economy_Class_Price: number
}
interface Sales {
	Sales_id: number
	Sale_Date: Date
	Flight_Number: number
	Cabin_Type: string
	Ticket_Count: number
	Discount_Category: string
	Departure_Date: Date
	Total_Price: number
	Total_Count: number
	Ticket_Price: number
	Tickets_Sold: number
	Avg_Price: number
}