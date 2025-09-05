import useCartStore from "@/stores/CartStore";
import { Product as ProductType } from "@/utils/mock";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import Card from "../common/Card";

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
    <Card>
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
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
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
  },
  price: { 
    fontSize: 14, 
    fontWeight: "400",
    color: "#666",
  },
});