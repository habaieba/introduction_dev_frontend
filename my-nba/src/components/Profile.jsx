import Image from "next/image";
import styles from "@/styles/Profile.module.css";

export default function Profile({ player, isConnected }) {
  return (
    <div>
      {isConnected && (
        <>
          <p className={styles.playerName}>Nom du joueur : {player.name}</p>
          <Image
            src={player.avatarUrl}
            alt={"Avatar Player"}
            className={styles.avatarUrl}
            width={200}
            height={200}
          />
        </>
      )}
    </div>
  );
}
