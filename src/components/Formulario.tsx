import { useRef, useState } from 'react';
import { useAdicionarParticipante } from 'state/hooks/useAdicionarParticipante';
import { useMensagemDeErro } from 'state/hooks/useMensagemDeErro';
import styles from './Formulario.module.scss';
import classNames from 'classnames';

const Formulario = () => {

  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const mensagemDeErro = useMensagemDeErro();

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    adicionarNaLista(nome);
    setNome('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={adicionarParticipante}>
      <div className={styles.grupo_input_btn}>
        <input
          ref={inputRef}
          value={nome}
          onChange={evento => setNome(evento.target.value)}
          type='text'
          placeholder='Insira os nomes dos participantes'
        />
        <button disabled={!nome}>Adicionar</button>
      </div>

      {mensagemDeErro &&
        <p
          className={classNames(styles.alerta, styles.erro)}
          role='alert'
        >
          {mensagemDeErro}
        </p>}
    </form>
  );
};

export default Formulario;