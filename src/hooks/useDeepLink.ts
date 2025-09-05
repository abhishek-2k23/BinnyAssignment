import { handleDeepLink } from '@/utils/deepLinkHandler';
import { useURL } from 'expo-linking';
import { router } from 'expo-router';
import { useEffect } from 'react';

export const useDeepLink = () => {
  const url = useURL();

  useEffect(() => {
    if (url) {
      const handled = handleDeepLink(url);
      
      if (handled) {
        console.log('Deep link handled successfully');
      } else {
        console.log('Deep link could not be handled');
        router.push('/');
      }
    }
  }, [url]);

  return {
    currentUrl: url,
  };
};

