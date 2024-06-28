import { useState } from "react";
import useflag from "@/assets/images/useflag.svg";
import Image from "next/image";

const languages = [
  {
    name: "USA",
    icon: <Image src={useflag} alt="flag" />,
  },
  { name: "Uzb" },
  { name: "Rus" },
];

export default function SelectCountry() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-10 h-[32px] dark:bg-[#2C3058] bg-[#F2F2F2] border border-[#C8C8D0] dark:border-[#C8C8D033] w-max rounded-md">
      <button
        type="button"
        className="flex justify-between items-center w-full rounded-md dark:text-[#F2F2F2] px-4 py-1"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={toggleDropdown}
      >
        <div className="flex">
          <div className="mr-2">{selectedLanguage.icon}</div>
          {selectedLanguage.name}
        </div>
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-max px-8 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => selectLanguage(language)}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                role="menuitem"
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
