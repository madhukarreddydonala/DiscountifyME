"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Clock, Star, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Deal {
  id: string
  title: string
  description: string
  originalPrice: number
  discountedPrice: number
  discount: number
  category: string
  merchant: string
  location: string
  distance: string
  rating: number
  expiresAt: string
  image: string
}

interface DealCardProps {
  deal: Deal
}

export function DealCard({ deal }: DealCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    setIsWishlisted(wishlist.includes(deal.id))
  }, [deal.id])

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    let newWishlist

    if (isWishlisted) {
      newWishlist = wishlist.filter((id: string) => id !== deal.id)
      toast({
        title: "Removed from wishlist",
        description: `${deal.title} removed from wishlist.`,
      })
    } else {
      newWishlist = [...wishlist, deal.id]
      toast({
        title: "Added to wishlist",
        description: `${deal.title} added to wishlist.`,
      })
    }

    localStorage.setItem("wishlist", JSON.stringify(newWishlist))
    setIsWishlisted(!isWishlisted)
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "food":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
      case "fashion":
        return "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300"
      case "electronics":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 rounded-2xl border-0 shadow-md group dark:bg-gray-800">
      <div className="relative">
        <img src={deal.image || "/placeholder.svg"} alt={deal.title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 left-3">
          <Badge className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold px-3 py-1 rounded-xl">
            {deal.discount}% OFF
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-xl shadow-md"
          onClick={toggleWishlist}
        >
          <Heart
            className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600 dark:text-gray-400"}`}
          />
        </Button>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Button
            size="sm"
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Deal
          </Button>
        </div>
      </div>

      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-lg line-clamp-2 text-gray-900 dark:text-white">{deal.title}</h3>
          <Badge
            variant="outline"
            className={`${getCategoryColor(deal.category)} rounded-lg text-xs font-medium border-0`}
          >
            {deal.category}
          </Badge>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{deal.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">₹{deal.discountedPrice}</span>
            <span className="text-sm text-gray-500 dark:text-gray-500 line-through">₹{deal.originalPrice}</span>
          </div>
          <div className="flex items-center space-x-1 bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 rounded-lg">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{deal.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
            <span className="font-medium">
              {deal.location} • {deal.distance}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4 text-orange-500 dark:text-orange-400" />
            <span>Expires {deal.expiresAt}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{deal.merchant}</span>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 rounded-xl">
            Get Deal
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
