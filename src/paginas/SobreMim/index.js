import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou a Silvia!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto sobre mim"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        ...
      </p>
      <p className={styles.paragrafo}>
        ...
      </p>
      <p className={styles.paragrafo}>
        ...
      </p>
      <p className={styles.paragrafo}>
        ...
      </p>
      <p className={styles.paragrafo}>
        ...
      </p>
      <p className={styles.paragrafo}>
        ...
      </p>
    </PostModelo>
  );
}
