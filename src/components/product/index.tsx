import useCartStore from "@/stores/CartStore";
import { Product as ProductType } from "@/utils/mock";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

interface ProductItemProps {
  product: ProductType;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { addProduct, removeProduct, isInCart } = useCartStore();
  const inCart = isInCart(product.id);

  const handleToggleCart = () => {
    if (inCart) {
      removeProduct(product.id);
    } else {
      addProduct(product);
    }
  };

  return (
    <ThemedView style={styles.row}>
      <ThemedView style={styles.productInfo}>
        <ThemedText style={styles.title}>{product.title}</ThemedText>
        <ThemedText style={styles.price}>₹ {product.price}</ThemedText>
      </ThemedView>
      <TouchableOpacity 
        style={[styles.actionButton, inCart ? styles.removeButton : styles.addButton]} 
        onPress={handleToggleCart}
      >
        <ThemedText style={styles.actionButtonText}>
          {inCart ? 'Remove' : 'Add to Cart'}
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  row: {
    height: 80,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginVertical: 2,
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  productInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: 'transparent',
  },
  actionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    backgroundColor: "#007AFF",
  },
  removeButton: {
    backgroundColor: "#FF4444",
  },
  actionButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  title: { 
    fontSize: 16, 
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
  price: { 
    fontSize: 14, 
    fontWeight: "400",
    color: "#666",
  },
});