"use client";

import { BACKEND_POINT } from "@/constant";
import { useEffect } from "react";

export default function Home() {
  const fetchData = async () => {
    try {
      const response = await fetch(`${BACKEND_POINT}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <div className="w-screen h-screen m-auto">HELLO WORLD OF BOTOX</div>;
}
