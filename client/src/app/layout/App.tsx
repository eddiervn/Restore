import { useEffect, useState } from "react"
import type { Product } from "../models/product";
import Catalog from "../../features/catralog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'dark' ?  '#121212' : '#e9ecef' 
      }
    }
  })

  useEffect(() =>{
    fetch('http://localhost:5000/api/products')
    .then(res => res.json())
    .then(data => setProducts(data));
  },[]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Box sx={{
          minHeight: '100vh', 
          background: (darkMode) 
          ? 'radial-gradient(circle, #1e3a3a, #111b27)' 
          : 'radial-gradient(circle, #baecf9, #f0f9ff)',
          py: 5
        }}>
        <Container sx={{mt:8}}>
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
