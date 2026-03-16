"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import emailjs from '@emailjs/browser';

export default function ReservationsPage() {
    const router = useRouter();
    const { t } = useLanguage();
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: any, e?: React.BaseSyntheticEvent) => {
        if (e) e.preventDefault();
        setLoading(true);
        try {
            const templateParams = {
                // These names must exactly match the {{variables}} in your EmailJS templates
                full_name: data.fullName,
                email: data.email,
                phone: data.phone || "N/A",
                country: data.country || "N/A",
                trip_type: data.travelClass,
                preferred_date: data.date,
                departure_city: data.origin,
                destination: data.destination,
                passengers: data.passengers,
                message: data.message || "-",
                // Also keep these for the auto-reply "To Email" field
                to_name: data.fullName,
                to_email: data.email,
                reply_to: data.email,
                // Translated strings so the auto-reply renders in the user's language
                email_subject: t("reservations.email_subject"),
                email_greeting: t("reservations.email_greeting"),
                email_body: t("reservations.email_body"),
                email_details_header: t("reservations.email_details_header"),
                email_origin: t("reservations.email_origin"),
                email_destination: t("reservations.email_destination"),
                email_date: t("reservations.email_date"),
                email_passengers: t("reservations.email_passengers"),
                email_class: t("reservations.email_class"),
                email_special: t("reservations.email_special"),
                email_closing: t("reservations.email_closing"),
                email_closing_line: t("reservations.email_closing_line"),
                // Hero Section Translators
                email_hero_title1: t("reservations.email_hero_title1"),
                email_hero_title2: t("reservations.email_hero_title2"),
                email_hero_sub: t("reservations.email_hero_sub"),
                email_hero_pill: t("reservations.email_hero_pill"),
                // "What Happens Next" Translators
                email_steps_header: t("reservations.email_steps_header"),
                email_step1_title: t("reservations.email_step1_title"),
                email_step1_desc: t("reservations.email_step1_desc"),
                email_step2_title: t("reservations.email_step2_title"),
                email_step2_desc: t("reservations.email_step2_desc"),
                email_step3_title: t("reservations.email_step3_title"),
                email_step3_desc: t("reservations.email_step3_desc"),

            };

            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY_HERE";

            // Admin notification email
            await emailjs.send(
                "service_u8grl7r",
                "template_8f9w6yw",
                templateParams,
                publicKey
            );

            // Auto-Reply Email to the customer
            try {
                await emailjs.send(
                    "service_u8grl7r",
                    "template_q4r3r2d",
                    templateParams,
                    publicKey
                );
            } catch (autoReplyError) {
                console.warn("Auto-reply email failed:", autoReplyError);
            }

            alert(t("reservations.success"));
            console.log("Email sent successfully!");
            router.push("/");
        } catch (error) {
            console.error(error);
            alert(t("reservations.error"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-border">
                <div className="bg-primary py-6 px-8">
                    <h2 className="text-3xl font-bold text-primary-foreground text-center font-serif">
                        {t("reservations.title")}
                    </h2>
                    <p className="text-primary-foreground/80 text-center mt-2">
                        {t("reservations.subtitle")}
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="py-8 px-8 space-y-6">
                    {/* Departure & Destination */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-foreground">{t("reservations.origin")}</label>
                            <input
                                {...register("origin", { required: true })}
                                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                placeholder={t("reservations.origin_ph")}
                            />
                            {errors.origin && <span className="text-destructive text-xs">Required</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground">{t("reservations.destination")}</label>
                            <input
                                {...register("destination", { required: true })}
                                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                placeholder={t("reservations.destination_ph")}
                            />
                            {errors.destination && <span className="text-destructive text-xs">Required</span>}
                        </div>
                    </div>

                    {/* Preferred Date */}
                    <div>
                        <label className="block text-sm font-medium text-foreground">{t("reservations.date")}</label>
                        <input
                            type="date"
                            {...register("date", { required: true })}
                            className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                        {errors.date && <span className="text-destructive text-xs">Required</span>}
                    </div>

                    {/* Passengers & Trip Type (Travel Class) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-foreground">{t("reservations.passengers")}</label>
                            <input
                                type="number"
                                min="1"
                                {...register("passengers", { required: true, min: 1 })}
                                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                defaultValue={1}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground">{t("reservations.class")}</label>
                            <select
                                {...register("travelClass", { required: true })}
                                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                                <option value="Economy">{t("reservations.class_eco")}</option>
                                <option value="Business">{t("reservations.class_bus")}</option>
                                <option value="First Class">{t("reservations.class_first")}</option>
                            </select>
                            {errors.travelClass && <span className="text-destructive text-xs">Required</span>}
                        </div>
                    </div>

                    {/* Personal Info */}
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-foreground">{t("reservations.full_name")}</label>
                            <input
                                {...register("fullName", { required: true })}
                                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            />
                            {errors.fullName && <span className="text-destructive text-xs">Required</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground">{t("reservations.email")}</label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            />
                            {errors.email && <span className="text-destructive text-xs">Required</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground">Phone Number</label>
                            <input
                                type="tel"
                                {...register("phone")}
                                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                placeholder="+1 234 567 8900"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground">Country / Region</label>
                            <input
                                {...register("country")}
                                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                placeholder="e.g. United States"
                            />
                        </div>
                    </div>

                    {/* Message / Special Requests */}
                    <div>
                        <label className="block text-sm font-medium text-foreground">{t("reservations.message")}</label>
                        <textarea
                            {...register("message")}
                            rows={4}
                            className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            placeholder={t("reservations.message_ph")}
                        />
                    </div>

                    <Button type="submit" variant="premium" className="w-full text-lg" disabled={loading}>
                        {loading ? t("reservations.loading") : t("reservations.submit")}
                    </Button>
                </form>
            </div>
        </div>
    );
}
