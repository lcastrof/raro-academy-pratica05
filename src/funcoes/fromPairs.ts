import { KeyAndValue } from "../../types/keyAndValue";

/**
 * Deve criar um objeto a partir da lista de arrays chave/valor
 * 
 * Ex.: fromPairs(['a', 'a'], ['b': 1], ['c': false]) === { a: 'a', b: 1, c: false }
 * 
 * @param args 
 * @returns 
 */
export const fromPairs = (args: KeyAndValue[]): Record<string, unknown> => {
  const objetoFinal = args.reduce((acc, [chave, valor]) => {
    // atribuindo chave e valor ao objeto inicial do reduce
    acc[chave] = valor;
    return acc;
  }, {});
  return objetoFinal;
};