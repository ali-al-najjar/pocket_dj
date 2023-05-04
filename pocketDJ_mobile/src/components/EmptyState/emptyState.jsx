import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles.js';
import Button from '../Button/Button';

const EmptyState = ({ title, description,buttonName, onPress}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Button title={buttonName} onPress={onPress}></Button>
    </View>
  )
}

export default EmptyState;
