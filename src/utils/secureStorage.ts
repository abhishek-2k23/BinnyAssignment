import * as SecureStore from 'expo-secure-store';

// Secure storage keys
export const SECURE_KEYS = {
  AUTH_TOKEN: 'auth_token',
} as const;

// Generate a dummy token
export const generateDummyToken = (): string => {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 15);
  return `dummy_token_${timestamp}_${randomString}`;
};

// Store token securely
export const storeToken = async (token: string): Promise<void> => {
  try {
    await SecureStore.setItemAsync(SECURE_KEYS.AUTH_TOKEN, token);
    console.log('Token stored securely');
  } catch (error) {
    console.error('Error storing token:', error);
  }
};

// Retrieve token from secure storage
export const getToken = async (): Promise<string | null> => {
  try {
    const token = await SecureStore.getItemAsync(SECURE_KEYS.AUTH_TOKEN);
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};

// Initialize token on app start
export const initializeToken = async (): Promise<string> => {
  try {
    // Check if token already exists
    let token = await getToken();
    
    if (!token) {
      // Generate and store new token if none exists
      token = generateDummyToken();
      await storeToken(token);
      console.log('New token generated and stored:', token);
    } else {
      console.log('Existing token retrieved:', token);
    }
    
    return token;
  } catch (error) {
    console.error('Error initializing token:', error);
    // Fallback to generating a new token
    const fallbackToken = generateDummyToken();
    await storeToken(fallbackToken);
    return fallbackToken;
  }
};
