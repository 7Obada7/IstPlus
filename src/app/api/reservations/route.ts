import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { destination, fullName, email, date, passengers, message } = body;

        await db.reservations.create({
            destination,
            fullName,
            email,
            date,
            passengers: Number(passengers),
            message,
        });

        return NextResponse.json({ success: true, message: "Reservation created" });
    } catch (error) {
        console.error("Reservation Error:", error);
        return NextResponse.json({ success: false, error: "Failed to create reservation" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const allReservations = await db.reservations.findMany();
        return NextResponse.json(allReservations);
    } catch (error) {
        return NextResponse.json({ success: false, error: "Failed to fetch reservations" }, { status: 500 });
    }
}
