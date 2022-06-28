import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task =(props) => {
return (
  <View style={styles.items}>
      <View style={styles.itemleft}>
          <View style={styles.square}></View>
          <Text style={styles.itemText}> {props.text}</Text>
          
      </View>
      <View style={styles.circular}></View>
      
      
  </View>
  
)

}
const styles= StyleSheet.create({
    items: {
        backgroundColor: '#FFF',
        padding: 18,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 22,
    },
    itemleft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 25,
        height: 25,
        backgroundColor: '#55BCF6',
        opacity: 0.5,
        borderRadius: 6,
        marginRight: 10,
    },
    itemText: {
        maxWidth: '82%',
    },
    circular: {
        width: 13,
        height: 13,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 3,

    },

})
export default Tasks;