import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { ThemedView } from '../ThemedView';

const Card = ({children}: {children: React.ReactNode}) => {
    const colorScheme = useColorScheme() ?? 'light';
  return (
    <ThemedView style={[styles.card, {backgroundColor: Colors[colorScheme].secondaryBackground}]}>
        {children}
    </ThemedView>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 16,
        marginVertical: 4,
        borderRadius: 12,
        elevation: 3,
      },
})