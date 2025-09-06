import { handleDeepLink } from '@/utils/deepLinkHandler';
import { useURL } from 'expo-linking';
import { useEffect, useRef } from 'react';

export const useDeepLink = () => {
  const url = useURL();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip deep link handling on initial app mount/refresh
    if (isInitialMount.current) {
      isInitialMount.current = false;
      console.log('Skipping deep link on initial mount');
      return;
    }

    if (url) {
      console.log('Processing deep link URL:', url);
      const handled = handleDeepLink(url);
      
      if (handled) {
        console.log('Deep link handled successfully');
      } else {
        console.log('Deep link could not be handled, but not redirecting to avoid breaking navigation');
        
      }
    }
  }, [url]);

  return {
    currentUrl: url,
  };
};

