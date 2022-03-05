/**
 * Retorna um array com todos os elementos únicos.
 * 
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 * 
 * @param items array com itens de qualquer tipo.
 * 
 * @returns somente os itens definidos.
 */
export const uniq = <T>(args: T[]): T[] => {
  const arrayFiltrado = [];
  args.forEach((item) => {
    if (!arrayFiltrado.includes(item)) arrayFiltrado.push(item);
  });
  return arrayFiltrado;
};