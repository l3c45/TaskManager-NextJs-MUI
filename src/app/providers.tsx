"use client";

import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/theme/createEmotionCache";
import { lightMode, darkMode } from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { UIContext, UIProvider } from "@/context/ui";
import { EntrieProvider } from "@/context/entries";
import { SnackbarProvider } from "notistack";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const clientSideEmotionCache: EmotionCache = createEmotionCache();

function Providers_({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useContext(UIContext);



  useEffect(() => {
    const cookieTheme = Cookies.get("theme");
    

    toggleTheme(cookieTheme || "dark");
  }, []);

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme === "dark" ? darkMode : lightMode}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <EntrieProvider>
        <UIProvider>
          <Providers_>{children}</Providers_>
        </UIProvider>
      </EntrieProvider>
    </SnackbarProvider>
  );
};
