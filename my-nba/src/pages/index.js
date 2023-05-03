import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MyButton from "@/components/MyButton";
import Profile from "@/components/Profile";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const player = {
  name: "LeBron James",
  avatarUrl:
    "https://ca-times.brightspotcdn.com/dims4/default/0f13f1e/2147483647/strip/true/crop/4937x3292+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F4e%2F4e%2Fba20004c41a5bc970aad01b5739b%2Fhttps-delivery.gettyimages.com%2Fdownloads%2F1199826353.jpg",
};

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  function handleOnClick() {
    setIsConnected(!isConnected);
  }

  return (
    <>
      <Head>
        <title>My NBA</title>
        <meta
          name="description"
          content="An app to post messages to NBA players"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Bienvenue dans My NBA</h1>
        <Profile player={player} isConnected={isConnected} />
        <MyButton isConnected={isConnected} handleOnClick={handleOnClick} />
      </main>
    </>
  );
}
