import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Screen3 = () => {
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
    //justifyContent: 'space-between',
    //alignItems: 'center',
    backgroundColor: '#2B4A6F',
    paddingVertical: 50, // Adjust as needed
  },
  box1: {
    width: 50,
    height: 50,
    borderWidth:2,
    fontSize:30,
    borderColor:'white',
    backgroundColor: '#F1A23E',
    position: 'absolute',
    left: 20,
    top: '30%',
  },
  box2: {
    width: 50,
    height: 50,
    borderWidth:2,
    fontSize:30,
    alignSelf: 'center',
    //justifyContent:'flex-end',
    flexDirection:'row',
    borderColor:'white',
    backgroundColor: '#31D7E9',
  },
  box3: {
    width: 50,
    height: 50,
    borderWidth:2,
    fontSize:30,
    borderColor:'white',
    backgroundColor: '#4C5DCE',
    position: 'absolute',
    right: 20,
    top: '10%',
  },

})
