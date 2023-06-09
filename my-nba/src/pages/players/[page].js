import Head from "next/head";
import Layout from "@/components/layout/Layout";
import PlayersList from "@/components/players/PlayersList";

function Players({ players, totalPages }) {
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
        <PlayersList players={players} totalPages={totalPages} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `https://www.balldontlie.io/api/v1/players?page=${params.page}`
    );
    const players = await res.json();
    return {
      props: {
        players,
        totalPages: 30,
      },
    };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getStaticPaths() {
  try {
    const res = await fetch("https://www.balldontlie.io/api/v1/players");
    const players = await res.json();

    return {
      fallback: true,
      paths: Array.from(Array(30).keys()).map((page) => ({
        params: { page: `${page}` },
      })),
    };
  } catch (err) {
    throw new Error(err.message);
  }
}

export default Players;
