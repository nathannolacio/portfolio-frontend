"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Container from "../layout/Container";
import SectionTitle from "../ui/typography/SectionTitle";
import Button from "../ui/Button";

export default function ContactSection() {
    const t = useTranslations("Contact");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        reason: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response =  await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                reason: "",
                message: "",
            });

            setTimeout(() => setSubmitStatus("idle"), 3000);
        } catch (error) {
            console.log(error);

            setSubmitStatus("error");
            setTimeout(() => setSubmitStatus("idle"), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="scroll-mt-20 py-12 md:py-16"
        >
            <Container className="flex flex-col items-center">
                <div className="mb-12 text-center">
                    <SectionTitle>
                        {t("title")}
                    </SectionTitle>
                    <p className="text-lg md:text-xl mt-2 text-text-muted">
                        {t("description")}
                    </p>
                </div>

                <div className="w-full max-w-4xl rounded-sm border border-border bg-surface p-8">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center">
                        <div className="flex flex-col gap-2 w-full">
                            <label
                                htmlFor="name"
                                className="text-sm font-semibold text-text"
                            >
                                {t("form.name")}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder={t("form.namePlaceholder")}
                                className="rounded-sm border border-border bg-bg px-4 py-2 text-text placeholder-text-muted transition-colors focus:border-accent focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label
                                htmlFor="email"
                                className="text-sm font-semibold text-text"
                            >
                                {t("form.email")}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder={t("form.emailPlaceholder")}
                                className="rounded-sm border border-border bg-bg px-4 py-2 text-text placeholder-text-muted transition-colors focus:border-accent focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label
                                htmlFor="reason"
                                className="text-sm font-semibold text-text"
                            >
                                {t("form.reason")}
                            </label>
                            <select
                                id="reason"
                                name="reason"
                                value={formData.reason}
                                onChange={handleChange}
                                required
                                className="rounded-sm border border-border bg-bg px-4 py-2 text-text transition-colors focus:border-accent focus:outline-none"
                            >
                                <option value="" disabled>{t("form.reasonPlaceholder")}</option>
                                <option value="job">{t("form.reasonOptions.job")}</option>
                                <option value="freelance">{t("form.reasonOptions.freelance")}</option>
                                <option value="other">{t("form.reasonOptions.other")}</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label
                                htmlFor="message"
                                className="text-sm font-semibold text-text"
                            >
                                {t("form.message")}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder={t("form.messagePlaceholder")}
                                rows={6}
                                className="rounded-sm border border-border bg-bg px-4 py-2 text-text placeholder-text-muted transition-colors focus:border-accent focus:outline-none resize-none"
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <Button
                                type="submit"
                                className={isSubmitting ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
                            >
                                {isSubmitting ? t("form.sending") : t("form.button")}
                            </Button>
                            {submitStatus === "success" && (
                                <span className="text-sm font-medium text-emerald-600">
                                    {t("form.successMessage")}
                                </span>
                            )}
                            {submitStatus === "error" && (
                                <span className="text-sm font-medium text-red-600">
                                    {t("form.errorMessage")}
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    );
}
