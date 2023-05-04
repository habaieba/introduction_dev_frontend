import { Box, Divider, Stack, Typography } from "@mui/material";

export default function PlayerDetails({ player }) {
  return (
    <Box
      display={"flex"}
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Stack spacing={1} divider={<Divider flexItem variant="middle" />}>
        <Typography>Prénom : {player.first_name}</Typography>
        <Typography>Nom : {player.last_name}</Typography>
        <Typography>Équipe : {player.team.full_name}</Typography>
        <Typography>Poste : {player.position}</Typography>
        <Typography>
          Taille : {player.height_feet}&apos; {player.height_inches}&quot;
        </Typography>
        <Typography>Poids : {player.weight_pounds}</Typography>
      </Stack>
    </Box>
  );
}
