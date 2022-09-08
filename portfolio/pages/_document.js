import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en-us">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="author" content="Yu-Chia Chen" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
