import { ImageBackground, Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import {Input} from '../components/input/Input'
import {Botao} from '../components/botao/botao'


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
      <View style={styles.container}>

        {/* 2.1 título */}
        <Text style={styles.titulo}>Consulte seu CEP</Text>

        {/* 2.2 input */}
        <Input/>

        {/* 2.3 botão */}
        <Botao tituloBotao='Consultar' />

        {/* 2.4 card de informações */}
      </View>

    </>
  );
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
    flex: 1.5,
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 50,
    gap: 40
  },
  titulo: {
    fontSize: 25,
  }
})
