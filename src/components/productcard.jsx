
import { useState } from "react"


export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleContactWhatsApp = () => {
    const message = `Hi! I'm interested in buying "${product.name}". Price: ₹${product.offerPrice} (Original: ₹${product.originalPrice}). Please provide more details.`
    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/9061306799?text=${encodedMessage}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <div className="bg-[oklch(1_0_0)] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div
        className="relative overflow-hidden  bg-muted cursor-pointer group"
        onClick={handleContactWhatsApp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full aspect-[4/3] overflow-hidden rounded-lg">

        
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        </div>

        {/* Discount Badge */}
        <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
          -{product.discount}%
        </div>

        {/* Click to Contact Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className="bg-[oklch(1_0_0)] text-[oklch(0.2_0_0)] px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-[oklch(1_0_0)]/90">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.75-1.907 10.93 1.9 4.093 6.859 5.832 11.021 3.715 3.667-1.774 5.630-5.762 4.718-9.686-.968-4.154-5.532-7.228-9.796-6.337z" />
            </svg>
            Contact on WhatsApp
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-card-foreground mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

        {/* Price Section */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold ">₹{product.offerPrice}</span>
          <span className="text-lg text-[oklch(0.5_0_0)] line-through">₹{product.originalPrice}</span>
        </div>

        {/* Contact Button */}
        <button
          onClick={handleContactWhatsApp}
          className="w-full bg-[oklch(1_0_0)] text-[oklch(0.2_0_0)] py-2 rounded-lg font-semibold hover:bg-[oklch(1_0_0)]/90 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.75-1.907 10.93 1.9 4.093 6.859 5.832 11.021 3.715 3.667-1.774 5.630-5.762 4.718-9.686-.968-4.154-5.532-7.228-9.796-6.337z" />
          </svg>
          Chat on WhatsApp
        </button>
      </div>
    </div>
  )
}
