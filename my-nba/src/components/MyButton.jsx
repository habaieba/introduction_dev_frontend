import { UserContext, UserDispatchContext } from "@/context/userContext";
import { Box, Button } from "@mui/material";
import { useContext } from "react";

export default function LoginButton() {
  const user = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);

  let action = {};
  if (user.isConnected) {
    action.type = "logout";
  } else {
    action.type = "login";
    action.user = {
      username: "Abderrahmane",
      avatarUrl:
        "https://ca-times.brightspotcdn.com/dims4/default/0f13f1e/2147483647/strip/true/crop/4937x3292+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F4e%2F4e%2Fba20004c41a5bc970aad01b5739b%2Fhttps-delivery.gettyimages.com%2Fdownloads%2F1199826353.jpg",
    };
  }

  function handleOnClick() {
    dispatch(action);
  }

  return (
    <Box>
      <Button
        variant="contained"
        {...(user.isConnected && { color: "error" })}
        onClick={handleOnClick}
      >
        {user.isConnected ? "Se déconnecter" : "Se connecter"}
      </Button>
    </Box>
  );
}
