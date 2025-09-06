import { fetchUserDetails, fetchUsers } from "@/utils/api";
import { CACHE_KEYS, getCachedData, initializeNetworkStatus, setNetworkStatus } from "@/utils/cache";
import NetInfo from '@react-native-community/netinfo';
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
const useUsers = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [isOffline, setIsOffline] = useState(false);
    
  const { id } = useLocalSearchParams();
  console.log('useUsers hook - id parameter:', id, 'type:', typeof id);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Network status listener
  useEffect(() => {
    // Initialize network status
    initializeNetworkStatus().then((isOnline) => {
      setIsOffline(!isOnline);
    });

    // Add network status listener
    const unsubscribe = NetInfo.addEventListener(state => {
      const isOnline = state.isConnected ?? true;
      setNetworkStatus(isOnline);
      setIsOffline(!isOnline);
      console.log('Network status changed:', isOnline ? 'Online' : 'Offline');
    });

    // Cleanup listener on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const handleUserPress = (userId: number) => {
    console.log('user pressed: ', userId);
    const route = `/user/${userId}` as const;
    console.log('Navigating to route:', route);
    
    // Add a small delay to ensure router is ready
    setTimeout(() => {
      try {
        console.log('Attempting router.push...');
        router.push(route);
        console.log('router.push completed');
      } catch (error) {
        console.error('Navigation error:', error);
        // Fallback navigation method
        try {
          console.log('Trying router.navigate as fallback...');
          router.navigate(route);
        } catch (fallbackError) {
          console.error('Fallback navigation also failed:', fallbackError);
        }
      }
    }, 100);
  };

  useEffect(() => {
    const loadUserDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchUserDetails(id as unknown as number);
        setUser(data);
        setIsOffline(false);
      } catch (error) {
        console.log("Error fetching user details:", error);
        // If fetch fails, try to get cached data
        const cachedData = await getCachedData(CACHE_KEYS.USER_DETAILS(id as unknown as number));
        if (cachedData) {
          setUser(cachedData);
          setIsOffline(true);
        } else {
          setUser(null);
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadUserDetails();
    }
  }, [id]);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await fetchUsers();
      setUsers(data);
      setIsOffline(false);
    } catch (error) {
      console.log("Error fetching users:", error);
      // If fetch fails, try to get cached data
      const cachedData = await getCachedData(CACHE_KEYS.USERS_LIST);
      if (cachedData) {
        console.log('Using cached users data');
        setUsers(cachedData);
        setIsOffline(true);
      } else {
        setUsers([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return { users, user, loading, isOffline, handleUserPress };
}
export default useUsers;