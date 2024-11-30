import { useTheme } from "@/appComponents/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const isDarkMode = theme === "dark";

  const toggleTheme = (isChecked: boolean) => {
    if (isChecked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Custom Tailwind Switch with Icons Inside */}
      <label className="relative inline-block w-12 h-6">
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0 absolute"
          checked={isDarkMode}
          onChange={(e) => toggleTheme(e.target.checked)}
        />
        <span className="block w-full h-full bg-gray-300 rounded-full cursor-pointer transition-colors duration-300 dark:bg-gray-700"></span>

        {/* Circle with Sun and Moon Icons inside */}
        <span
          className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full transition-transform duration-300 transform ${
            isDarkMode ? "translate-x-6" : ""
          }`}
          style={{
            background: "linear-gradient(90deg, #D9D9D9 0.21%, #737373 100%)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Sun Icon */}
          <Sun
            className={`h-[1.2rem] w-[1.2rem] absolute left-1 top-1 transition-opacity duration-300 ${
              isDarkMode ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Moon Icon */}
          <Moon
            className={`h-[1.2rem] w-[1.2rem] absolute right-1 top-1 transition-opacity duration-300 ${
              isDarkMode ? "opacity-100" : "opacity-0"
            }`}
          />
        </span>
      </label>
    </div>
  );
}
