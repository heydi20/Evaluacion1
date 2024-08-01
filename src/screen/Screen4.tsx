import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Screen4 = () => {
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
    backgroundColor: '#2B4A6F',
    //justifyContent: 'space-between',
  },
  box1: {
    width: 50,
    height: 50,
    borderWidth:2,
    //flexDirection:'row',
    borderColor:'white',
    fontSize:30,
    backgroundColor: '#4C5DCE',
    position: 'absolute',
    left: 10,
    top: 10,
  },
  box2: {
    width: 50,
    height: 50,
    borderWidth:2,
    //flexDirection:'row',
    borderColor:'white',
    fontSize:30,
    backgroundColor: '#F1A23E',
    position: 'absolute',
    left: '50%',
    top: '45%',
    marginLeft: -25,
  },
  box3: {
    width: 50,
    height: 50,
    borderWidth:2,
    //flexDirection:'row',
    borderColor:'white',
    fontSize:30,
    backgroundColor: '#31D7E9',
    position: 'absolute',
    right: 10,
    bottom: 10,
  },

})
