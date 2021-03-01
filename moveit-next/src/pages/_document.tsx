/* esse documento.tsx carrega uma única vez quando o usuário navega na página. Tudo o que for estático, ou seja, que for mantido em todos as telas, deve ser adicionado aqui*/

import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png" type="image/png" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                  <Main/>
                  <NextScript/>
                </body>
            </Html>
        );
    }
}