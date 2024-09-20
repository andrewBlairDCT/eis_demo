import type { Metadata } from "next";
import { cabin } from "./ui/fonts";
import DropdownMenus from "./dropdown";
import bg from "./darkroom.jpg"
import "./globals.css";

export const metadata: Metadata = {
  title: "EIS Demo",
  description: "Generated by create next app",
};

const styling = {
  backgroundImage: `url(${bg.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  opacity: 0.8,
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cabin.className} antialiased`}
      >
         <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 z-0">
      <div className="z-1" style={styling}></div>  
        <DropdownMenus />
      </div>
      <div style={{zIndex: 10}} className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
      </body>
    </html>
  );
}
