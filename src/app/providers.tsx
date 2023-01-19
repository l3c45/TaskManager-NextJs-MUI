'use client';

import { lightMode,darkMode } from "@/theme";
import {  CssBaseline, ThemeProvider } from "@mui/material";



export function Providers({ children }:{
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={lightMode}>
    <CssBaseline/>
        {children}
      
    </ThemeProvider>
  );
}
