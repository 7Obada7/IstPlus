"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReservationsPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            const res = await fetch("/api/reservations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                alert("Reservation submitted successfully!");
                router.push("/");
            } else {
                alert("Failed to submit reservation.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-border">
                <div className="bg-primary py-6 px-8">
                    <h2 className="text-3xl font-bold text-primary-foreground text-center font-serif">
                        Book Your Journey
                    </h2>
                    <p className="text-primary-foreground/80 text-center mt-2">
                        Secure your premium travel experience today.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="py-8 px-8 space-y-6">
                    {/* Destination */}
                    <div>
                        <label className="block text-sm font-medium text-foreground">Destination</label>
                        <input
                            {...register("destination", { required: true })}
                            className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            placeholder="e.g., Paris, Maldives"
                        />
                        {errors.destination && <span className="text-destructive text-xs">Required</span>}
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-sm font-medium text-foreground">Preferred Date</label>
                        <input
                            type="date"
                            {...register("date", { required: true })}
                            className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                        {errors.date && <span className="text-destructive text-xs">Required</span>}
                    </div>

                    {/* Passengers */}
                    <div>
                        <label className="block text-sm font-medium text-foreground">Passengers</label>
                        <input
                            type="number"
                            min="1"
                            {...register("passengers", { required: true, min: 1 })}
                            className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            defaultValue={1}
                        />
                    </div>

                    {/* User Info */}
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-foreground">Full Name</label>
                            <input
                                {...register("fullName", { required: true })}
                                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            />
                            {errors.fullName && <span className="text-destructive text-xs">Required</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground">Email</label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            />
                            {errors.email && <span className="text-destructive text-xs">Required</span>}
                        </div>
                    </div>

                    {/* Message / Special Requests */}
                    <div>
                        <label className="block text-sm font-medium text-foreground">Special Requests / Message</label>
                        <textarea
                            {...register("message")}
                            rows={4}
                            className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            placeholder="Any dietary requirements, flight preferences, or questions?"
                        />
                    </div>

                    <Button type="submit" variant="premium" className="w-full text-lg" disabled={loading}>
                        {loading ? "Booking..." : "Submit Reservation"}
                    </Button>
                </form>
            </div>
        </div>
    );
}
