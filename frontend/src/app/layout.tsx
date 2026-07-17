import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FutLink',
  description: 'Conectando talento y oportunidades en el fútbol',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
