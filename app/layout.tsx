import Header from './Header';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Test</title>
        <script src="https://kit.fontawesome.com/8795cf8950.js" crossOrigin="anonymous"></script>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
