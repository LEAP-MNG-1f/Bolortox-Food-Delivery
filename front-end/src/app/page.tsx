"use client";

import { BACKEND_POINT } from "@/constant";
import { useEffect } from "react";
import Header from "./_components/Header";

import { Cards } from "./_components/Card";

import { Footer } from "./_components/Footer";
import { HomePageBody } from "./_components/HomePage/HomePageBody";
import { HomePageInfo } from "./_components/HomePage/HomePageInfo";

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
     hi
     
    </div>
  );
}
