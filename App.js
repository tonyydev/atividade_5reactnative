import { StatusBar } from 'expo-status-bar';
import {StyleSheet ,Text, View } from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'; 

export default function App() {
  return (
    <View style={styles.containerf}>
      <View style={styles.container}>
        <View style={styles.containerIcon}>
          <AntDesign name="github" size={80} color="black"/>
        </View>
        
        <View styles={styles.containerText}>
          <Text style={styles.titulo}>
            Fulano de tal
          </Text>
          <Text style={styles.descricao}>
            Fazedor de Vários Nada
          </Text>
        </View>
      </View>
    
      <View style={styles.container2}>     
        <View style={styles.containerText2}>
          <Text style={styles.text2}>
            Aqui é um exemplo de texto de uma postagem! Aqui é um exemplo de texto de uma postagem! Aqui é um exemplo de texto de uma postagem! 
          </Text>
        </View>
        <View style={styles.containerIcon2}>
          <FontAwesome name="trash-o" size={40} color="black" />
          <Ionicons name="paper-plane-outline" size={40} color="black" />
        </View>
      </View>
      <View style={styles.container2}>     
        <View style={styles.containerText2}>
          <Text style={styles.text2}>
            Aqui é um exemplo de texto de uma postagem! Aqui é um exemplo de texto de uma postagem! Aqui é um exemplo de texto de uma postagem! 
          </Text>
        </View>
        <View style={styles.containerIcon2}>
          <FontAwesome name="trash-o" size={40} color="black" />
          <Ionicons name="paper-plane-outline" size={40} color="black" />
        </View>
      </View>
      <View style={styles.container2}>     
        <View style={styles.containerText2}>
          <Text style={styles.text2}>
            Aqui é um exemplo de texto de uma postagem! Aqui é um exemplo de texto de uma postagem! Aqui é um exemplo de texto de uma postagem! 
          </Text>
        </View>
        <View style={styles.containerIcon2}>
          <FontAwesome name="trash-o" size={40} color="black" />
          <Ionicons name="paper-plane-outline" size={40} color="black" />
        </View>
      </View>
      <View style={styles.container2}>     
        <View style={styles.containerText2}>
          <Text style={styles.text2}>
            Aqui é um exemplo de texto de uma postagem! Aqui é um exemplo de texto de uma postagem! Aqui é um exemplo de texto de uma postagem! 
          </Text>
        </View>
        <View style={styles.containerIcon2}>
          <FontAwesome name="trash-o" size={40} color="black" />
          <Ionicons name="paper-plane-outline" size={40} color="black" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerf : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  container:{
    width: 350,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#e7e7e7',   
    borderRadius: 10,
    marginBottom: 30,
  },
  containerIcon:{
    width: 80,
    height: 80,
    marginRight:40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText:{
    width: 80,
    height: 80,
  },
  titulo:{
    fontSize:30,
    fontWeight: 'bold',
  },
  descricao:{
    fontSize:12,
    color: '#959595',
  },
  container2:{
    width: 320,
    height: 100,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#e7e7e7',   
    borderRadius: 10,
    marginBottom: 30,
  },
  containerText2:{
    width: 230,
  },
  text2:{
    fontSize:15,
    fontWeight: '600'
  },
  containerIcon2:{
    height: 50,
    flexDirection: 'row',
  },
});
