import React from 'react'; // Importa o módulo React
import { View, Text, Image, StyleSheet } from 'react-native'; // Importa os módulos necessários do react-native

// Componente de item de lista de personagem
const CharacterListItem = ({ character }) => {
  return (
    // Retorna a visualização do item da lista de personagem
    <View style={styles.container}>
      {/* Exibe a imagem do personagem */}
      <Image
        source={{ uri: character.image }} // Especifica a fonte da imagem
        style={styles.image} // Aplica estilos à imagem
      />
      {/* Contêiner para texto */}
      <View style={styles.textContainer}>
        {/* Nome do personagem */}
        <Text style={styles.name}>{character.name}</Text>
        {/* Espécie do personagem */}
        <Text style={styles.species}>{character.species}</Text>
        {/* Estado do personagem */}
        <Text style={styles.status}>{character.status}</Text>
      </View>
    </View>
  );
};

// Estilos para o componente CharacterListItem
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Layout em linha
    alignItems: 'center', // Alinhamento vertical
    backgroundColor: '#fff', // Cor de fundo
    padding: 10, // Preenchimento
    marginBottom: 10, // Margem inferior
    borderRadius: 8, // Borda arredondada
    elevation: 3, // Adiciona sombra no Android
    shadowColor: '#000', // Cor da sombra no iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 60, // Largura da imagem
    height: 60, // Altura da imagem
    borderRadius: 30, // Borda arredondada para tornar a imagem circular
    marginRight: 15, // Margem à direita
  },
  textContainer: {
    flex: 1, // Ocupa todo o espaço disponível
    flexDirection: 'column', // Layout em coluna
  },
  name: {
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Peso da fonte
    color: '#333', // Cor do texto
  },
  species: {
    fontSize: 14, // Tamanho da fonte
    color: '#666', // Cor do texto
  },
  status: {
    fontSize: 14, // Tamanho da fonte
    color: '#666', // Cor do texto
  },
});

// Exporta o componente CharacterListItem para uso em outros arquivos
export default CharacterListItem;
