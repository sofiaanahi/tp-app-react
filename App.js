import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.contenido}>Perfil</Text>
      <Image source={require('./assets/lovely.png')} style={styles.img}></Image>
      <Button
      color={'blue'}
      title='enviar'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#A9A37A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contenido: { 
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold'
  },
  img: {
    width: 200,
    height: 200,
    borderRadius:100,
    margin:20 
  }

});
