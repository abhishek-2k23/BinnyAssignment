import Card from '@/components/common/Card'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import useCart from '@/hooks/useCart'
import useCartStore from '@/stores/CartStore'
import React from 'react'
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'

const Cart = () => {
  const { products, getTotalPrice, getTotalItems } = useCartStore();
  const {handleCheckout, handleRemoveItem} = useCart();

  const renderCartItem = ({ item }: { item: any }) => (
    <Card>
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
    </Card>
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
    <ThemedView style={styles.container}>

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
        
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <ThemedText style={styles.checkoutButtonText}>Proceed to Checkout</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  itemInfo: {
    flex: 1,
    backgroundColor: 'transparent'
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
  
  