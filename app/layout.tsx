import { Footer, NavBar } from "@/components";
import "./globals.css";
import AboutPage from "@/components/AboutPage";


export const metadata = {
  title: "Wheels Away",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <AboutPage />
        <Footer />
      </body>
    </html>
  );
}