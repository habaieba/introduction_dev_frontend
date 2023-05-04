import MyButton from "@/components/MyButton";
import Profile from "@/components/account/Profile";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";

export default function Account() {
  const player = {
    name: "LeBron James",
    avatarUrl:
      "https://ca-times.brightspotcdn.com/dims4/default/0f13f1e/2147483647/strip/true/crop/4937x3292+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F4e%2F4e%2Fba20004c41a5bc970aad01b5739b%2Fhttps-delivery.gettyimages.com%2Fdownloads%2F1199826353.jpg",
  };

  const user = useContext(UserContext);

  return (
    <Box>
      <Typography variant="h3">Mon compte</Typography>
      <Box>
        <Profile player={player} isConnected={user.isConnected} />
        <MyButton />
      </Box>
    </Box>
  );
}
