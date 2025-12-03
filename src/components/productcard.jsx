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
    <div className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 group">
      {/* Product Image */}
      <div
        className="relative overflow-hidden bg-muted cursor-pointer"
        onClick={handleContactWhatsApp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full aspect-[4/3] overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        </div>

        {/* Discount Badge */}
        <div className="absolute top-3 right-3 bg-destructive text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
          -{product.discount}% OFF
        </div>

        {/* Click to Contact Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#20BA5A] transform hover:scale-105 transition-all duration-200 shadow-xl">
           <svg
  className="w-5 h-5"
  fill="currentColor"
  viewBox="0 0 32 32"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M16.003 3.2c-7.056 0-12.8 5.744-12.8 12.8 0 2.256.592 4.464 1.712 6.4L3.2 28.8l6.592-1.712a12.7 12.7 0 006.208 1.6h.003c7.056 0 12.8-5.744 12.8-12.8 0-3.424-1.344-6.656-3.776-9.088A12.78 12.78 0 0016.003 3.2zm6.768 18.176c-.288.8-1.648 1.536-2.272 1.6-.592.064-1.344.096-2.176-.272-.512-.224-1.152-.384-2.016-.768-3.52-1.536-5.824-5.12-6.016-5.344-.192-.224-1.44-1.92-1.44-3.648s.912-2.592 1.248-2.944c.288-.32.768-.448 1.024-.448h.736c.224 0 .544-.096.864.64.32.736 1.088 2.528 1.184 2.72.096.192.16.416.032.64-.128.224-.192.352-.384.544-.192.192-.4.432-.576.576-.192.16-.4.336-.192.656.224.32.992 1.632 2.112 2.656 1.456 1.312 2.672 1.728 3.008 1.92.32.192.512.16.704-.096.192-.256.8-.96 1.008-1.28.224-.32.448-.256.736-.16.32.128 2.048.96 2.4 1.152.352.192.576.288.64.448.064.16.064.928-.224 1.728z" />
</svg>

            <span>Contact on WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{product.description}</p>

        {/* Price Section */}
        <div className="flex items-baseline gap-3 mb-5">
          <span className="text-3xl font-bold text-foreground">₹{product.offerPrice}</span>
          <span className="text-base text-muted-foreground line-through">₹{product.originalPrice}</span>
          <span className="text-sm font-semibold text-[#25D366]">
            Save ₹{product.originalPrice - product.offerPrice}
          </span>
        </div>

        {/* Contact Button */}
        <button
          onClick={handleContactWhatsApp}
          className="w-full bg-[#25D366] text-white py-3 rounded-lg font-semibold hover:bg-[#20BA5A] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        >
         
          <span>Buy Now on WhatsApp</span>
        </button>
      </div>
    </div>
  )
}
