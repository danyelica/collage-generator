import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Info from "../components/info";
import Example1 from "../public/assets/examples/exemplo1.png";
import Example2 from "../public/assets/examples/exemplo2.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gerador de colagens</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        <Info />
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Comece sua colagem de fotos! </h1>
        <h2 className={styles.subtitle}>Escolha o modelo</h2>
        <div className={styles.imagesContainer}>
          <Link href='sample1/making/'>
            <Image
              src={Example1}
              alt={"colagem de exemplo 1"}
              className={styles.images}
            />
          </Link>
          <Link href='sample2/making/'>
            <Image
              src={Example2}
              alt={"colagem de exemplo 2"}
              className={styles.images}
            />
          </Link>
        </div>
      </main>
    </div>
  );
}
