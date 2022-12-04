import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>College Generator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Comece agora! </h1>{" "}
        <h1 className={styles.title}>
          <Link href='/sample1/example'>Exemplo 1</Link>
        </h1>
        <h1 className={styles.title}>
          <Link href='/sample2/example'>Exemplo 2</Link>
        </h1>
      </main>
    </div>
  );
}
