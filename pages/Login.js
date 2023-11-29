import { StatusBar } from 'expo-status-bar';
import {  ImageBackground, View, TextInput, Button, StyleSheet, Alert,Image, Text} from 'react-native';
import React, { useState } from 'react'; 

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const image2 = { uri: 'https://img.freepik.com/vector-gratis/fondo-brillo-iridiscente-degradado_23-2149928479.jpg' };

  const validarDocumento = () => {
    const longitudDocumento = username.length;

    if (longitudDocumento >= 6 && longitudDocumento <= 12 && !isNaN(username)) {
      // Documento válido, aquí puedes realizar acciones adicionales si es necesario
  
    } else {
      // Documento no válido, muestra un mensaje de error
      Alert.alert('Error', 'El documento debe tener entre 6 y 12 dígitos y ser numérico.');
    }
  };

  const validarPassword = () => {
    // La expresión regular asegura que haya al menos 2 números en la contraseña
    const regex = /\d.*\d/;
    const contieneDosNumeros = regex.test(password);

    if (contieneDosNumeros) {
      // Contraseña válida, aquí puedes realizar acciones adicionales si es necesario
      
    } else {
      // Contraseña no válida, muestra un mensaje de error
      Alert.alert('Error', 'La contraseña debe contener al menos 2 números.');
    }
  };




 const handleLogin = () => {
    if (!username || !password ) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }
    Alert.alert('Éxito', 'Login exitoso');
  };

  return (

    <ImageBackground source={image2} resizeMode="cover" style={styles.image2}>
    <View style={styles.container}>
    <Image style={styles.imagelogo} source={require('../assets/escudo.png')} />

    <Text style={styles.baseText}>
      LO
      <Text style={styles.innerText}> GIN</Text>
    </Text>
    
       <Image style={styles.image} source={require('../assets/logo.png')} />
       
      <TextInput
        style={styles.input}
        placeholder="Número de documento"
        value={username}
        onChangeText={Text => setUsername(Text)}
        keyboardType='numeric'
        onBlur={validarDocumento}
        placeholderTextColor={'black'}

      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        onBlur={validarPassword}
        placeholderTextColor={'black'}
        
        
      />
      <View>

      
    
      <Button title="Inicio de Sesión"  onPress={handleLogin} style={styles.botoncito}/>
      
      </View>
      <StatusBar style="auto" />
    </View>
    </ImageBackground>

        
  );
}

const styles = StyleSheet.create({

  baseText: {
    fontWeight: 'bold',
    top: -40,
    letterSpacing: 10,
    fontSize: 30,
  },
  innerText: {
    color: 'blue',
  },

  botoncito: {
    flex:1,
    marginHorizontal:20,
      
  },

  image: {
    height:130,
    width:130,
    alignItems: 'center',
    top: -20,
  },

  container: {
   marginHorizontal:50,
   marginVertical:50,
   alignItems: 'center',
   

  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 10,
    color: 'gray',
    textAlign: 'center',
    
    
  },

  image2: {
    flex: 1,
    justifyContent: 'center',

  },

  imagelogo: {
    height:50,
    width:50,
    alignItems: 'center',
    top:-170,
    left:160,


  },

});