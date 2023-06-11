import Image from "next/image";

// Types
import { FlagProps } from "@/types/props";

export function Flag({ src, alt, width, height }: FlagProps) {
  return <Image src={src} width={width} height={height} alt={alt} />;
}
