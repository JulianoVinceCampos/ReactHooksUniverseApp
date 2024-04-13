// Definição da URL base da API
const API_BASE_URL = 'https://rickandmortyapi.com/api';

// Função assíncrona para obter os personagens
const getCharacters = async (pageNumber) => {
  // Realiza uma requisição para a API, especificando a página desejada
  const response = await fetch(`${API_BASE_URL}/character?page=${pageNumber}`);
  // Extrai os dados da resposta no formato JSON
  const data = await response.json();
  // Retorna os dados obtidos
  return data;
};

// Exporta a função getCharacters para que possa ser utilizada em outros arquivos
export { getCharacters };