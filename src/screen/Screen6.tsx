import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Screen6 = () => {
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
        //justifyContent: 'flex-end',
        //alignItems: 'flex-end',
        backgroundColor: '#2E3E4E',  
      },
      box1: {
        flex:1,
        fontSize:30,
        borderWidth:2,
        borderColor:'white',
        width: '100%',
        flexDirection:'row-reverse',
        backgroundColor: '#6C63FF',  
      },
      box2: {
        flex:1,
        width: '100%',
        fontSize:30,
        flexDirection:'row',
        borderColor:'white',
        height: 200,
        backgroundColor: '#FFA726',  
        marginVertical: 10,
      },
      box3: {
        flex:2,
        flexDirection:'row',
        borderWidth:2,
        fontSize:30,
        borderColor:'white',
        width: '100%',
        height: 50,
        backgroundColor: '#00C4CC',  
      },

})
