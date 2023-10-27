import '@mantine/core/styles.css';

import {
  MantineProvider,
  ColorSchemeScript,
  Container,
  Title, Box
} from '@mantine/core';
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: 'Mantine test app',
  description: 'I have followed setup instructions carefully',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">
          <SiteHeader />
          <Container size="xl">
            {children}
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
