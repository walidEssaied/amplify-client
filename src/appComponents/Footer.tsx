import { Instagram, Podcast, Twitter, Youtube } from "lucide-react";
import AmplifyLightLogo from "../assets/images/amplify__logo--black.png";
import AmplifyLogo from "../assets/images/amplify__logo--white 1.png";
import { TikTokIcon } from "./Icons";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      id="footer"
      className="bg-white dark:bg-black text-black dark:text-white py-8 border-t border-gray-600 mt-40"
      data-aos="fade-up"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="offers">
          <h3 className="text-2xl font-bold my-4">Offers</h3>
          <ul className="space-y-2">
            <li>3D product visualization</li>
            <li>Animated ad content</li>
            <li>Product Animation</li>
            <li>Website Design</li>
            <li>Architectural Visualization</li>
            <li>Branding</li>
            <li>Social Media Management</li>
          </ul>
        </div>

        <div className="team">
          <h3 className="text-2xl font-bold my-4">Team</h3>
          <ul className="space-y-2">
            <li>Our Artist & Designers</li>
          </ul>
          <h3 className="text-lg font-bold my-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="/terms-and-conditions">Terms and Conditions </a>
            </li>

            <li>
              <a href="/terms-and-conditions#privacy">Privacy Policy </a>
            </li>

            <li>
              <a href="/terms-and-conditions#conduct">Code of Conduct </a>
            </li>

            <li>
              <a href="/terms-and-conditions#refunds">Refunds </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-12 items-start justify-start">
          <div className="grid md:flex md:gap-12">
            <div className="resources">
              <h3 className="text-2xl font-bold my-4">Resources</h3>
              <ul className="space-y-2">
                <li>Blog</li>
              </ul>
            </div>
            <div className="follow-us">
              <h3 className="text-2xl font-bold my-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-300"
                >
                  <Youtube size={24} />
                </a>
                <a
                  href="#"
                  className="text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-300"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-black dark:text-white fill-black dark:fill-white hover:text-gray-400 dark:hover:text-gray-300"
                >
                  <TikTokIcon />
                </a>
                <a
                  href="#"
                  className="text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-300"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-300"
                >
                  <Podcast size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-200 dark:bg-[#333333] border border-gray-600 dark:border-gray-400 rounded-xl space-y-4 mt-16">
            <h4 className="text-xl font-bold leading-relaxed text-black dark:text-[#E0E0E0]">
              Join our Newsletter for Weekly business <br />
              tips and creative Insights{" "}
            </h4>
            <div className="flex w-full items-stretch space-x-2">
              <input
                placeholder="Enter your best email"
                className="rounded-lg bg-white text-white px-2 w-full dark:bg-gray-800 dark:text-white"
              />
              <Button variant="default" className="font-bold">
                Sign Up Now
              </Button>
            </div>
            <h4 className="text-black dark:text-[#A6A6A6] font-medium">
              We respect your privacy and never use your email for spam. <br />
              Subscribe with confidence, unsubscribe anytime.
            </h4>
          </div>
        </div>
      </div>

      <hr className="my-10 mx-60 border-gray-600 dark:border-gray-400" />

      <div className="container mx-auto mt-8 text-center flex justify-between items-center">
        <div>
          <img
            src={theme === "dark" ? AmplifyLogo : AmplifyLightLogo}
            className="h-12 mx-auto"
          />
        </div>
        <p className="text-md font-bold text-[#969696] dark:text-[#A1A1A1]">
          All rights reserved @ Amplify {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
