import Head from "next/head";
import { useRouter } from "next/router";
import "@/styles/globals.scss";
import "@/public/fonts/iconmoon/style.css";
import Layout from "@/components/layout";

// Fonts
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
    const router = useRouter();
    let pageName = router.pathname.replace("/", ""); // removes the first slash
    pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    pageName.toString();
    return (
        <>
            <Head>
                <title>ZaanCorp {!pageName ? "" : `| ${pageName}`}</title>
                <meta name="description" content="a" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <style jsx global>{`
                    html {
                        font-family: ${inter.style.fontFamily};
                    }
                `}</style>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
