"use client";

import { Input } from "@/appComponents/ui/input";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AmplifyIcon from "../assets/images/amplify__logo--white.png";
import { HelpIcon, MessageIcon } from "./Icons";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type FormData = {
  name: string;
  email: string;
  category: string;
  budget: string;
  message: string;
};

export const CallToAction = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            className="shadow-md px-4 w-full bg-[#A2161B] dark:bg-[#8a1317] hover:bg-[#8a1317] dark:hover:bg-[#A2161B] flex justify-center items-center space-x-1 rounded-full transition-colors duration-200"
          >
            <MessageIcon className="h-4 w-4" />
            <span className="text-xs sm:text-sm font-bold">Contact Us</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[90vw] sm:w-96 p-0 rounded-xl border-none" align="end">
          <div className="space-y-2 bg-red-600 flex flex-col items-center justify-center w-full rounded-t-xl pb-6">
            <img src={AmplifyIcon} alt="Amplify Icon" className="w-3/4" />
            <h4 className="font-bold text-lg leading-none text-white">
              How can we help you ?
            </h4>
            <p className="text-sm text-gray-200 dark:text-gray-400 font-medium">
              We usually respond in a few hours
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-4 p-4 bg-white dark:bg-red-200 text-gray-900 dark:text-white rounded-b-xl"
          >
            <div className="grid gap-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-md text-[#A2161B] font-bold mb-2"
                >
                  Name
                </label>
                <Input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Your name"
                  className="w-full p-6 rounded-sm  text-black bg-white"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 dark:text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-md text-[#A2161B] font-bold mb-2"
                >
                  Email
                </label>
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  className="w-full p-6 rounded-sm  text-black bg-white"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 dark:text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block text-md text-[#A2161B] font-bold mb-2"
                >
                  Category
                </label>
                <select
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="border-[#A2161B]/20 focus:border-[#A2161B] dark:border-[#ff6b6b]/20 dark:focus:border-[#ff6b6b] w-full p-4 rounded-sm  text-black bg-white"
                >
                  <option value="">Select Category</option>
                  <option value="web-design">Web Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="development">Development</option>
                </select>
                {errors.category && (
                  <p className="text-xs text-red-500 dark:text-red-400">
                    {errors.category.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="block text-md text-[#A2161B] font-bold mb-2"
                >
                  Budget
                </label>
                <select
                  {...register("budget", { required: "Budget is required" })}
                  className="border-[#A2161B]/20 focus:border-[#A2161B] dark:border-[#ff6b6b]/20 dark:focus:border-[#ff6b6b] w-full p-4 rounded-sm  text-black bg-white"
                >
                  <option value="">Select Budget</option>
                  <option value="<$500">&lt;$500</option>
                  <option value="$500-$1000">$500-$1000</option>
                  <option value=">$1000">&gt;$1000</option>
                </select>
                {errors.budget && (
                  <p className="text-xs text-red-500 dark:text-red-400">
                    {errors.budget.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-md text-[#A2161B] font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  placeholder="Tell us about your project"
                  className="border-[#A2161B]/20 focus:border-[#A2161B] dark:border-[#ff6b6b]/20 dark:focus:border-[#ff6b6b] w-full p-4 rounded-sm  text-black bg-white"
                ></textarea>
                {errors.message && (
                  <p className="text-xs text-red-500 dark:text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>
            <Button
              type="submit"
              className="bg-[#A2161B] hover:bg-[#8a1317] dark:bg-[#ff6b6b] dark:hover:bg-[#ff8c8c] w-full text-white transition-colors duration-200"
            >
              Send Message
            </Button>
          </form>
        </PopoverContent>
      </Popover>
      <a href="/contact" className="w-full flex">
        <Button
          onClick={goToTop}
          size="icon"
          className="shadow-md px-4 w-full bg-[#A2161B] dark:bg-[#8a1317] hover:bg-[#8a1317] dark:hover:bg-[#A2161B] flex justify-center items-center space-x-1 rounded-full transition-colors duration-200"
        >
          <HelpIcon className="h-4 w-4" />
          <span className="text-xs sm:text-sm font-bold">Help</span>
        </Button>
      </a>
    </div>
  );
};
