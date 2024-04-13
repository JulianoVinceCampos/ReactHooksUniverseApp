import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import CharacterListItem from './CharacterListItem';
import { getCharacters } from '../utils/api';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]); // Estado para armazenar os personagens
  const [loading, setLoading] = useState(false); // Estado para indicar se os personagens estão sendo carregados
  const [page, setPage] = useState(1); // Número da página atual
  const [totalPages, setTotalPages] = useState(null); // Número total de páginas

  // Função para buscar personagens da API
  const fetchCharacters = async (pageNumber) => {
    setLoading(true); // Inicia o indicador de carregamento
    const charactersData = await getCharacters(pageNumber); // Busca os personagens da API
    setTotalPages(charactersData.info.pages); // Atualiza o número total de páginas
    if (pageNumber === 1) {
      setCharacters(charactersData.results); // Se for a primeira página, substitui os personagens existentes
    } else {
      setCharacters([...characters, ...charactersData.results]); // Senão, adiciona os personagens à lista existente
    }
    setLoading(false); // Finaliza o indicador de carregamento
  };

  useEffect(() => {
    fetchCharacters(page); // Busca os personagens ao montar o componente e quando a página muda
  }, [page]);

  // Função para carregar mais personagens quando o usuário rolar até o final da lista
  const handleLoadMore = useCallback(() => {
    if (page < totalPages && !loading) { // Verifica se há mais páginas e se não está carregando
      setPage(page + 1); // Incrementa o número da página para carregar mais personagens
    }
  }, [page, totalPages, loading]);

  // Função para renderizar o indicador de carregamento
  const renderFooter = () => {
    return loading ? <ActivityIndicator size="large" color="#0000ff" /> : null;
  };

  return (
    <View>
      {/* Lista de personagens */}
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CharacterListItem character={item} />}
        onEndReached={handleLoadMore} // Função para carregar mais personagens quando o usuário rolar até o final da lista
        onEndReachedThreshold={0.1} // Percentual da altura da lista que o usuário precisa rolar para acionar o carregamento
        ListFooterComponent={renderFooter} // Indicador de carregamento no final da lista
      />
    </View>
  );
};

export default CharacterList;
