import { FlatList, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import ProductItem from "@/components/product/index"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import useProducts from "@/hooks/useProducts"
import { Product as mockProductData } from "@/utils/mock"
import { useCallback } from "react"

export default function Products() {
  const { visible, loadMore, getItemLayout, allData } = useProducts();
  const renderItem = useCallback(
    ({ item }: { item: mockProductData }) => (
      <ProductItem product={item} />
    ),
    [],
  )
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 5}}>
      <ThemedText>All Products: </ThemedText>
      <FlatList
        data={visible}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        initialNumToRender={20}
        maxToRenderPerBatch={40}
        windowSize={8}
        removeClippedSubviews
        onEndReachedThreshold={0.4}
        onEndReached={() => {
          // simulate infinite scroll till 5k
          if (visible.length < allData.length) loadMore()
        }}
        ItemSeparatorComponent={() => <ThemedView style={styles.sep} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sep: { height: StyleSheet.hairlineWidth },
})
