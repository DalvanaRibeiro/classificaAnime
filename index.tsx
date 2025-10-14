// Importa a biblioteca React
import React from "react";

// Importa o SafeAreaView do React Native
import { View, StyleSheet, Image,  } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

// Importa os componentes criados
import BasicText from "../../components/BasicText";
import BasicButton from "../../components/BasicButton";
import BasicImage from "../../components/BasicImage";
import Input from "../../components/Input";
import TouchableExample from "../../components/TouchableExample";
import FlatListExample from "@/components/FlatListExample";
import ScrollViewExample from "@/components/ScrollViewExample";
import PressableExample from "@/components/PressableExample";
import SectionListExample from "@/components/SectionListExample";

import ListaComSecoes from "./screens/ListacomSecoes";
import ProjectScreen from "./screens/ProjectScreen";
import ClassificaAnime from "./screens/ClassificaAnime";
import FilmesEffect from "./screens/WeatherDashboard";
import WeatherDashboard from "./screens/WeatherDashboard"; 
import DogGallery from "./screens/DogGallery";


// Componente principal da aplicação
export default function App() {
  return (
     <SafeAreaView style={styles.safeArea}>
    {/* Usamos o estilo "container" definido no StyleSheet */}
    <View style={styles.container}>
      
      {/* Texto básico 
      <BasicText content="Olá, mundo!" />

      {/* Botão básico 
      <BasicButton label="Clique aqui" onPress={() => alert("Botão pressionado!")} />

      {/* Imagem básica 
      <BasicImage uri="https://tpmidia.wordpress.com/wp-content/uploads/2012/03/sextaalegria.jpg" />
      <Image 
      source={require("../../assets/images/alegria.jpg")} 
      style={{ width: 100, height: 100 }} // define tamanho obrigatório 
    />
   <BasicText content="Olá, mundo!" />
   <TouchableExample/>
     <PressableExample />

      {/* Campo de input 
      <Input /> 
      <FlatListExample />
      <ScrollViewExample /> 
      < ClassificaAnime />
       <WeatherDashboard />
       <DogGallery />
      */}
      
       < ClassificaAnime />
      




    
    </View>
     </SafeAreaView>
  );
}

// Estilos criados separadamente
const styles = StyleSheet.create({
  container: {
    flex: 1,                        // Ocupar toda a tela
    justifyContent: "center",       // Centralizar verticalmente
    alignItems: "center",           // Centralizar horizontalmente
    backgroundColor: "#bd7d7dff",     // Fundo branco (padrão)
    padding: 16,                    // Espaçamento interno
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#bd7d7dff", // fundo geral
  },

});
