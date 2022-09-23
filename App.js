import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <AntDesign name="stepforward" size={30} color="#900" />

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})