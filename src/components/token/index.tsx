import { useAuthToken } from '@/hooks/useAuthToken'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { getOS } from '../../../device-os-module/src/DeviceOsModule'
import Card from '../common/Card'
import { ThemedText } from '../ThemedText'

const TokenCard = () => {
    const {token} = useAuthToken();
    const [deviceOS, setDeviceOS] = useState<string>('Loading...');

    useEffect(() => {
        try {
            const os = getOS();
            setDeviceOS(os);
        } catch (error) {
            console.error('Error getting device OS:', error);
            setDeviceOS('Unknown');
        }
    }, []);

  return (
    <Card>
      <View style={{flexDirection: 'column'}}>
        <ThemedText style={{ fontSize: 16, fontWeight: 'bold' }}>Token</ThemedText>
        <ThemedText>{token}</ThemedText>
        <ThemedText style={{ marginTop: 8, fontSize: 14, opacity: 0.7 }}>
            Device OS
        </ThemedText>
        <ThemedText style={{ marginTop: 2, fontSize: 14, opacity: 0.7 }}>
             {deviceOS}
        </ThemedText>
        
      </View>
    </Card>
  )
}

export default TokenCard;