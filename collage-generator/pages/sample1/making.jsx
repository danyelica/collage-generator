import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import Info from "../../components/info";
import ExampleIndicators from "../../public/assets/examples/exemplo1-indicators.png";
import Example from "../../public/assets/examples/exemplo1.png";
import styles from "../../styles/Making.module.css";

export default function Making() {
  const [form, setForm] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => console.log(form), [form]);

  function handleInputs(event) {
    const target = event.target;

    if (event.target.id.includes("Pic")) {
      return setForm({ ...form, [target.id]: target.files[0] });
    }

    return setForm({ ...form, [target.id]: target.value });
  }

  function handleSubmit() {
    event.preventDefault();

    if (
      !form.top ||
      !form.mainText ||
      !form.words ||
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
      setErrorMessage("Você precisa preencher todos os campos");
    }
  }

  return (
    <div>
      <header>
        <Info />
      </header>

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
    </div>
  );
}
