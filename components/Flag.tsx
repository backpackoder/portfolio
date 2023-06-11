import Image from "next/image";

// Types
import { FlagProps } from "@/types/props";

export function Flag({ src, alt, width = 50, height = 30 }: FlagProps) {
  return <Image src={src} alt={alt} width={width} height={height} />;
}
