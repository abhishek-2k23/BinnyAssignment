import Loading from '@/components/common/Loading';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import useUsers from '@/hooks/useUsers';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';


const UserDetailsScreen = () => {
  const params = useLocalSearchParams();
  console.log('UserDetailsScreen - Route params:', params);
  
  const {loading, user, isOffline} = useUsers();
  
  useEffect(() => {
  }, [params]);
  if (loading) {
    return (
      <Loading />
    );
  }

  if (!user) {
    return (
      <ThemedView style={styles.errorContainer}>
        <ThemedText style={styles.errorText}>User not found</ThemedText>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ThemedText style={styles.backButtonText}>Go Back</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      {isOffline && (
        <ThemedView style={styles.offlineBanner}>
          <Ionicons name="cloud-offline" size={16} color="#FF6B6B" />
          <ThemedText style={styles.offlineText}>Showing cached data (offline)</ThemedText>
        </ThemedView>
      )}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.profileSection}>
          <ThemedView style={styles.avatar}>
            <ThemedText style={styles.avatarText}>
              {user.name.split(' ').map(n => n[0]).join('')}
            </ThemedText>
          </ThemedView>
          <ThemedText style={styles.userName}>{user.name}</ThemedText>
          <ThemedText style={styles.username}>@{user.username}</ThemedText>
        </ThemedView>

        <ThemedView style={styles.detailsSection}>
          <ThemedView style={styles.detailItem}>
            <Ionicons name="mail" size={20} color="#666" />
            <ThemedView style={styles.detailContent}>
              <ThemedText style={styles.detailLabel}>Email</ThemedText>
              <ThemedText style={styles.detailValue}>{user.email}</ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.detailItem}>
            <Ionicons name="call" size={20} color="#666" />
            <ThemedView style={styles.detailContent}>
              <ThemedText style={styles.detailLabel}>Phone</ThemedText>
              <ThemedText style={styles.detailValue}>{user.phone}</ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.detailItem}>
            <Ionicons name="globe" size={20} color="#666" />
            <ThemedView style={styles.detailContent}>
              <ThemedText style={styles.detailLabel}>Website</ThemedText>
              <ThemedText style={styles.detailValue}>{user.website}</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Address</ThemedText>
          <ThemedView style={styles.addressCard}>
            <ThemedText style={styles.addressText}>
              {user.address.street}, {user.address.suite}
            </ThemedText>
            <ThemedText style={styles.addressText}>
              {user.address.city}, {user.address.zipcode}
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Company</ThemedText>
          <ThemedView style={styles.companyCard}>
            <ThemedText style={styles.companyName}>{user.company.name}</ThemedText>
            <ThemedText style={styles.companyCatchPhrase}>{user.company.catchPhrase}</ThemedText>
            <ThemedText style={styles.companyBs}>{user.company.bs}</ThemedText>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
};

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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
  placeholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 30,
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    color: '#666',
  },
  detailsSection: {
    marginBottom: 16,
    paddingVertical: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  detailContent: {
    marginLeft: 16,
    flex: 1,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  section: {
    marginBottom: 16,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  addressCard: {
    paddingHorizontal: 20,
  },
  addressText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  companyCard: {
    paddingHorizontal: 20,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  companyCatchPhrase: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  companyBs: {
    fontSize: 14,
    color: '#666',
  },
});

export default UserDetailsScreen;
