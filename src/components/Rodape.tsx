import { useNavigate } from 'react-router-dom';
import { useListaDeParticipantes } from 'state/hooks/useListaDeParticipantes';
import { useSorteador } from 'state/hooks/useSorteador';
import styles from './Rodape.module.scss';
import sacolas from 'images/sacolas.png';

const Rodape = () => {

  const participantes = useListaDeParticipantes();
  const navegarPara = useNavigate();
  const sortear = useSorteador();

  const iniciar = () => {

    sortear();
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
      <img src={sacolas} alt='Sacolas de compras' />
    </footer>
  );
};

export default Rodape;