import Head from "next/head";
import { Inter } from "next/font/google";
import { useContext } from "react";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import { UserContext } from "@/context/userContext";
import LoginForm from "@/components/login/LoginForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const user = useContext(UserContext);
  const router = useRouter();

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
      <Container
        className={inter.className}
        sx={{ display: "flex", height: "100vh" }}
      >
        <LoginForm />
      </Container>
    </>
  );
}
