import { Product, generateProducts } from "@/utils/mock"
import { useCallback, useMemo, useRef, useState } from "react"

const PAGE_SIZE = 50

const useProducts = () => {
  const allData = useMemo(() => generateProducts(5000), [])
  const [page, setPage] = useState(1)
  const [visible, setVisible] = useState<Product[]>(() =>
    allData.slice(0, PAGE_SIZE),
  )
  
  const loadingRef = useRef(false)

  const loadMore = useCallback(() => {
    if (loadingRef.current) return
    loadingRef.current = true
    requestAnimationFrame(() => {
      const next = page + 1
      const newSlice = allData.slice(0, next * PAGE_SIZE)
      setVisible(newSlice)
      setPage(next)
      loadingRef.current = false
    })
  }, [allData, page])

  const getItemLayout = (
    _: ArrayLike<Product> | null | undefined,
    index: number,
  ) => ({
    length: 80,
    offset: 80 * index,
    index,
  })

  return { loadingRef, visible, loadMore, getItemLayout, allData }
}

export default useProducts
