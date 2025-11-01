
import ProductCard from "./productcard"




const products= [
  {
    id: 1,
    name: "Fridge AC Unit",
    description: "Heavy-duty air conditioning unit for refrigeration",
    originalPrice: 8500,
    offerPrice: 6299,
    image:'/cooker.jpg',
    discount: 26,
  },
  {
    id: 2,
    name: "Tower Fan",
    description: "Powerful tower fan with remote control",
    originalPrice: 3500,
    offerPrice: 1999,
    image: '/cooker.jpg',
    discount: 43,
  },
  {
    id: 3,
    name: "LED Plate Light",
    description: "Modern LED plate light fixture",
    originalPrice: 1200,
    offerPrice: 599,
    image: '/cooker.jpg',
    discount: 50,
  },
  {
    id: 4,
    name: "Desk Fan",
    description: "Compact desk fan with adjustable height",
    originalPrice: 2000,
    offerPrice: 1299,
    image: '/cooker.jpg',
    discount: 35,
  },
  {
    id: 5,
    name: "Wall Light Fixture",
    description: "Elegant wall-mounted light fixture",
    originalPrice: 1800,
    offerPrice: 899,
    image: '/cooker.jpg',
    discount: 50,
  },
  {
    id: 6,
    name: "Ceiling Fan",
    description: "Energy-efficient ceiling fan with 3 speeds",
    originalPrice: 4500,
    offerPrice: 2799,
    image: '/cooker.jpg',
    discount: 38,
  },
  {
    id: 7,
    name: "Table Lamp",
    description: "Modern table lamp with adjustable brightness",
    originalPrice: 2500,
    offerPrice: 1499,
    image: '/cooker.jpg',
    discount: 40,
  },
  {
    id: 8,
    name: "Solar Plate Light",
    description: "Eco-friendly solar-powered plate light",
    originalPrice: 3000,
    offerPrice: 1499,
    image: '/cooker.jpg',
    discount: 50,
  },
]

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
