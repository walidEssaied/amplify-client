import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import ContactBanner from "../assets/images/CONTACT_BANNER.png";
import BackgroundContact from "../assets/images/background_contact.jpg";

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number" })
    .optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(500, { message: "Message cannot exceed 500 characters" }),
});

export function Contact() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  const onSubmit = async (data: any) => {
    try {
      console.log("Form submitted:", data);
      reset();
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 bg-black backdrop-blur-xl z-0"
        style={{
          backgroundImage: `url(${BackgroundContact})`,
          backgroundPosition: "center",
          transform: `translate(${mousePosition.x / -50}px, ${
            mousePosition.y / -50
          }px)`,
          transition: "transform 0.1s ease",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="relative z-10 w-full max-w-7xl bg-black/70 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-100 mb-2">
              Contact Us
            </h1>
            <p className="text-gray-400">
              Let's talk about your project vision. Fill out the form below, and
              we'll get back to you shortly.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Name
              </label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="w-full p-3 bg-gray-800/60 text-gray-100 border-none rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                )}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Email
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    className="w-full p-3 bg-gray-800/60 text-gray-100 border-none rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Phone (Optional)
              </label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="tel"
                    className="w-full p-3 bg-gray-800/60 text-gray-100 border-none rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+1 234 567 8900"
                  />
                )}
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Message
              </label>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className="w-full p-3 bg-gray-800/60 text-gray-100 border-none rounded min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Write your message here..."
                  />
                )}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="hidden md:block">
          <img
            src={ContactBanner}
            alt="Contact Us"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
