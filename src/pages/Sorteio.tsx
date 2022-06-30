import { useState } from 'react';
import { useListaDeParticipantes } from 'state/hooks/useListaDeParticipantes';
import { useResultadoSorteio } from 'state/hooks/useResultadoSorteio';
import styles from './Sorteio.module.scss';
import aviao from 'images/aviao.png';
import Card from 'components/Card';

const Sorteio = () => {

  const resultado = useResultadoSorteio();
  const participantes = useListaDeParticipantes();

  const [participanteDaVez, setParticipanteDaVez] = useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  }

  return (
    <Card>
      <section className={styles.sorteio}>
        <form onSubmit={sortear}>
          <select
            name='participanteDaVez'
            id='participanteDaVez'
            placeholder='Selecione o seu nome'
            value={participanteDaVez}
            onChange={evento => setParticipanteDaVez(evento.target.value)}
            required
          >
            <option>Selecione seu nome</option>
            {participantes.map(participante =>
              <option key={participante}>{participante}</option>
            )}
          </select>
          <button className={styles.botao_sortear}>Sortear!</button>
        </form>
        {amigoSecreto &&
          <p
            className={styles.sorteio__resultado}
            role='alert'
          >
            {amigoSecreto}
          </p>}
        <footer>
          <img src={aviao} alt='Um desenho de um avião de papel' />
        </footer>
      </section>
    </Card>
  );
}

export default Sorteio;