import React from 'react'; // Importa o módulo React
import { View, Text, StyleSheet } from 'react-native'; // Importa os módulos necessários do react-native
import CharacterList from '../components/CharacterList'; // Importa o componente CharacterList

// Componente de tela de HomeScreen
const HomeScreen = () => {
  return (
    // Retorna a visualização da tela HomeScreen
    <View style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.title}>Rick and Morty Characters</Text>
      {/* Lista de personagens */}
      <CharacterList />
    </View>
  );
};

// Estilos para o componente HomeScreen
const styles = StyleSheet.create({
  title: {
    fontSize: 24, // Tamanho da fonte
    fontWeight: 'bold', // Peso da fonte
    marginBottom: 16, // Margem inferior
    textAlign: 'center', // Alinhamento de texto
    backgroundColor: '#CCC444', // Cor de fundo do título
  },
});

// Exporta o componente HomeScreen para uso em outros arquivos
export default HomeScreen;