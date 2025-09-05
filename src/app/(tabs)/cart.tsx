import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React from 'react'
import { StyleSheet } from 'react-native'

const cart = () => {
  return (
      <ThemedView style={styles.container}>
        <ThemedText> Cart screen </ThemedText>
      </ThemedView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    }
  });

export default cart;
  
  