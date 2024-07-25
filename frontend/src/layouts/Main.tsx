import { Box } from "@mui/material";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>{children}</Box>
    </>
  );
}
