import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import useProducts from "@/hooks/useProducts"
import { Product } from "@/utils/mock"
import { useCallback } from "react"

export default function Products() {
  const { visible, loadMore, getItemLayout, allData } = useProducts()
  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <ThemedView style={styles.row}>
        <ThemedText style={styles.title}>{item.title}</ThemedText>
        <ThemedText style={styles.price}>₹ {item.price}</ThemedText>
        <TouchableOpacity style={styles.addButton} onPress={() => console.log('item: ', item.title)}><ThemedText>Add </ThemedText></TouchableOpacity>
      </ThemedView>
    ),
    [],
  )
  return (
    <SafeAreaView style={{ flex: 1, marginTop:20, paddingHorizontal: 5}}>
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
  row: {
    height: 80,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#6a6969ff",
  },
  addButton: {
    backgroundColor: "#c4c2ce7d",
    padding: 10,
    width: 70,
    alignItems: "center",
    borderRadius: 10,
  },
  sep: { height: StyleSheet.hairlineWidth, },
  title: { fontSize: 16, fontWeight: "600" },
  price: { fontSize: 14, fontWeight: "400" },
})
