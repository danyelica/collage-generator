import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import Info from "../../components/info";
import CloseIcon from "../../public/assets/images/example1/close-icon.png";
import SearchBar from "../../public/assets/images/example1/search-bar.png";
import styles from "../../styles/Sample1.module.css";
import { uploadSite } from "../../utils/requests";

export default function Sample1() {
  const [done, setDone] = useState(false);
  const localInfo = useLocalStorage("info");
  const [info, setInfo] = useState(localInfo[0]);

  useEffect(() => {
    if (info) {
      handleFormatting();
    }
  }, []);

  function handleFormatting() {
    const formattingTop = info.top.split(",");
    const formattedTop = formattingTop.join(" • ");

    const formattedWords = info.words.split(",");

    setInfo({ ...info, top: formattedTop, words: formattedWords });
    setDone(true);
  }

  async function handleSavingImage() {
    const body = {
      url: "https://collage-generator.vercel.app/sample1/done",
      full_screen: true,
      google_fonts: "Cookie|Great Vibes|Bebas Neue",
    };

    try {
      const response = await uploadSite(body);

      return window.location.href(response.url);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <header>
        <Info />
      </header>

      <div className='container'>
        <main className={styles.main}>
          <div className='mainPicture'>
            <div className={styles.texture}>
              <div className={styles.top}>
                <div className={styles.lineRight}></div>
                <p className={styles.topTitle}>{info.top} </p>
                <div className={styles.lineLeft}></div>
              </div>
              <h1 className={styles.mainTitle}>{info.mainText}</h1>
              <img src={info.squarePic} className={styles.firstImage} />
              <Image
                src={CloseIcon}
                className={styles.closeIcon}
                alt='Um ícone de fechar'
              />
              <Image
                src={SearchBar}
                className={styles.searchBar}
                alt='Uma barra de busca'
              />
              <div className={styles.rowFirst}>
                <img src={info.firstRecPic} className={styles.tinyImage} />
                <h3 className={styles.texts}>{info.words[0]}</h3>
              </div>
              <div className={styles.row}>
                <h3 className={styles.texts}>{info.words[1]}</h3>
                <img src={info.secondRecPic} className={styles.tinyImage} />
              </div>
              <div className={styles.row}>
                <img src={info.thirdRecPic} className={styles.tinyImage} />
                <h3 className={styles.texts}>{info.words[2]}</h3>
              </div>
              <div className={styles.row}>
                <h3 className={styles.texts}>{info.words[3]}</h3>
                <img src={info.fourthRecPic} className={styles.tinyImage} />
              </div>
            </div>
          </div>
          <button onClick={() => handleSavingImage()} className={styles.button}>
            Salvar minha imagem
          </button>
        </main>
        {/*done ? (
          <div className={styles.center}>
            <img src='https://media.tenor.com/wHdr_idzE20AAAAi/black-cat.gif' />
            <h1 className={styles.waitingTitle}>
              Fazendo o meu melhor e procurando a sua foto
            </h1>
            <img
              className={styles.loading}
              src='https://media.tenor.com/5o2p0tH5LFQAAAAj/hug.gif'
            />
          </div>
          )*/}
        <style jsx>{`
          .mainPicture {
            height: 1080px;
            width: 608px;

            background-image: url(${info && info.backgroundPic});
            background-position: center;
            background-size: cover;
          }
        `}</style>
      </div>
    </div>
  );
}
