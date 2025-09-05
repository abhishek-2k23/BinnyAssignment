import Loading from '@/components/common/Loading';
import { ThemedView } from '@/components/ThemedView';
import UserCard from '@/components/UserCard';
import useUsers from '@/hooks/useUsers';
import { FlatList, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const { users, handleUserPress, loading } = useUsers();


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
