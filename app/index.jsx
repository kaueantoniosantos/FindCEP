import { Image, ImageBackground } from "expo-image"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { Botao } from '../components/botao/botao'
import { Card } from '../components/card/card'
import { Input } from '../components/input/Input'


export default function Index() {
  return (
    <>
      {/* 1. logo + imagem de fundo */}
      <ImageBackground source={require('../assets/images/ImgFundo.png')}
        style={styles.imgFundo}>
        <Image source={require('../assets/images/LogoFindCEP.png')} style={styles.logo}></Image>
      </ImageBackground>

      {/* sempre que você colocar uma imagem de fundo use essa tag de cima, o ImagemBackground */}

      {/* 2. campo de consulta */}
      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>

          {/* 2.1 título */}
          <Text style={styles.titulo}>Consulte seu CEP</Text>

          {/* 2.2 input */}
          <Input />

          {/* 2.3 botão */}
          <Botao tituloBotao='Consultar' onPress={minhaResposta} />

          {/* 2.4 card de informações */}
          <Card />

        </View>
      </ScrollView>

    </>
  );
}

const minhaResposta = () => {
  alert("oii")
}
//estilos dos meus componentes:
const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  logo: {
    width: 100,
    height: 120

  },
  container: {
    gap: 40,
    width: "100%",
    minHeight: "100%",
    alignItems: 'center',
    paddingBottom: 80
  },
  titulo: {
    fontSize: 25
  },
  containerScroll: {
    flex: 1.5,
    paddingTop: 50,
    minHeight: '1%',
    paddingBottom: 50
  }
})
