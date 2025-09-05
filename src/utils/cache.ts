import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

// Network status management
let isOnline = true;

// Initialize network status
export const initializeNetworkStatus = async () => {
  const netInfo = await NetInfo.fetch();
  isOnline = netInfo.isConnected ?? true;
  return isOnline;
};

// Get current network status
export const getNetworkStatus = () => isOnline;

// Set network status
export const setNetworkStatus = (status: boolean) => {
  isOnline = status;
};

// Simple cache utility functions
export const cacheData = async (key: string, data: any): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error caching data:', error);
  }
};

export const getCachedData = async (key: string): Promise<any | null> => {
  try {
    const cachedData = await AsyncStorage.getItem(key);
    return cachedData ? JSON.parse(cachedData) : null;
  } catch (error) {
    console.error('Error retrieving cached data:', error);
    return null;
  }
};

export const clearCache = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
};

// Cache keys
export const CACHE_KEYS = {
  USERS_LIST: 'users_list',
  USER_DETAILS: (id: number) => `user_details_${id}`,
} as const;
