import styles from './Cabecalho.module.scss';
import participante from 'images/participante.png'

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.cabecalho__logo} role='img' aria-label='Logo do Sorteador'></div>
      <img className={styles.cabecalho__participante} src={participante} alt='Participante com um presente na mão' />
    </header>
  );
};

export default Cabecalho;