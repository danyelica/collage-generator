import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import uploadFiles from "../../utils/requests";

export default function Home() {
  const [files, setFiles] = useState("");

  async function handleUpload() {
    if (files.length < 1) return;

    const formData = new FormData();
    for (let photo of files) {
      formData.append("photo", photo);
    }

    try {
      const response = await uploadFiles(formData);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  function handleInput(data) {
    setFiles([...files, data[0]]);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Teste</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <input
          type='file'
          onChange={(event) => handleInput(event.target.files)}
        />
        <input
          type='file'
          onChange={(event) => handleInput(event.target.files)}
        />

        <button onClick={() => handleUpload()}>Upload</button>
      </main>
    </div>
  );
}
