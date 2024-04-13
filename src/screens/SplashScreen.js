import React from 'react'; // Importa o módulo React
import { View, Image, StyleSheet, Dimensions } from 'react-native'; // Importa os módulos necessários do react-native

// Componente de tela de SplashScreen
const SplashScreen = () => {
  return (
    // Retorna a visualização com a imagem de SplashScreen
    <View style={styles.container}>
      {/* Exibe a imagem de SplashScreen */}
      <Image
        source={require('../../assets/splash_logo.jpg')} // Especifica a fonte da imagem
        style={styles.image} // Aplica estilos à imagem
        resizeMode="cover" // Define o modo de redimensionamento da imagem
      />
    </View>
  );
};

// Obtém a altura e largura da janela do dispositivo
const { height, width } = Dimensions.get('window');

// Estilos para o componente SplashScreen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
  },
  image: {
    width: width, // Largura da imagem igual à largura da janela
    height: height, // Altura da imagem igual à altura da janela
    resizeMode: 'cover', // Ajusta a imagem para cobrir todo o espaço disponível
  },
});

// Exporta o componente SplashScreen para uso em outros arquivos
export default SplashScreen;
