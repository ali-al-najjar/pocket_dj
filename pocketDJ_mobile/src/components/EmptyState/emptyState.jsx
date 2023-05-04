import React from 'react';
import { Text, View } from 'react-native';
import styles from './emptyState.css';

const EmptyState = ({ title, description}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{description}</Text> 
    </View>
  )
}

export default EmptyState;
