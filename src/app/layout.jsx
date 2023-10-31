import { Poppins } from "next/font/google";
import "./globals.css";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '900'],
  style: 'normal',
  subsets: ['latin'],
});
export const metadata = {
  title: "Folcode challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-900`}>
        <PrimeReactProvider>{children} </PrimeReactProvider>
      </body>
    </html>
  );
}
