import { useAppContext } from "@/app/context/AppProvider";

export function PropertyItem({ title, data }: { title: string; data: string | JSX.Element[] }) {
  const { text } = useAppContext();

  return (
    <p className="flex flex-col w-full max-w-[200px] bg-[rgba(219,222,255,0.35)] text-center rounded-lg overflow-hidden shadow-md">
      <span className="flex justify-center font-semibold bg-[rgb(219,222,255)] py-2">
        {text(title)}
      </span>

      <span className="flex flex-wrap items-center justify-center flex-1 py-2 px-4 gap-4">
        {data}
      </span>
    </p>
  );
}
