import { Metadata } from "next";

import { Navbar } from "common/components";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    template: "%s - Foxtrot Command",
    default: "Foxtrot Command",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
