import { useAuthToken } from '@/hooks/useAuthToken'
import React, { useEffect, useState } from 'react'
import { getOS } from '../../../device-os-module/src/DeviceOsModule'
import { ThemedText } from '../ThemedText'
import Card from '../common/Card'

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
        <ThemedText>Token : {token}</ThemedText>
        <ThemedText style={{ marginTop: 8, fontSize: 14, opacity: 0.7 }}>
            Device OS: {deviceOS}
        </ThemedText>
    </Card>
  )
}

export default TokenCard;