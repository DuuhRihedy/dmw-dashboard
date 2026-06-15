import '../src/index.css';

export const metadata = {
  title: 'DMW Dashboard',
  description: 'Digital Masters World Manager',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
