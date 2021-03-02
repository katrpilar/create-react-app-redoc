import { AppProps } from "next/app";
import * as React from "react";
import '../App.css';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
