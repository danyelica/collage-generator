import Head from "next/head";
import styles from "../../styles/Sample2.module.css";

export default function Sample2() {
  return (
    <div className='container'>
      <Head>
        <title>Exemplo 2</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <p>opa</p>
      </main>
    </div>
  );
}
