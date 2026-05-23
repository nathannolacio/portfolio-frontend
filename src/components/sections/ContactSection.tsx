"use client";

import { useState } from "react";
import Container from "../layout/Container";
import SectionTitle from "../ui/typography/SectionTitle";
import Button from "../ui/Button";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setSubmitStatus("idle"), 3000);
        } catch {
            setSubmitStatus("error");
            setTimeout(() => setSubmitStatus("idle"), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="py-12 md:py-16"
        >
            <Container className="flex flex-col items-center">
                <div className="mb-12 text-center">
                    <SectionTitle>
                        Get in Touch
                    </SectionTitle>
                    <p className="text-lg md:text-xl mt-2 text-zinc-600">
                        Have a question or want to work together? Send me a message.
                    </p>
                </div>

                <div className="w-full max-w-4xl rounded-lg border-2 border-zinc-200 bg-neutral-50 p-8 shadow-lg">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center">
                        <div className="flex flex-col gap-2 w-full">
                            <label
                                htmlFor="name"
                                className="text-sm font-semibold text-zinc-700"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                                className="rounded-lg border-2 border-zinc-200 bg-neutral-50 px-4 py-2 text-zinc-900 placeholder-zinc-400 transition-colors focus:border-zinc-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label
                                htmlFor="email"
                                className="text-sm font-semibold text-zinc-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                                className="rounded-lg border-2 border-zinc-200 bg-neutral-50 px-4 py-2 text-zinc-900 placeholder-zinc-400 transition-colors focus:border-zinc-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label
                                htmlFor="message"
                                className="text-sm font-semibold text-zinc-700"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your message here..."
                                rows={6}
                                className="rounded-lg border-2 border-zinc-200 bg-neutral-50 px-4 py-2 text-zinc-900 placeholder-zinc-400 transition-colors focus:border-zinc-400 focus:outline-none resize-none"
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <Button
                                color="cyan"
                                type="submit"
                                className={isSubmitting ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                            {submitStatus === "success" && (
                                <span className="text-sm font-medium text-emerald-600">
                                    Message sent successfully!
                                </span>
                            )}
                            {submitStatus === "error" && (
                                <span className="text-sm font-medium text-red-600">
                                    Failed to send message. Please try again.
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    );
}
