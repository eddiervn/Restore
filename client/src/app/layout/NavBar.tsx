import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

type Props = {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavBar({ darkMode, setDarkMode }: Props) {

  const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
  ]

  const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
  ]

  const navStyles = {
    color: 'inherit',
    typography: 'body1',
    '&:hover': {
      color: 'grey.300',
    },
    '&.active': {
      color: 'yellow',
    }
  }


  return (
    <AppBar position="fixed" sx={{ minWidth: '1124px', left: 0 }} elevation={1}>
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{display: 'flex', alignItems: 'center', flex: 1}}>
          <Typography
            component={NavLink}
            to="/"
            sx={{ ...navStyles, typography: 'h6', textDecoration: 'none', fontWeight: 400 }}>
            Re-Store
          </Typography>
          <IconButton
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <LightMode sx={{ color: 'yellow' }} /> : <DarkMode />}
          </IconButton>
        </Box>

        <List sx={{ display: 'flex', flex: '0 0 auto'}}>
          {midLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box sx={{display: 'flex', flex: 1, justifyContent: 'end'}}>
          <IconButton size="large" sx={{ color: 'inherit' }}>
            <ShoppingCart />
            <Badge badgeContent="4" color="error" sx={{ ml: .5, mb: 2 }} />
          </IconButton>
          
          <List sx={{ display: 'flex' }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>

      </Toolbar>
    </AppBar>
  )
}