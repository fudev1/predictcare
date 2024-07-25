import {
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { Link } from "react-router-dom";
import { navLinks } from "../routes/nav-links";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Button sx={{ m: 34 }} onClick={toggleDrawer(true)}>
        Open
      </Button>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          {navLinks.map((link) => (
            <ListItemButton key={link.title} component={Link} to={link.path}>
              <link.icon />
              <ListItemText primary={link.title} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
