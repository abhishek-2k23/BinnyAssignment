//mock data for products
export type Product = { id: string; title: string; price: number }

export const generateProducts = (count = 5000): Product[] => {
  const productArray: Product[] = []
  for (let i = 0; i < count; i++) {
    productArray.push({
      id: String(i + 1),
      title: `Product #${i + 1}`,
      price: Number((Math.random() * 999 + 1).toFixed(2)),
    })
  }
  return productArray
}
