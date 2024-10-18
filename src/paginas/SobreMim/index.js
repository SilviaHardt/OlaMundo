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
        Sou estudante da Alura, e atualmente estou focando no aprendizado de front-end.
      </p>
      <p className={styles.paragrafo}>
        Sou formada em Gestão de Recursos Humanos, e após alguns anos na área, decidi buscar uma nova aventura.
      </p>
      <p className={styles.paragrafo}>
        Decidi estudar desevolvimento por pura curiosidade em como as famosas telas pretas funcionava, e após alguns cursos, me encantei cada vez mais e decidi encarar esse novo desafio.
      </p>
      <p className={styles.paragrafo}>
        Espero em breve conseguir meu primeiro emprego como desenvolvedora para poder atuar no ramo e aprender cada vez mais.
      </p>
    </PostModelo>
  );
}
