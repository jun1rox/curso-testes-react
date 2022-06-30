import { useNavigate } from 'react-router-dom';
import { useListaDeParticipantes } from 'state/hooks/useListaDeParticipantes';
import styles from './Rodape.module.scss';

const Rodape = () => {

  const participantes = useListaDeParticipantes();

  const navegarPara = useNavigate();

  const iniciar = () => {
    navegarPara('/sorteio');
  }

  return (
    <footer className={styles.rodape_configuracoes}>
      <button
        className={styles.botao}
        disabled={participantes.length < 3}
        onClick={iniciar}
      >
        Iniciar brincadeira!
      </button>
    </footer>
  );
};

export default Rodape;