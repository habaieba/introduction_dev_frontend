import Image from "next/image";
import styles from "@/styles/Profile.module.css";

const MyProfile = ({ username, avatarUrl, games }) => {
  const listGames = games.map((game) => (
    <li key={game.id}>
      {game.opponent}
      <ul>
        {game.scores.map((score, index) => (
          <li key={index}>{score}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div className={styles.container}>
      <p>
        Utilisateur connecté :{" "}
        <span className={styles.username}>{username}</span>
      </p>
      <Image
        src={avatarUrl}
        alt={`avatar de ${username}`}
        width={100}
        height={100}
        className={styles.avatar}
      />
      <ul>{listGames}</ul>
    </div>
  );
};

export default MyProfile;
