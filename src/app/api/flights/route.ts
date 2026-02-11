import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";




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
        const { origin, destination, price, departureTime, airline, passengers } = body;

        await db.flights.create({
            data: {
                from: origin,
                to: destination,
                price: Number(price),
                date: departureTime,
                airline,
                passengers: Number(passengers || 0),
            }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Failed to create flight" }, { status: 500 });
    }
}
