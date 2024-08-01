import React from 'react'
import { SafeAreaView } from 'react-native'
import Ejercicio1 from './src/screen/Ejercicio1'
import { Screen1 } from './src/screen/Screen1'
import { Screen2 } from './src/screen/Screen2'
import { Screen3 } from './src/screen/Screen3'
import { Screen4 } from './src/screen/Screen4'
import { Screen5 } from './src/screen/Screen5'
import { Screen7 } from './src/screen/Screen7'
import { Screen8 } from './src/screen/Screen8'
import { Screen9 } from './src/screen/Screen9'
import { Screen10 } from './src/screen/Screen10'

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
     {/*<Ejercicio1/> */}
    <Screen2/> 
    </SafeAreaView>
  )
}
export default App;