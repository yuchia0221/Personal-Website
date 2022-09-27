import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
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

export default Document;
