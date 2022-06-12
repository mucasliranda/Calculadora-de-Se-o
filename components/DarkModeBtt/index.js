import { SpeedDial } from "@mui/material"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDarkMode } from "../../provider/DarkMode";


export default function DarkModeBtt() {

  const { darkMode, toggleDarkMode } = useDarkMode()

  return(
    <SpeedDial
    ariaLabel="SpeedDial basic example"
    sx={{ position: "fixed", bottom: 16, right: 16 }}
    icon={darkMode ? <DarkModeIcon /> : <LightModeIcon sx={{color: "#fff"}} />}
    onClick={toggleDarkMode}
    />
  )

}