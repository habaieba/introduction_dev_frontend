import Head from "next/head";
import Layout from "@/components/layout/Layout";
import PlayerDetails from "@/components/players/PlayerDetails";

function Players({ player }) {
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
        <PlayerDetails player={player} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://www.balldontlie.io/api/v1/players/${params.id}`
  );
  const player = await res.json();
  return {
    props: {
      player,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://www.balldontlie.io/api/v1/players");
  const players = await res.json();

  return {
    fallback: true,
    paths: players.data.map((player) => ({
      params: { id: `${player.id}` },
    })),
  };
}

export default Players;
