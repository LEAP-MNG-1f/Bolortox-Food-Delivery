"use client";

import { BACKEND_POINT } from "@/constant";
import { useEffect } from "react";
import Header from "./_components/Header";

import { Cards } from "./_components/Card";

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

  // const price: number = 1000;
  // let str: string = "Hello";
  // let bool: boolean = true;

  return (
    <div>
      <Header />
      {/*       
      <Cards img="Zurag" title="Burger" price={5005} discount={20} />
      <Cards img="Zurag" title="Burger2" price={5000} /> */}
    </div>
  );
}
