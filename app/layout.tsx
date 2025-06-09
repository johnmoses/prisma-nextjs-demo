import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans text-foreground">
        <Header />
        <main>
          <div>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
