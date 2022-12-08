import Head from "next/head";
import Image from "next/image";
import { PhotosFirstSample } from "../api/photos";
import CloseIcon from "../../public/assets/images/example1/close-icon.png";
import SearchBar from "../../public/assets/images/example1/search-bar.png";
import styles from "../../styles/Sample1.module.css";

export default function Sample1() {
  return (
    <div className='container'>
      <Head>
        <title>Exemplo 1</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='mainPicture'>
        <div className={styles.texture}>
          <div className={styles.top}>
            <div className={styles.lineRight}></div>
            <p className={styles.topTitle}>small • cute • friendly </p>
            <div className={styles.lineLeft}></div>
          </div>
          <h1 className={styles.mainTitle}>Nori</h1>
          <Image
            src={PhotosFirstSample.Photo1}
            className={styles.firstImage}
            alt='A white cat looking at the camera'
          />
          <Image
            src={CloseIcon}
            className={styles.closeIcon}
            alt='A white cat looking at the camera'
          />
          <Image
            src={SearchBar}
            className={styles.searchBar}
            alt='A white cat looking at the camera'
          />
          <div className={styles.rowFirst}>
            <Image
              src={PhotosFirstSample.Photo2}
              alt='A white cat sleeping all stretch'
              className={styles.tinyImage}
            />
            <h3 className={styles.texts}>kitty</h3>
          </div>
          <div className={styles.row}>
            <h3 className={styles.texts}>baby</h3>
            <Image
              src={PhotosFirstSample.Photo3}
              alt='A white cat sleeping all stretch'
              className={styles.tinyImage}
            />
          </div>
          <div className={styles.row}>
            <Image
              src={PhotosFirstSample.Photo4}
              alt='A white cat sleeping all stretch'
              className={styles.tinyImage}
            />
            <h3 className={styles.texts}>tiny</h3>
          </div>
          <div className={styles.row}>
            <h3 className={styles.texts}>happy</h3>
            <Image
              src={PhotosFirstSample.Photo5}
              alt='A white cat sleeping all stretch'
              className={styles.tinyImage}
            />
          </div>
        </div>
      </main>
      <style jsx>{`
        .mainPicture {
          height: 1080px;
          width: 608px;

          background-image: url(${PhotosFirstSample.Photo6.src});
          background-position: center;
          background-size: cover;
        }
      `}</style>
    </div>
  );
}
