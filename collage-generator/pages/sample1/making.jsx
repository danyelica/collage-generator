import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import Info from "../../components/info";
import ExampleIndicators from "../../public/assets/examples/exemplo1-indicators.png";
import Example from "../../public/assets/examples/exemplo1.png";
import styles from "../../styles/Making.module.css";
import { uploadFiles } from "../../utils/requests";

export default function Making() {
  const [form, setForm] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [info, setInfo, remove] = useLocalStorage("info", "user-info");
  const [list, setList] = useState(null);
  const [openWait, setOpenWait] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (list) {
      handleSaving();
    }
  }, [list]);

  function handleInputs(event) {
    const target = event.target;

    if (event.target.id.includes("Pic")) {
      return setForm({ ...form, [target.id]: target.files[0] });
    }

    return setForm({ ...form, [target.id]: target.value });
  }

  async function handleSubmit() {
    event.preventDefault();

    if (
      !form.top ||
      !form.mainText ||
      !form.words ||
      !form.squarePic ||
      !form.firstRecPic ||
      !form.secondRecPic ||
      !form.thirdRecPic ||
      !form.fourthRecPic ||
      !form.backgroundPic
    ) {
      return setErrorMessage("Você precisa preencher todos os campos");
    }

    if (
      (!form.squarePic.name.includes("jpg") &&
        !form.squarePic.name.includes("jpeg") &&
        !form.squarePic.name.includes("png")) ||
      (!form.firstRecPic.name.includes("jpg") &&
        !form.firstRecPic.name.includes("jpeg") &&
        !form.firstRecPic.name.includes("png")) ||
      (!form.secondRecPic.name.includes("jpg") &&
        !form.secondRecPic.name.includes("jpeg") &&
        !form.secondRecPic.name.includes("png")) ||
      (!form.thirdRecPic.name.includes("jpg") &&
        !form.thirdRecPic.name.includes("jpeg") &&
        !form.thirdRecPic.name.includes("png")) ||
      (!form.fourthRecPic.name.includes("jpg") &&
        !form.fourthRecPic.name.includes("jpeg") &&
        !form.fourthRecPic.name.includes("png")) ||
      (!form.backgroundPic.name.includes("jpg") &&
        !form.backgroundPic.name.includes("jpeg") &&
        !form.backgroundPic.name.includes("png"))
    ) {
      return setErrorMessage(
        "As fotos precisam estar no formato .png, .jpg ou .jpeg"
      );
    }

    try {
      const files = [
        form.squarePic,
        form.firstRecPic,
        form.secondRecPic,
        form.thirdRecPic,
        form.fourthRecPic,
        form.backgroundPic,
      ];

      const formData = new FormData();
      for (let photo of files) {
        formData.append("photo", photo);
      }

      setOpenWait(true);

      const response = await uploadFiles(formData);
      return setList(response);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSaving() {
    console.log("entrei");
    const squarePic = list.filter((pic) =>
      pic.url.includes(form.squarePic.name)
    );
    const firstRecPic = list.filter((pic) =>
      pic.url.includes(form.firstRecPic.name)
    );
    const secondRecPic = list.filter((pic) =>
      pic.url.includes(form.secondRecPic.name)
    );
    const thirdRecPic = list.filter((pic) =>
      pic.url.includes(form.thirdRecPic.name)
    );
    const fourthRecPic = list.filter((pic) =>
      pic.url.includes(form.fourthRecPic.name)
    );
    const backgroundPic = list.filter((pic) =>
      pic.url.includes(form.backgroundPic.name)
    );

    const object = {
      ...form,
      squarePic: squarePic[0].url,
      firstRecPic: firstRecPic[0].url,
      secondRecPic: secondRecPic[0].url,
      thirdRecPic: thirdRecPic[0].url,
      fourthRecPic: fourthRecPic[0].url,
      backgroundPic: backgroundPic[0].url,
    };

    setInfo(object);

    return router.push("/sample1/done");
  }

  return (
    <div>
      <header>
        <Info />
      </header>

      {openWait ? (
        <main className={styles.containerCenter}>
          <img src='https://media.tenor.com/9fBgVWrDYs0AAAAi/run-busy.gif' />
          <h2 className={styles.title}>Correndo indo buscar sua foto</h2>
        </main>
      ) : (
        <main className={styles.container}>
          <div>
            <h3 className={styles.title}>Resultado final</h3>
            <Image
              src={Example}
              className={styles.imageFinal}
              alt='A image with the final result'
            />
          </div>
          <Image
            src={ExampleIndicators}
            className={styles.imageInd}
            alt='A image with the final result and some indicators'
          />
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <label htmlFor='top' className={styles.label}>
                Palavras do topo:
              </label>
              <div className={styles.inputArea}>
                <div className={styles.pinkIndicator}>
                  <p className={styles.indicatorNumber}>1</p>
                </div>
                <input
                  onChange={(event) => handleInputs(event)}
                  type='text'
                  id='top'
                  className={styles.input}
                  placeholder='small, cute, friendly'
                />
              </div>
              <label htmlFor='mainText' className={styles.label}>
                Palavra principal:
              </label>
              <div className={styles.inputArea}>
                <div className={styles.purpleIndicator}>
                  <p className={styles.indicatorNumber}>2</p>
                </div>
                <input
                  onChange={(event) => handleInputs(event)}
                  type='text'
                  id='mainText'
                  className={styles.input}
                  placeholder='Nori'
                />
              </div>
              <label htmlFor='words' className={styles.label}>
                Palavras ao lado das fotos:
              </label>
              <div className={styles.inputArea}>
                <div className={styles.blueIndicator}>
                  <p className={styles.indicatorNumber}>3</p>
                </div>
                <input
                  onChange={(event) => handleInputs(event)}
                  type='text'
                  id='words'
                  className={styles.input}
                  placeholder='kitty, baby, tiny, happy'
                />
              </div>
              <label htmlFor='squarePic' className={styles.label}>
                Foto central quadrada:
              </label>
              <div className={styles.inputArea}>
                <div className={styles.greenIndicator}>
                  <p className={styles.indicatorNumber}>4</p>
                </div>
                <label htmlFor='squarePic' className={styles.greenFile}>
                  {form.squarePic ? form.squarePic.name : "enviar arquivo"}
                </label>
                <input
                  onChange={(event) => handleInputs(event)}
                  type='file'
                  id='squarePic'
                  className={styles.greenFile}
                />
              </div>
              <div className={styles.fileArea}>
                <div>
                  <label htmlFor='firstRecPic' className={styles.label}>
                    1ª imagem retangular:
                  </label>
                  <div className={styles.inputArea}>
                    <div className={styles.orangeIndicator}>
                      <p className={styles.indicatorNumber}>5</p>
                    </div>
                    <label htmlFor='firstRecPic' className={styles.orangeFile}>
                      {form.firstRecPic
                        ? form.firstRecPic.name
                        : "enviar arquivo"}
                    </label>
                    <input
                      onChange={(event) => handleInputs(event)}
                      type='file'
                      id='firstRecPic'
                      className={styles.orangeFile}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='secondRecPic' className={styles.label}>
                    2ª imagem retangular:
                  </label>
                  <div className={styles.inputArea}>
                    <div className={styles.yellowIndicator}>
                      <p className={styles.indicatorNumber}>6</p>
                    </div>
                    <label htmlFor='secondRecPic' className={styles.yellowFile}>
                      {form.secondRecPic
                        ? form.secondRecPic.name
                        : "enviar arquivo"}
                    </label>
                    <input
                      onChange={(event) => handleInputs(event)}
                      type='file'
                      id='secondRecPic'
                      className={styles.yellowFile}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.fileArea}>
                <div>
                  <label htmlFor='thirdRecPic' className={styles.label}>
                    3ª imagem retangular:
                  </label>
                  <div className={styles.inputArea}>
                    <div className={styles.violetIndicator}>
                      <p className={styles.indicatorNumber}>7</p>
                    </div>
                    <label htmlFor='thirdRecPic' className={styles.violetFile}>
                      {form.thirdRecPic
                        ? form.thirdRecPic.name
                        : "enviar arquivo"}
                    </label>
                    <input
                      onChange={(event) => handleInputs(event)}
                      type='file'
                      id='thirdRecPic'
                      className={styles.violetFile}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='fourthRecPic' className={styles.label}>
                    4ª imagem retangular:
                  </label>
                  <div className={styles.inputArea}>
                    <div className={styles.oliveIndicator}>
                      <p className={styles.indicatorNumber}>8</p>
                    </div>
                    <label htmlFor='fourthRecPic' className={styles.oliveFile}>
                      {form.fourthRecPic
                        ? form.fourthRecPic.name
                        : "enviar arquivo"}
                    </label>
                    <input
                      onChange={(event) => handleInputs(event)}
                      type='file'
                      id='fourthRecPic'
                      className={styles.oliveFile}
                    />
                  </div>
                </div>
              </div>
              <label htmlFor='backgroundPic' className={styles.label}>
                Foto de fundo:
              </label>
              <div className={styles.inputArea}>
                <div className={styles.brownIndicator}>
                  <p className={styles.indicatorNumber}>9</p>
                </div>
                <label htmlFor='backgroundPic' className={styles.brownFile}>
                  {form.backgroundPic
                    ? form.backgroundPic.name
                    : "enviar arquivo"}
                </label>
                <input
                  onChange={(event) => handleInputs(event)}
                  type='file'
                  id='backgroundPic'
                  className={styles.brownFile}
                />
              </div>
            </div>
            <div className={styles.bottom}>
              {errorMessage && (
                <div className={styles.error}>
                  <p className={styles.errorMessage}>{errorMessage}</p>
                </div>
              )}
              <button className={styles.button}>Gerar minha colagem</button>
            </div>
          </form>
        </main>
      )}
    </div>
  );
}
