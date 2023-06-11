"use client";

import { useAppContext } from "@/app/context/AppProvider";

export default function PageNotFound() {
  const { text } = useAppContext();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center py-20 px-20">
      <h3>{text("pageNotFound")}</h3>

      <video autoPlay muted loop className="min-w-[200px] w-[80%] max-w-[400px]">
        <source src={`/page_not_found.mp4`} type="video/mp4" />
        {text("videoNotFound")}
      </video>

      <p>{text("pageNotFoundDescription")}</p>
    </div>
  );
}
