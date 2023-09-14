"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { createGetInitialProps } from '@mantine/next';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

let getInitialProps = createGetInitialProps();

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  getInitialProps = getInitialProps
  return (
    <html lang="ja">
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
          fontFamily: 'Verdana, sans-serif',
        }}
      >
        <body className={inter.className}>
          <div className='flex min-h-screen flex-col items-center justify-center'>
            {children}
          </div>
        </body>
      </MantineProvider>
    </html>
  )
}
