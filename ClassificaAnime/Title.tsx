
// ------------------------------------------------------------
//  Componente de título do aplicativo
// ------------------------------------------------------------
// É um simples componente de texto com estilo.
// Ele mostra o nome da aplicação na parte superior.
// ------------------------------------------------------------
import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Title() {
  return <Text style={styles.title}> Classificador de Animes </Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,           // tamanho da fonte
    fontWeight: "bold",     // deixa em negrito
    color: "#4a148c",       // cor roxa escura
    textAlign: "center",    // centraliza o texto
    marginVertical: 20,     // espaço acima e abaixo
  },
});
