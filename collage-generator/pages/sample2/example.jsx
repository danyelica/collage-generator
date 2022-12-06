import Head from "next/head";
import Image from "next/image";
import Flowers1 from "../../public/assets/images/example2/flowers-1.png";
import Flowers2 from "../../public/assets/images/example2/flowers-2.png";
import Tape from "../../public/assets/images/example2/tape.png";
import BrownTape from "../../public/assets/images/example2/brown-tape.png";
import { PhotosSecondSample } from "../api/photos";
import styles from "../../styles/Sample2.module.css";

export default function Sample2() {
  const date = new Date().toLocaleDateString("pt-BR", {
    month: "numeric",
    day: "numeric",
  });

  return (
    <div className='container'>
      <Head>
        <title>Exemplo 2</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.texture}>
          <div className={styles.top}>
            <h3 className={styles.date}>{date}</h3>
          </div>
          <div className={styles.left}>
            <h2 className={styles.title}>nori</h2>
            <h2 className={styles.subtitle}>kitty boy</h2>
          </div>
          <div className={styles.right}>
            <Image
              src={Flowers1}
              className={styles.flowersRight}
              alt='flowers'
            />
            <Image src={Tape} className={styles.tape} alt='a yellow tape' />
            <Image
              src={PhotosSecondSample.Photo7}
              className={styles.firstImage}
              alt='white cat'
            />
            <Image
              src={Flowers2}
              className={styles.flowersLeft}
              alt='flowers'
            />
            <Image
              src={BrownTape}
              className={styles.tapeBrown}
              alt='a brown tape'
            />
          </div>
          <div className={styles.palette}>
            <div className={styles.color1} />
            <div className={styles.color2} />
            <div className={styles.color3} />
          </div>
          <div className={styles.bottom}>
            <Image
              src={PhotosSecondSample.Photo8}
              className={styles.bottomPic}
              alt='white cat'
            />
            <Image
              src={PhotosSecondSample.Photo9}
              className={styles.bottomPic}
              alt='white cat'
            />
            <Image
              src={PhotosSecondSample.Photo10}
              className={styles.bottomPic}
              alt='white cat'
            />
          </div>
        </div>
      </main>
    </div>
  );
}
