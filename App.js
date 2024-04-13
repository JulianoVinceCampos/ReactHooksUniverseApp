import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import SplashScreen from './src/screens/SplashScreen'; // Importa o componente SplashScreen
import HomeScreen from './src/screens/HomeScreen'; // Importa o componente HomeScreen

const App = () => {
  const [splashTimeOver, setSplashTimeOver] = useState(false);

  useEffect(() => {
    // Simulação de um atraso de 2 segundos para a SplashScreen
    const splashTimer = setTimeout(() => {
      setSplashTimeOver(true);
    }, 2000);

    // Limpa o timer quando o componente é desmontado ou quando splashTimeOver muda para true
    return () => clearTimeout(splashTimer);
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <View>
      {!splashTimeOver && <SplashScreen />}
      {splashTimeOver && <HomeScreen />}
    </View>
  );
};

export default App;