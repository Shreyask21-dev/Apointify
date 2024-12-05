import "@/styles/globals.css";
import Layout from "@/layout/Layout";
import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App({ Component, pageProps }) {



  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Layout>
        <main id="content" role="main">
            <Component {...pageProps} />
          </main>
      </Layout>
    </>
  );
}