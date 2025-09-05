import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
  index: number;
  onPress: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, index, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => onPress(user.id)}
      activeOpacity={0.7}
    >
      <ThemedView style={styles.leftSection}>
        <ThemedView style={styles.serialNumber}>
          <ThemedText style={styles.serialNumberText}>{index + 1}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.userInfo}>
          <ThemedText style={styles.userName}>{user.name}</ThemedText>
          <ThemedText style={styles.userEmail}>{user.email}</ThemedText>
        </ThemedView>
      </ThemedView>
      
      <ThemedView style={styles.rightSection}>
        <Ionicons name="chevron-forward" size={20} color="#666" />
      </ThemedView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 12,
    elevation: 3,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
  },
  serialNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  serialNumberText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  userInfo: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  rightSection: {
    paddingLeft: 8,
    backgroundColor: 'transparent',
  },
});

export default UserCard;
