import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Screen1 = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.box1}></Text>
        <Text style={styles.box2}></Text>
        <Text style={styles.box3}></Text>

    </View>
  )
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#2E3E4E',  
      },
      box1: {
        flex:1,
        fontSize:30,
        borderWidth:2,
        borderColor:'white',
        width: 50,
        height: 50,
        backgroundColor: '#6C63FF',  
      },
      box2: {
        flex:6,
        width: 50,
        fontSize:30,
        borderWidth:2,
        borderColor:'white',
        height: 200,
        backgroundColor: '#FFA726',  
        marginVertical: 10,
      },
      box3: {
        flex:1,
        borderWidth:2,
        fontSize:30,
        borderColor:'white',
        width: 50,
        height: 50,
        backgroundColor: '#00C4CC',  
      },

})
