import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Logo = () => {
  return (
    <div className={cn("flex flex-col items-center gap-y-4", font.className)}>
      <div className="bg-white rounded-full p-1">
        <Image src="/spooky.svg" alt="GamingHub" height="80" width="80" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl font-semibold">GamingHub</p>
        <p className="textsml text-muted-foreground">Let&apos;s play</p>
      </div>
    </div>
  );
};

export default Logo;
