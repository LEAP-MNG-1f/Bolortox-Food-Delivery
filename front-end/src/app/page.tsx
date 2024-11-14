"use client";

import { BACKEND_POINT } from "@/constant";
import { useEffect } from "react";

export default function Home() {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
