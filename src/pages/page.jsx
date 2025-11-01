import Header from "../components/header"
import ProductGrid from "../components/productgrid"

export default function Home() {
  return (
    <main className="min-h-screen bg-[oklch(0.98_0.01_70)]">
      <Header />
      <ProductGrid />
    </main>
  )
}
