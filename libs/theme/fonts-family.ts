import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
export const fontFamily = {
  "poppins.400": poppins.className,
};
