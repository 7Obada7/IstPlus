import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const allFlights = await db.flights.findMany();
        return NextResponse.json(allFlights);
    } catch (error) {
        return NextResponse.json({ success: false, error: "Failed to fetch flights" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { origin, destination, price, departureTime, airline } = body;

        await db.flights.create({
            origin,
            destination,
            price: Number(price),
            departureTime,
            airline,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Failed to create flight" }, { status: 500 });
    }
}
