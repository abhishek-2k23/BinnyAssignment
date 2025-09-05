import { useAuthToken } from '@/hooks/useAuthToken'
import React from 'react'
import { ThemedText } from '../ThemedText'
import Card from '../common/Card'

const TokenCard = () => {
    const {token} = useAuthToken();
  return (
    <Card>
        <ThemedText>Token : {token}</ThemedText>
    </Card>
  )
}

export default TokenCard;