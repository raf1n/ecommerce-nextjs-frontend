import React, { useEffect } from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { controller, store } from "../src/state/StateController";
import Header from "../components/shared/SharedHeader/Header";
import Footer from "../components/shared/SharedFooter/Footer";
import { EcommerceApi } from "../src/API/EcommerceApi";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  useEffect(() => {
    const getAllCartData = async () => {
      const { res, err } = await EcommerceApi.getAllCartData("user_slug_1");
      if (res) {
        controller.setAllCartListData(res);
        console.log(res);
      }
    };
    getAllCartData();
  }, []);
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </React.Fragment>
    </Provider>
  );
}
