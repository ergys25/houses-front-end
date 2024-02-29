"use client";
import React, { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import MyComponent from "@/app/component/card";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://3.148.115.46:3000/v1-api/houses')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []); // Empty array means this useEffect will run once after the component mounts.

    return (
        <html lang="en">
        <body className={inter.className}>
        <MyComponent data={data}  />
        </body>
        </html>
    );
}
