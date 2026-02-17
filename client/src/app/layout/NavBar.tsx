import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavBar({ darkMode, setDarkMode } : Props) {
  return (
    <AppBar position="fixed" sx={{minWidth: '1124px', left: 0}} elevation={1}>
        <Toolbar>
            <Typography variant="h6" fontWeight={400}>Re-Store</Typography>
            <IconButton 
              title={ darkMode? 'Switch to light mode' : 'Switch to dark mode'} 
              onClick={() => setDarkMode(!darkMode)}>
              { darkMode ?  <LightMode/> : <DarkMode/> }
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}