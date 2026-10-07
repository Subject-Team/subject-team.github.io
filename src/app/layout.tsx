import type { Metadata } from 'next';
import './globals.css';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';

export const metadata: Metadata = {
  title: 'Subject Team — Disciplined Systems & Architecture',
  description: 'An engineering collective specialized in low-level Godot game libraries (SLib), personal healthcare intelligence (SaJaPa), and resilient distributed architectures.',
  keywords: ['Subject Team', 'SLib', 'Godot', 'GDScript', 'SaJaPa', 'Software Architecture', 'TypeScript', 'Python'],
  authors: [{ name: 'Subject Team', url: 'https://github.com/Subject-Team' }],
  openGraph: {
    title: 'Subject Team — Disciplined Systems & Architecture',
    description: 'An engineering collective specialized in low-level Godot game libraries (SLib), personal healthcare intelligence (SaJaPa), and resilient distributed architectures.',
    url: 'https://github.com/Subject-Team',
    siteName: 'Subject Team',
    type: 'website',
  },
  icons: {
    icon: 'https://avatars.githubusercontent.com/u/176131640?v=4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Instant Theme Flicker Prevention Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('subject-theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen selection:bg-electric selection:text-white">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
