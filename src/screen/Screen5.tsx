import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Screen5 = () => {
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
  },
  box1: {
    flex:1,
    width: 50,
    //height: 50,
    backgroundColor: '#4C5DCE',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
  },
  box2: {
    flex:1,
    width: 50,
    //height: 50,
    backgroundColor: '#F1A23E',
    alignSelf: 'center',
  },
  box3: {
    flex:1,
    width: '30%',
    height: '100%',
    backgroundColor: '#31D7E9',
    flexDirection:'row',
    //alignSelf: 'center',
    marginBottom: 10,
    marginRight: 10,
  },

})
