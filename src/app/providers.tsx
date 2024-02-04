"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { FoxtrotTheme } from "common/setup/theme";
import { SessionProvider } from 'next-auth/react'
import "common/setup/theme/globals.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CacheProvider>
        <ColorModeScript
          initialColorMode={FoxtrotTheme.config.initialColorMode}
        />
        <ChakraProvider theme={FoxtrotTheme} resetCSS>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </SessionProvider>
  );
}
