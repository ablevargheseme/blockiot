import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import Applet from "../components/applet";
import Link from "next/link";
import NavBar from "@/components/navbar";


export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <Head>
        <title>BlockIoT-New Applet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="Logo.svg" />
      </Head>

    <body className="flex flex-col h-screen">
      <div className="">
        <NavBar />
      </div>

      {/* <div>
        <Sidebar />
      </div> */}
      <div className="main-body grow flex justify-center">
        <Applet/> 
      </div>
      
    </body>

      {/* <Footer /> */}
    </div>
  );
}
