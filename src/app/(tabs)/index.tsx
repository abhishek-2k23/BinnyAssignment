import Loading from '@/components/common/Loading';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import UserCard from '@/components/UserCard';
import useUsers from '@/hooks/useUsers';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const { users, handleUserPress, loading, isOffline } = useUsers();


  const renderUserCard = ({ item, index }: { item: any; index: number }) => (
    <UserCard 
      user={item} 
      index={index} 
      onPress={handleUserPress}
    />
  );

  if(loading){
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
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUserCard}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
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
