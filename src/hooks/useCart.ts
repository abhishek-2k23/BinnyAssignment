import { Alert } from "react-native";
import useCartStore from "@/stores/CartStore";
export default function useCart(){
    const { removeProduct } = useCartStore();
  const handleRemoveItem = (productId: string) => {
    Alert.alert(    
      'Remove Item',
      'Are you sure you want to remove this item from your cart?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Remove', style: 'destructive', onPress: () => removeProduct(productId) }
      ]
    );
  };

  const handleCheckout = () => {
    Alert.alert(
      'Checkout pressed',
      'Are you sure you want to checkout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Ok', style: 'destructive', onPress: () => console.log('Checkout pressed') }
      ]
    );
  }

  return {handleCheckout, handleRemoveItem};
}