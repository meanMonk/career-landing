import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hire(Idea) – Launch a Career Page & Job Board in Minutes',
  description: 'Create a branded career page, share jobs everywhere, and track applicants — all without code. (HireIdea) makes hiring simple for small teams.',
  keywords: 'career page builder, job board widget, hiring tool, ATS alternative, recruitment software, simple applicant tracking, post to LinkedIn',
  authors: [{ name: 'Vaayu Labs' }],
  creator: 'Vaayu Labs',
  publisher: 'Vaayu Labs',
  metadataBase: new URL('https://hire.vaayulabs.xyz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hire.vaayulabs.xyz',
    title: 'Hire(Idea) – Launch a Career Page & Job Board in Minutes',
    description: 'Stop juggling spreadsheets and email chains. Hire(Idea) helps small teams launch career pages, post jobs to multiple platforms, and track applicants — in minutes.',
    siteName: 'Hire(Idea)',
    images: [
      {
        url: '/images/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Hire(Idea) – Simplified hiring for small teams',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire(Idea) – Launch a Career Page & Job Board in Minutes',
    description: 'Stop juggling spreadsheets and email chains. Hire(Idea) helps small teams launch career pages, post jobs to multiple platforms, and track applicants — in minutes.',
    images: ['/images/og_image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DFYCWHE6FK"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DFYCWHE6FK');
            `,
          }}
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'hire(idea)',
              description: 'Professional hiring widget and job board builder',
              url: 'https://hire.vaayulabs.xyz',
              logo: 'https://hire.vaayulabs.xyz/images/logo.png',
              sameAs: [
                'https://x.com/sahil_kashetwar',
                'https://www.linkedin.com/in/sahil24'
              ]
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-background text-text`}>
        {children}
      </body>
    </html>
  )
} 