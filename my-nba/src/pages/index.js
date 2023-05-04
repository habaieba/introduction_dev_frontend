import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import MyButton from "@/components/MyButton";
import Profile from "@/components/Profile";
import { useState } from "react";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

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
      <main className={`${inter.className}`}>
        <Container maxWidth="lg">
          <h1>Bienvenue dans My NBA</h1>
        </Container>
      </main>
    </>
  );
}
