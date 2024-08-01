import React from 'react'
import { SafeAreaView } from 'react-native'
import Ejercicio1 from './src/screen/Ejercicio1'
import { Screen1 } from './src/screen/Screen1'
import { Screen2 } from './src/screen/Screen2'

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
     {/*<Ejercicio1/> */}
    <Screen2/> 
    </SafeAreaView>
  )
}
export default App;