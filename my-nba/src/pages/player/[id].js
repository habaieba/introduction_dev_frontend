import Head from "next/head";
import Layout from "@/components/layout/Layout";
import PlayersList from "@/components/players/PlayersList";

export default function Home() {
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
      <Layout>
        <PlayersList />
      </Layout>
    </>
  );
}
