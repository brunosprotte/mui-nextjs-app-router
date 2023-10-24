
import * as React from 'react';

import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { ModalProvider } from '@/providers/ModalProvider';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

export const metadata = {
    title: 'Next.js App Router + Material UI v5',
    description: 'Next.js App Router + Material UI v5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <ClerkProvider appearance={{ baseTheme: dark }}>
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
