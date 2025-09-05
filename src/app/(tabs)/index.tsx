import Loading from '@/components/common/Loading';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TokenCard from '@/components/token';
import UserCard from '@/components/UserCard';
import { useAuthToken } from '@/hooks/useAuthToken';
import useUsers from '@/hooks/useUsers';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const { users, handleUserPress, loading, isOffline } = useUsers();
  const { loading: tokenLoading } = useAuthToken();


  const renderUserCard = ({ item, index }: { item: any; index: number }) => (
    <UserCard 
      user={item} 
      index={index} 
      onPress={handleUserPress}
    />
  );

  if(loading || tokenLoading){
    return <Loading />
  }

  return (
    <ThemedView style={styles.container}>
      {isOffline && (
        <ThemedView style={styles.offlineBanner}>
          <Ionicons name="cloud-offline" size={16} color="#FF6B6B" />
          <ThemedText style={styles.offlineText}>Showing cached data (offline)</ThemedText>
        </ThemedView>
      )}
      
      {/* Token Section */}
      <TokenCard />

      {/* Users Section */}
      <ThemedView style={styles.usersSection}>
        <ThemedText style={styles.sectionTitle}>Users</ThemedText>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderUserCard}
          style={styles.list}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  offlineBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF3CD',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FFEAA7',
  },
  offlineText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#856404',
    fontWeight: '500',
  },
  tokenSection: {
    backgroundColor: '#F8F9FA',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  tokenHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  tokenTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 8,
  },
  tokenContainer: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DEE2E6',
  },
  tokenLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  tokenValue: {
    fontSize: 12,
    color: '#333',
    fontFamily: 'monospace',
    backgroundColor: '#F1F3F4',
    padding: 8,
    borderRadius: 4,
  },
  tokenActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    flex: 0.48,
    justifyContent: 'center',
  },
  clearButton: {
    backgroundColor: '#FFEBEE',
  },
  actionButtonText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
  clearButtonText: {
    color: '#FF3B30',
  },
  usersSection: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  header: {
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingVertical: 8,
  },
});
