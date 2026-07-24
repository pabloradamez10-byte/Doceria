import './globals.css';

export const metadata = { title: 'Doceria Cloud', description: 'Sua nuvem simples e segura' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
