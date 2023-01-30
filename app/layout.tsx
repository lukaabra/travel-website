import Header from './Header';
import AuthContext from './AuthContext';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Test</title>
      </head>
      <body>
        <AuthContext>
          <Header />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
