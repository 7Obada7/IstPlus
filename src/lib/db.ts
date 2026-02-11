import { prisma } from "./prisma";

export const db = {
    reservations: {
        findMany: async () => {
            return await prisma.reservation.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
            });
        },
        create: async (reservation: any) => {
            return await prisma.reservation.create({
                data: {
                    fullName: reservation.fullName,
                    email: reservation.email,
                    date: new Date(reservation.date),
                    passengers: Number(reservation.passengers),
                    destination: reservation.destination,
                    message: reservation.message,
                }
            });
        }
    },
    flights: {
        findMany: async () => {
            return await prisma.flight.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
            });
        },
        create: async (flight: any) => {
            // Assuming similar structure for Flight
            return await prisma.flight.create({
                data: {
                    from: flight.from,
                    to: flight.to,
                    date: new Date(flight.date),
                    passengers: Number(flight.passengers),
                    price: Number(flight.price),
                    airline: flight.airline
                }
            });
        }
    }
};
