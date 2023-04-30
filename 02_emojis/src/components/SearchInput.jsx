import { Box, TextField } from "@mui/material";

export default function SearchInput({ handleChange }) {
  const onChange = (event) => {
    handleChange(event.target.value);
  };

  return (
    <Box>
      <TextField label="Rechercher un emoji..." fullWidth onChange={onChange} />
    </Box>
  );
}
