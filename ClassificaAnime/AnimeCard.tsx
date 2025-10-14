// components/AnimeCard.tsx
// ------------------------------------------------------------
// Componente de Card de Anime
// ------------------------------------------------------------
// Este componente mostra:
// - Uma imagem do anime
// - O nome do anime
// - Uma avaliação dinâmica (Ruim, Regular ou Bom)
// - Três botões que alteram a cor de fundo e o texto da avaliação
// ------------------------------------------------------------

import React, { useState } from "react"; // Importa o React e o Hook useState
import { View, Text, Image, StyleSheet, Button } from "react-native";

// Define o tipo das propriedades (props) que o componente recebe
type Props = {
  nome: string;  // nome do anime
  imagem: string; // link da imagem do anime
};

// Função principal do componente AnimeCard
export default function AnimeCard({ nome, imagem }: Props) {
  // useState cria um estado para a cor de fundo do card
  const [corFundo, setCorFundo] = useState("#eeeeee"); // começa cinza claro
  // outro estado para guardar o texto da avaliação
  const [avaliacao, setAvaliacao] = useState("Avalie este anime!");

  // Função simples: define o estado de “ruim”
  const avaliarRuim = () => {
    setCorFundo("#ef9a9a"); // vermelho claro
    setAvaliacao("👎 Ruim");
  };

  // Função simples: define o estado de “regular”
  const avaliarRegular = () => {
    setCorFundo("#fff59d"); // amarelo claro
    setAvaliacao("😐 Regular");
  };

  // Função simples: define o estado de “bom”
  const avaliarBom = () => {
    setCorFundo("#a5d6a7"); // verde claro
    setAvaliacao("👍 Bom");
  };

  return (
    // A View principal representa o card
    <View style={[styles.card, { backgroundColor: corFundo }]}>
      {/* Imagem do anime */}
      <Image source={{ uri: imagem }} style={styles.image} />

      {/* Nome do anime */}
      <Text style={styles.nome}>{nome}</Text>

      {/* Texto que mostra a avaliação atual */}
      <Text style={styles.avaliacao}>{avaliacao}</Text>

      {/* Três botões lado a lado */}
      <View style={styles.botoes}>
        <Button title="Ruim" color="#e53935" onPress={avaliarRuim} />
        <Button title="Regular" color="#fdd835" onPress={avaliarRegular} />
        <Button title="Bom" color="#43a047" onPress={avaliarBom} />
      </View>
    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  card: {
    width: "90%",           // ocupa 90% da largura da tela
    borderRadius: 12,       // bordas arredondadas
    padding: 20,            // espaçamento interno
    alignItems: "center",   // centraliza o conteúdo
    marginVertical: 10,     // espaço entre os cards
    shadowColor: "#000",    // sombra leve
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  },
  image: {
    width: 180,             // largura da imagem
    height: 260,            // altura da imagem
    borderRadius: 12,       // bordas arredondadas
    marginBottom: 10,       // espaço abaixo
  },
  nome: {
    fontSize: 22,           // tamanho do nome
    fontWeight: "bold",     // negrito
    color: "#212121",       // preto suave
  },
  avaliacao: {
    fontSize: 18,
    marginVertical: 10,
  },
  botoes: {
    flexDirection: "row",   // alinha os botões na horizontal
    justifyContent: "space-around",
    width: "100%",          // ocupa toda a largura do card
    marginTop: 10,
  },
});
