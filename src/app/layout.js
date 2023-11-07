import { Roboto } from "next/font/google";
import "./main.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
});

export const metadata = {
    title: "Jara Portfolio",
    description: "Jara is a single page portfolio site.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <Navbar />

                {children}
            </body>
        </html>
    );
}
