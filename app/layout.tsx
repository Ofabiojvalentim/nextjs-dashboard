import '@/app/ui/global.css';
//chapter 03
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={ `${inter.className} antialiased`}>{children}</body>
      
    </html>
  );
}
