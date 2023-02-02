import Head from "next/head";
import React from "react";

export function SEO({ icon, title, description }) {

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <link rel="icon" href={icon} />
    </Head>
  );
}
