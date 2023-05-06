import Head from "next/head";
import Layout from "@/components/layout/Layout";
import PlayersList from "@/components/players/PlayersList";

function Players({ players }) {
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
        <PlayersList players={players} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://www.balldontlie.io/api/v1/players?page=${params.page}`
  );
  const players = await res.json();
  return {
    props: {
      players,
      currentPage: params.page,
      totalPages: players.meta.total_pages,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://www.balldontlie.io/api/v1/players");
  const players = await res.json();

  return {
    fallback: true,
    paths: Array.from(Array(players.meta.total_pages).keys()).map((page) => ({
      params: { page: `${page}` },
    })),
  };
}

export default Players;
