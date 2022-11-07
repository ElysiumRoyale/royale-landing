import "../styles/globals.css";
import "../styles/fonts.css";
import Layout from "./layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Elysium Royale - A Decentralized Finance Casino"
        />
        <meta name="theme-color" content="#1FC7D4" />
        <meta name="twitter:image" content="https://elysiumroyale.finance/images/hero.png" />
        <meta
          name="twitter:description"
          content="Elysium Royale - Earn, Stake, Farm and lottery all in one place.  Use passive income rewards in the Elysium Royale Casino"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elysium Royale - A Decentralized Finance Casino" />
        <title>Elysium Royale</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
