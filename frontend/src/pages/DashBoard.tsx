import { Box, Typography } from "@mui/material";

export default function DashBoard() {
  return (
    <Box
      sx={{
        height: "300px",
        display: "flex",
        margin: "auto",
        alignItems: "center",
      }}
    >
      <Typography variant="h1">Component DashBoard</Typography>
    </Box>
  );
}
