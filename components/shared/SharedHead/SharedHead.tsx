import Head from "next/head";
import React from "react";
// import { useSelector } from 'react-redux'

interface Props {
  title?: string;
  desc?: string;
  keyword?: string;
}

const SharedHead: React.FC<Props> = ({ title, desc, keyword: keywords }) => {
  // const states = useSelector(() => controller.states)

  return (
    <Head>
      {title ? (
        <>
          <title className="capitalize">{title + " - "}EaseShopping</title>
          <meta
            property="og:title"
            content={title + " | EaseShopping"}
            key="title"
          />
        </>
      ) : (
        <>
          <title className="capitalize">EaseShopping</title>
          <meta property="og:title" content={"EaseShopping"} key="title" />
        </>
      )}

      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Rich IT" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default SharedHead;
