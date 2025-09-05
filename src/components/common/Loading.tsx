import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { ThemedText } from '../ThemedText'
import { ThemedView } from '../ThemedView'

const Loading = () => {
  return (
    <ThemedView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <ThemedText style={styles.loadingText}>Loading...</ThemedText>
      </ThemedView>
  )
}

export default Loading

const styles = StyleSheet.create({
    
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
})