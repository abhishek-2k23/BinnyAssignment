import { router } from 'expo-router';

// Simple deep link navigation function
export const navigateToUser = (userId: string) => {
  const route = `/user/${userId}` as const;
  console.log('navigateToUser called with userId:', userId, 'route:', route);
  router.push(route);
};

// Handle deep link URL - simplified version
export const handleDeepLink = (url: string): boolean => {
  try {
    console.log('handleDeepLink called with URL:', url);
    
    // Only handle URLs that start with our app scheme
    if (!url.startsWith('myapp://')) {
      console.log('URL does not match app scheme, ignoring');
      return false;
    }
    
    // Extract user ID from URL like myapp://user/123
    const userMatch = url.match(/myapp:\/\/user\/(\d+)/);
    
    console.log('userMatch:', userMatch);
    
    if (userMatch) {
      const userId = userMatch[1];
      console.log('Navigating to user with ID:', userId);
      navigateToUser(userId);
      return true;
    }
    
    console.log('No matching pattern found for URL:', url);
    return false;
  } catch (error) {
    console.error('Error handling deep link:', error);
    return false;
  }
};
