import { realizarSorteio } from './realizarSorteio';

describe('dado um sorteio de amigo secreto', () => {

  test('cada participante não soteie o próprio nome', () => {

    const participantes = [
      'Ana',
      'Catarina',
      'Juliana',
      'João',
      'Jorge',
      'Livia'
    ];

    const sorteio = realizarSorteio(participantes);
    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    })
  })
})