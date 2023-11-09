import { Roboto } from "next/font/google";
import "./styles.css";
import "@/assets/css/custom.css";
import "@/assets/css/main.css";
import "@/assets/css/modalboxes.css";
import "@/assets/css/plugins.css";

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
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
