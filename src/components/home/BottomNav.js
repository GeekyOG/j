import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className="bottom-0 absolute right-0 left-0"
    >
      <BottomNavigationAction
        label="Home"
        value="Home"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Dashboard"
        value="Dashboard"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Add"
        value="Add"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="More" value="More" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
