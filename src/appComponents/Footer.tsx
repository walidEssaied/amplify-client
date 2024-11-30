import { Instagram, Podcast, Twitter, Youtube } from "lucide-react";
import AmplifyLogo from "../assets/images/amplify__logo--white 1.png";
import { TikTokIcon } from "./Icons";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-black text-white py-8 border-t border-gray-600 mt-40"
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
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Code of Conduct</li>
            <li>Refunds</li>
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
                <a href="#" className="text-white hover:text-gray-400">
                  <Youtube size={24} />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <TikTokIcon />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <Podcast size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#212121] border border-gray-600 rounded-xl space-y-4 mt-16">
            <h4 className="text-xl font-bold leading-relaxed text-[#CDCDCD]">
              Join our Newsletter for Weekly business <br />
              tips and creative Insights{" "}
            </h4>
            <div className="flex w-full items-stretch space-x-2">
              <input
                placeholder="Enter your best email"
                className="rounded-lg bg-gray-700 text-white px-2  w-full"
              />
              <Button variant="default" className="font-bold">
                Sign Up Now
              </Button>
            </div>
            <h4 className="text-[#B5B5B5] font-medium">
              We respect your privacy and never use your email for spam. <br />
              Subscribe with confidence, unsubscribe anytime.
            </h4>
          </div>
        </div>
      </div>
      <hr className="my-10 mx-60 border" />
      <div className="container mx-auto mt-8 text-center flex justify-between items-center">
        <div>
          <img src={AmplifyLogo} alt="Amplify Logo" className="h-12 mx-auto" />
        </div>
        <p className="text-md font-bold text-[#969696]">
          All rights reserved @ Amplify {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
