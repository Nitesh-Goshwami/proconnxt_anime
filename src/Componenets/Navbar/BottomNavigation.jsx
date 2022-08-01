import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ContactPageTwoToneIcon from "@mui/icons-material/ContactPageTwoTone";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalFloristTwoToneIcon from "@mui/icons-material/LocalFloristTwoTone";
import { useNavigate } from "react-router-dom";

export default function LabelBottomNavigation() {
  let tmphook = window.location.pathname;
  const [value, setValue] = React.useState();
  React.useEffect(() => {
    if (tmphook === "/") {
      setValue("/");
    } else setValue(tmphook.split("").splice(1).join(""));

    return () => {};
  }, [tmphook]);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        bottom: 0,
        ml: "7.5%",
        zIndex: "111",
      }}
      display={{ xs: "block", sm: "block", lg: "none" }}
    >
      <BottomNavigation
        sx={{ width: "85%" }}
        value={value}
        onChange={(e) => {}}
      >
        <BottomNavigationAction
          label="Home"
          value="/"
          icon={<HomeIcon />}
          onClick={(e) => {
            navigate("/");
          }}
        />
        <BottomNavigationAction
          label="Movies"
          value="Movies"
          icon={<LocalFloristTwoToneIcon />}
          onClick={(e) => {
            navigate("/Movies");
          }}
        />
        <BottomNavigationAction
          label="About us"
          value="About"
          icon={<InfoTwoToneIcon />}
          onClick={(e) => {
            navigate("/About");
          }}
        />
        <BottomNavigationAction
          label="Contact"
          value="Contact"
          icon={<ContactPageTwoToneIcon />}
          onClick={(e) => {
            navigate("/Contact");
          }}
        />
      </BottomNavigation>
    </Box>
  );
}