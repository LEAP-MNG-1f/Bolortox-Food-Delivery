"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import { Footer } from "./_components/Footer";
import { useEffect, useState } from "react";
import { FoodContext } from "@/provider/FoodProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [foodData, setFoodData] = useState([]);

  const getFoodData = async () => {
    const response = await fetch("http://localhost:8001/api/food");
    const data = await response.json();
    setFoodData(data.data);
  };
  useEffect(() => {
    getFoodData();
  }, []);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FoodContext.Provider>
          <Header foods={foodData} />
          {children}
          <Footer />
        </FoodContext.Provider>
      </body>
    </html>
  );
}
