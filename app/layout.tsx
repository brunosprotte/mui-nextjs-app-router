
import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { ModalProvider } from '@/providers/modal-provider';

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeRegistry>
            <ModalProvider />
            {children}
          </ThemeRegistry>
        </body>
      </html>
    </ClerkProvider>
  );
}
