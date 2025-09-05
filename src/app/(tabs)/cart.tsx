import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import useCartStore from '@/stores/CartStore'
import React from 'react'
import { Alert, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Cart = () => {
  const { products, removeProduct, clearCart, getTotalPrice, getTotalItems } = useCartStore();

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

  const handleClearCart = () => {
    Alert.alert(
      'Clear Cart',
      'Are you sure you want to remove all items from your cart?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Clear', style: 'destructive', onPress: clearCart }
      ]
    );
  };

  const renderCartItem = ({ item }: { item: any }) => (
    <ThemedView style={styles.cartItem}>
      <ThemedView style={styles.itemInfo}>
        <ThemedText style={styles.itemTitle}>{item.title}</ThemedText>
        <ThemedText style={styles.itemPrice}>₹ {item.price}</ThemedText>
      </ThemedView>
      
      <TouchableOpacity 
        style={styles.removeButton} 
        onPress={() => handleRemoveItem(item.id)}
      >
        <ThemedText style={styles.removeButtonText}>Remove</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );

  if (products.length === 0) {
    return (
      <ThemedView style={styles.container}>
        <ThemedView style={styles.emptyCart}>
          <ThemedText style={styles.emptyCartText}>Your cart is empty</ThemedText>
          <ThemedText style={styles.emptyCartSubtext}>Add some products to get started!</ThemedText>
        </ThemedView>
      </ThemedView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.headerTitle}>Shopping Cart</ThemedText>
        <TouchableOpacity onPress={handleClearCart} style={styles.clearButton}>
          <ThemedText style={styles.clearButtonText}>Clear All</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
        style={styles.cartList}
        showsVerticalScrollIndicator={false}
      />

      <ThemedView style={styles.footer}>
        <ThemedView style={styles.summary}>
          <ThemedView style={styles.summaryRow}>
            <ThemedText style={styles.summaryLabel}>Items ({getTotalItems()}):</ThemedText>
            <ThemedText style={styles.summaryValue}>₹ {getTotalPrice().toFixed(2)}</ThemedText>
          </ThemedView>
        </ThemedView>
        
        <TouchableOpacity style={styles.checkoutButton}>
          <ThemedText style={styles.checkoutButtonText}>Proceed to Checkout</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  clearButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#ff4444',
    borderRadius: 6,
  },
  clearButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  emptyCartSubtext: {
    fontSize: 16,
    color: '#666',
  },
  cartList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    backgroundColor: '#FF4444',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
  },
  summary: {
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  checkoutButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cart;
  
  