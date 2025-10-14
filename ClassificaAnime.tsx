// App.tsx
// ------------------------------------------------------------
// 🌸 Exemplo didático: Classificador de Animes com useState
// ------------------------------------------------------------
// Este exemplo mostra como usar o Hook useState em React Native
// para alterar dinamicamente a cor e o texto de cards de anime.
// Cada card tem botões de avaliação e muda o fundo ao clicar.
// ------------------------------------------------------------

import React from "react"; // Importa o React
import {
   // Garante que o conteúdo fique dentro da área segura (sem sobrepor o topo)
  ScrollView,   // Permite rolagem da tela quando há muitos cards
  StyleSheet,   // Permite criar estilos
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Importa os componentes criados abaixo
import Title from "../../../components/ClassificaAnime/Title";
import AnimeCard from "../../../components/ClassificaAnime/AnimeCard";

// Função principal do aplicativo
export default function ClassificaAnime() {
  return (
    // SafeAreaView para não invadir a barra superior do celular
    <SafeAreaView style={styles.container}>
      
      {/* Título da página */}
      <Title />

      {/* ScrollView para poder rolar os cards na tela */}
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false} // remove a barrinha lateral
      >
        {/* Cada card representa um anime diferente */}
        <AnimeCard
          nome="Naruto"
          imagem="https://cdn.myanimelist.net/images/anime/13/17405.jpg"
        />

        <AnimeCard
          nome="One Piece"
          imagem="https://cdn.myanimelist.net/images/anime/6/73245.jpg"
        />

        <AnimeCard
          nome="Attack on Titan"
          imagem="https://cdn.myanimelist.net/images/anime/10/47347.jpg"
        />

        <AnimeCard
          nome="Demon Slayer"
          imagem="https://cdn.myanimelist.net/images/anime/1286/99889.jpg"
        />

        <AnimeCard
          nome="Death Note"
          imagem="https://cdn.myanimelist.net/images/anime/9/9453.jpg"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

// Estilos principais da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,                  // ocupa toda a tela
    backgroundColor: "#ede7f6", // roxinho claro de fundo
  },
  scroll: {
    alignItems: "center", // centraliza os cards na tela
    paddingBottom: 40,    // espaço ao final para não cortar o último card
  },
});
