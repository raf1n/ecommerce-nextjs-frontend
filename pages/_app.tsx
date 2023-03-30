import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/state/StateController";
import Header from "../components/shared/SharedHeader/Header";
import Footer from "../components/shared/SharedFooter/Footer";
import { SocialLogin } from "../components/helpers/SocialLogin";
import { Toaster } from "react-hot-toast";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
    SocialLogin.initFirebase();
  }, []);

  return (
    <Provider store={store}>
      <React.Fragment>
        <Toaster />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </React.Fragment>
    </Provider>
  );
}
