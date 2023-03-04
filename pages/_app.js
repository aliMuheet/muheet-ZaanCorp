import "@/styles/globals.scss";
import "@/public/fonts/iconmoon/style.css";
import Layout from "@/components/layout";

// Fonts
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <style jsx global>{`
                html {
                    font-family: ${inter.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </Layout>
    );
}
