import Head from "next/head";
import styles from "../../styles/Sample2.module.css";

export default function Sample2() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Exemplo 2</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.secondExample}>
        <p>opa</p>
      </main>
    </div>
  );
}
