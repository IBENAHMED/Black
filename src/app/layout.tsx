import "./globals.css"
import Navbar from "@/components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="dark">
      <body>
        {/* <div className='w-full flex justify-center items-center mx-2'> */}
        {/* <Navbar/> */}
        {/* </div> */}
        {children}
      </body>
    </html>
  );
}
