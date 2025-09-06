import { generateDummyToken, initializeToken, storeToken } from '@/utils/secureStorage';
import { useEffect, useState } from 'react';

export const useAuthToken = () => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const loadToken = async () => {
    try {
      setLoading(true);
      const authToken = await initializeToken();
      setToken(authToken);
    } catch (error) {
      console.error('Error loading token:', error);
      setToken(null);
    } finally {
      setLoading(false);
    }
  };
  
  // Initialize token
  useEffect(() => {
    loadToken();
  }, []);

  // Generate new token
  const generateNewToken = async () => {
    try {
      const newToken = generateDummyToken();
      await storeToken(newToken);
      setToken(newToken);
      console.log('New token generated:', newToken);
    } catch (error) {
      console.error('Error generating new token:', error);
    }
  };

  return {
    token,
    loading,
    generateNewToken,
  };
};
