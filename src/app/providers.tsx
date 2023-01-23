"use client";

import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/theme/createEmotionCache";
import { lightMode, darkMode } from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { UIProvider } from "@/context/ui";
import { EntrieProvider } from "@/context/entries";
import { SnackbarProvider } from 'notistack';

const clientSideEmotionCache: EmotionCache = createEmotionCache();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
<SnackbarProvider maxSnack={3}>
    <EntrieProvider>
    <UIProvider>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={darkMode}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </UIProvider>
    </EntrieProvider>
    </SnackbarProvider>
  );
}
