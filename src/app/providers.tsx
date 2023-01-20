"use client";

import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/theme/createEmotionCache";
import { lightMode, darkMode } from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { UIProvider } from "@/context/ui";

const clientSideEmotionCache: EmotionCache = createEmotionCache();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UIProvider>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={darkMode}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </UIProvider>
  );
}
