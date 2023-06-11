"use client";

import { useAppContext } from "@/app/context/AppProvider";

// Components
import { ContactsList } from "./Contacts";

// Languages
import { JOB, NAMES } from "../languages/languages";

export function Footer() {
  const { language } = useAppContext();

  return (
    <footer className="w-full bg-black text-white text-center p-2">
      <ContactsList style={"flex justify-evenly max-w-[600px] mx-auto cursor-pointer"} />

      <small>
        {NAMES} - {JOB[language]}
      </small>
    </footer>
  );
}
