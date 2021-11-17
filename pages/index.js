import Head from "next/head";
import styles from "./index.module.css";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Mi blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </div>
);

export default Home;
