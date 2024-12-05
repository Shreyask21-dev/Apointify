import { Html, Head, Main, NextScript  } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
     <Head>


  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <title>Appointify</title>
  <link rel="shortcut icon" href="./favicon.ico" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="/assets/vendor/bootstrap-icons/font/bootstrap-icons.css" />
  <link rel="stylesheet" href="/assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css" />
  <link rel="stylesheet" href="/assets/vendor/aos/dist/aos.css" />
  <link rel="stylesheet" href="/assets/css/style-main.css" />
  <link rel="stylesheet" href="/assets/css/theme.min.css"/>
     </Head>
      <body>
        <Main />
        <NextScript />
        
     
      </body>
    </Html>
  );
}
