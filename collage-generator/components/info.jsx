import Image from "next/image";
import { useState } from "react";
import Polygon from "../public/assets/polygon-icon.svg";
import styles from "./info.module.css";

export default function Info() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.info} onClick={() => setOpen(!open)}>
      {open && (
        <div>
          <Image src={Polygon} className={styles.image} />
          <div className={styles.open}>
            <h3 className={styles.link}>
              <a
                href='https://www.linkedin.com/in/danyelica/'
                target='_blank'
                rel='noreferrer'
              >
                {" "}
                @danyelica
              </a>
            </h3>
            <h3 className={styles.link}>
              <a
                href='https://www.deviantart.com/southae'
                target='_blank'
                rel='noreferrer'
              >
                @southae
              </a>
            </h3>
          </div>
        </div>
      )}
      <div className={styles.circle}>
        <p className={styles.circleFont}>i</p>
      </div>

      <p className={styles.infoFont}>créditos</p>
    </div>
  );
}
