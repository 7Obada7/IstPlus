"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

// Mock types matching DB schema
type Reservation = {
    id: number;
    destination: string;
    fullName: string;
    email: string;
    date: string;
    passengers: number;
    message: string | null;
    createdAt: string;
};

type Flight = {
    id: number;
    origin: string;
    destination: string;
    price: number;
    departureTime: string;
    airline: string;
};

export default function AdminPage() {
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [flights, setFlights] = useState<Flight[]>([]);
    const [activeTab, setActiveTab] = useState<"reservations" | "flights">("reservations");

    useEffect(() => {
        fetchReservations();
        fetchFlights();
    }, []);

    const fetchReservations = async () => {
        try {
            const res = await fetch("/api/reservations");
            if (res.ok) setReservations(await res.json());
        } catch (e) { console.error(e); }
    };

    const fetchFlights = async () => {
        try {
            const res = await fetch("/api/flights");
            if (res.ok) setFlights(await res.json());
        } catch (e) { console.error(e); }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

                <div className="flex gap-4 mb-8">
                    <Button
                        variant={activeTab === "reservations" ? "default" : "outline"}
                        onClick={() => setActiveTab("reservations")}
                    >
                        Reservations
                    </Button>
                    <Button
                        variant={activeTab === "flights" ? "default" : "outline"}
                        onClick={() => setActiveTab("flights")}
                    >
                        Flight Management
                    </Button>
                </div>

                {activeTab === "reservations" && (
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="p-4 font-medium">ID</th>
                                    <th className="p-4 font-medium">Customer</th>
                                    <th className="p-4 font-medium">Destination</th>
                                    <th className="p-4 font-medium">Date</th>
                                    <th className="p-4 font-medium">Pax</th>
                                    <th className="p-4 font-medium">Message</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {reservations.map((res) => (
                                    <tr key={res.id}>
                                        <td className="p-4">{res.id}</td>
                                        <td className="p-4">
                                            <div className="font-medium">{res.fullName}</div>
                                            <div className="text-sm text-gray-500">{res.email}</div>
                                        </td>
                                        <td className="p-4">{res.destination}</td>
                                        <td className="p-4">{res.date}</td>
                                        <td className="p-4">{res.passengers}</td>
                                        <td className="p-4 text-sm text-gray-500 max-w-xs truncate">{res.message || "-"}</td>
                                    </tr>
                                ))}
                                {reservations.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="p-8 text-center text-gray-500">No reservations found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === "flights" && (
                    <div className="space-y-6">
                        {/* Simple Add Flight Form for MVP */}
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-medium mb-4">Add New Flight</h3>
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                const form = e.target as HTMLFormElement;
                                const formData = new FormData(form);
                                const data = Object.fromEntries(formData);

                                await fetch("/api/flights", {
                                    method: "POST",
                                    body: JSON.stringify(data),
                                });
                                form.reset();
                                fetchFlights();
                            }} className="grid grid-cols-2 gap-4">
                                <input name="origin" placeholder="Origin" className="border p-2 rounded" required />
                                <input name="destination" placeholder="Destination" className="border p-2 rounded" required />
                                <input name="airline" placeholder="Airline" className="border p-2 rounded" required />
                                <input name="price" type="number" placeholder="Price" className="border p-2 rounded" required />
                                <input name="departureTime" type="datetime-local" className="border p-2 rounded" required />
                                <Button type="submit" className="col-span-2">Add Flight</Button>
                            </form>
                        </div>

                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b">
                                    <tr>
                                        <th className="p-4 font-medium">Flight</th>
                                        <th className="p-4 font-medium">Airline</th>
                                        <th className="p-4 font-medium">Departure</th>
                                        <th className="p-4 font-medium">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {flights.map((flight) => (
                                        <tr key={flight.id}>
                                            <td className="p-4">{flight.origin} → {flight.destination}</td>
                                            <td className="p-4">{flight.airline}</td>
                                            <td className="p-4">{new Date(flight.departureTime).toLocaleString()}</td>
                                            <td className="p-4 font-mono">${flight.price}</td>
                                        </tr>
                                    ))}
                                    {flights.length === 0 && (
                                        <tr>
                                            <td colSpan={4} className="p-8 text-center text-gray-500">No flights found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
