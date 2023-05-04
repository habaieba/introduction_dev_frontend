import { Typography } from "@mui/material";
import Image from "next/image";

export default function Profile({ player, isConnected }) {
  return (
    <div>
      {isConnected && (
        <>
          <Typography>Nom du joueur : {player.name}</Typography>
          <Image
            src={player.avatarUrl}
            alt={"Avatar Player"}
            width={200}
            height={200}
            style={{ borderRadius: "100px" }}
          />
        </>
      )}
    </div>
  );
}
