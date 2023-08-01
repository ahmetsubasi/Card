import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './Card.styles'

const handleButtonPress = () => {
    Alert.alert('Replik', ':)');
  };

const Card = (props) => {
    
  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
      <Image
      style={styles.img}
      source={require('./images/burhan.png')} />
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{props.text}</Text>
      </View>
      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Buton</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Card;
