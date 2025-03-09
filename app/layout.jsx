// // //
// ---------- Originally created by Julian Garnier (2012) and licensed under the MIT license. Converted to Next.js by pH0enix46 in 2025 ----------

import { Rubik } from "next/font/google";
import "./style.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "3D Solar System",
  description:
    "Originally created by Julian Garnier in 2012, under the MIT License. Converted to Next.js by pH0enix46 in 2025, also under the MIT License",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="fav.png" type="image/x-icon" />
      </head>

      <body className={`${rubik.variable} antialiased`}>{children}</body>
    </html>
  );
}
